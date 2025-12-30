from PIL import Image, ImageFilter
import numpy as np
import os

W, H = 1200, 630

# v4: Dawn → Starry Night → Gold Mastery
# Modern gradient colors from WebGradients/uiGradients
SECTIONS = {
    'setup':         ([1, 2, 3],                ['#FFF1EB', '#ACE0F9', '#E0C3FC']),      # Dawn - soft pastels
    'safety':        ([4, 5, 6, 7],             ['#30CFD0', '#330867', '#5F72BD']),      # Ocean - cyan to deep blue
    'planning':      ([8, 9, 10, 11],           ['#9EFBD3', '#57E9F2', '#2AF598']),      # Forest - fresh greens
    'prompting':     ([12, 13, 14, 15, 16, 17], ['#FBED96', '#ABECD6', '#F6D365']),      # Sunshine - warm yellows
    'session':       ([18, 19, 20, 21],         ['#F6D365', '#FDA085', '#FBC2EB']),      # Golden Hour - peach/pink
    'input':         ([22, 23],                 ['#FDA085', '#FF989C', '#FECFEF']),      # Sunset Start - coral pink
    'multi-agent':   ([24, 25, 26, 27, 28],     ['#FF8177', '#CF556C', '#B12A5B']),      # Coral - warm reds
    'customization': ([29, 30, 31],             ['#FF0066', '#D41872', '#A445B2']),      # Fire - hot pink/magenta
    'pitfalls':      ([32, 33, 34, 35, 36, 37, 38, 39], ['#A445B2', '#9B23EA', '#5753C9']), # Twilight - purple
    'advanced':      ([40, 41, 42, 43, 44],     ['#5753C9', '#3D4E81', '#232526']),      # Dusk - deep indigo
    'use-cases':     ([45, 46, 47, 48, 49],     ['#232526', '#414345', '#0F2027']),      # Starry Night - dark
    'closing':       ([50],                     ['#0F2027', '#FFD700', '#F7971E']),      # GOLD MASTERY!
}

def hex_to_rgb(h):
    """Convert hex color to RGB array"""
    h = h.lstrip('#')
    return np.array([int(h[i:i+2], 16) for i in (0, 2, 4)])

def get_colors_for_tip(tip_id):
    """Get the 3 colors for a tip, with slight variation within section"""
    for section, (tips, colors) in SECTIONS.items():
        if tip_id in tips:
            # Convert to RGB
            c1, c2, c3 = [hex_to_rgb(c) for c in colors]

            # Add variation within section based on position
            idx = tips.index(tip_id)
            total = len(tips)

            if total > 1:
                # Shift hue slightly for each tip in section
                shift = (idx / (total - 1)) * 0.15 - 0.075  # -7.5% to +7.5%

                # Apply shift to middle color
                c2 = np.clip(c2 * (1 + shift), 0, 255).astype(np.uint8)

            return c1, c2, c3

    # Fallback
    return hex_to_rgb('#FF006E'), hex_to_rgb('#FB5607'), hex_to_rgb('#FFBE0B')

def add_grain(img_array, amount=0.10):
    """Add film grain texture - MUST be called AFTER blur"""
    noise = np.random.normal(0, amount * 255, img_array.shape)
    noisy = img_array.astype(np.float64) + noise
    return np.clip(noisy, 0, 255).astype(np.uint8)

def make_gradient(tip_id, seed):
    """Create beautiful gradient with pattern variation"""
    np.random.seed(seed)

    c1, c2, c3 = get_colors_for_tip(tip_id)

    y, x = np.ogrid[:H, :W]
    y_norm = y / H
    x_norm = x / W

    # Choose pattern based on tip (cycles through 4 types)
    pattern = tip_id % 4

    if pattern == 0:
        # DIAGONAL with wave distortion
        angle = np.random.uniform(0.25, 0.75)
        t = x_norm * angle + y_norm * (1 - angle)
        wave = np.sin(np.broadcast_to(t, (H, W)) * np.pi * 2.5) * 0.08
        t = np.clip(np.broadcast_to(t, (H, W)) + wave, 0, 1)

    elif pattern == 1:
        # RADIAL from offset center
        cx = np.random.uniform(0.25, 0.75)
        cy = np.random.uniform(0.25, 0.75)
        dist = np.sqrt((x_norm - cx)**2 + (y_norm - cy)**2)
        t = np.clip(np.broadcast_to(dist, (H, W)) / 0.7, 0, 1)

    elif pattern == 2:
        # ANGULAR/CONIC gradient
        cx, cy = np.random.uniform(0.3, 0.7), np.random.uniform(0.3, 0.7)
        angle = np.arctan2(y_norm - cy, x_norm - cx)
        t = (angle + np.pi) / (2 * np.pi)
        rotation = np.random.uniform(0, 1)
        t = (np.broadcast_to(t, (H, W)) + rotation) % 1

    else:
        # HORIZONTAL with vertical wave
        wave_freq = np.random.uniform(1.5, 2.5)
        wave = np.sin(np.broadcast_to(y_norm, (H, W)) * np.pi * wave_freq) * 0.12
        t = np.clip(np.broadcast_to(x_norm, (H, W)) + wave, 0, 1)

    # Create base gradient interpolating 3 colors
    img = np.zeros((H, W, 3), dtype=np.float64)

    for i in range(3):
        # Smooth 3-color blend: c1 → c2 → c3
        mask1 = t < 0.5
        t1 = t * 2  # 0-0.5 → 0-1
        t2 = (t - 0.5) * 2  # 0.5-1 → 0-1

        img[:, :, i] = np.where(mask1,
            c1[i] * (1 - t1) + c2[i] * t1,
            c2[i] * (1 - t2) + c3[i] * t2
        )

    # Add organic blob overlays for depth
    num_blobs = np.random.randint(2, 4)
    for _ in range(num_blobs):
        bx = np.random.uniform(0.15, 0.85) * W
        by = np.random.uniform(0.15, 0.85) * H
        br = np.random.uniform(0.2, 0.4) * max(W, H)

        dist = np.sqrt((x - bx)**2 + (y - by)**2)
        weight = np.exp(-(dist**2) / (2 * br**2)) * np.random.uniform(0.2, 0.35)

        blob_color = [c1, c2, c3][np.random.randint(0, 3)]
        for i in range(3):
            img[:, :, i] = img[:, :, i] * (1 - weight) + blob_color[i] * weight

    img = np.clip(img, 0, 255)

    # Step 1: Blur FIRST for smooth gradients
    result = Image.fromarray(img.astype(np.uint8))
    result = result.filter(ImageFilter.GaussianBlur(radius=6))

    # Step 2: Add grain AFTER blur (so it's visible!)
    result_array = np.array(result)
    result_array = add_grain(result_array, amount=0.10)

    return Image.fromarray(result_array)

def make_bonus():
    """BONUS: Ultimate celebration - Gold + Magenta + Deep Purple"""
    np.random.seed(99999)

    # Rich celebration colors
    c1 = hex_to_rgb('#FFD700')  # Pure GOLD
    c2 = hex_to_rgb('#FF006E')  # Hot pink/magenta
    c3 = hex_to_rgb('#3D0066')  # Deep royal purple

    y, x = np.ogrid[:H, :W]
    y_norm = y / H
    x_norm = x / W

    # Angular/conic gradient for celebration feel
    cx, cy = 0.45, 0.55
    angle = np.arctan2(y_norm - cy, x_norm - cx)
    t = (angle + np.pi) / (2 * np.pi)
    t = (np.broadcast_to(t, (H, W)) + 0.15) % 1

    img = np.zeros((H, W, 3), dtype=np.float64)

    for i in range(3):
        mask1 = t < 0.5
        t1 = t * 2
        t2 = (t - 0.5) * 2
        img[:, :, i] = np.where(mask1,
            c1[i] * (1 - t1) + c2[i] * t1,
            c2[i] * (1 - t2) + c3[i] * t2
        )

    # Golden glow in center
    gx, gy = 0.5 * W, 0.45 * H
    gr = 0.4 * max(W, H)
    dist = np.sqrt((x - gx)**2 + (y - gy)**2)
    gold_glow = np.exp(-(dist**2) / (2 * gr**2)) * 0.5

    for i in range(3):
        img[:, :, i] = img[:, :, i] * (1 - gold_glow) + c1[i] * gold_glow

    # Pink accent
    px, py = 0.75 * W, 0.65 * H
    pr = 0.25 * max(W, H)
    dist2 = np.sqrt((x - px)**2 + (y - py)**2)
    pink_glow = np.exp(-(dist2**2) / (2 * pr**2)) * 0.3

    for i in range(3):
        img[:, :, i] = img[:, :, i] * (1 - pink_glow) + c2[i] * pink_glow

    img = np.clip(img, 0, 255)

    result = Image.fromarray(img.astype(np.uint8))
    result = result.filter(ImageFilter.GaussianBlur(radius=6))
    result_array = np.array(result)
    result_array = add_grain(result_array, amount=0.10)

    return Image.fromarray(result_array)


def make_intro():
    """Special intro image - welcoming dawn colors"""
    np.random.seed(7777)

    # Soft welcoming pastels
    c1 = hex_to_rgb('#E0C3FC')  # Soft lavender
    c2 = hex_to_rgb('#8EC5FC')  # Sky blue
    c3 = hex_to_rgb('#FFF1EB')  # Warm white

    y, x = np.ogrid[:H, :W]
    y_norm = y / H
    x_norm = x / W

    # Gentle diagonal
    t = x_norm * 0.6 + y_norm * 0.4
    t = np.broadcast_to(t, (H, W))

    img = np.zeros((H, W, 3), dtype=np.float64)

    for i in range(3):
        mask1 = t < 0.5
        t1 = t * 2
        t2 = (t - 0.5) * 2

        img[:, :, i] = np.where(mask1,
            c1[i] * (1 - t1) + c2[i] * t1,
            c2[i] * (1 - t2) + c3[i] * t2
        )

    # Soft blob
    bx, by = 0.3 * W, 0.4 * H
    br = 0.35 * max(W, H)
    dist = np.sqrt((x - bx)**2 + (y - by)**2)
    weight = np.exp(-(dist**2) / (2 * br**2)) * 0.25

    for i in range(3):
        img[:, :, i] = img[:, :, i] * (1 - weight) + c1[i] * weight

    img = np.clip(img, 0, 255)

    result = Image.fromarray(img.astype(np.uint8))
    result = result.filter(ImageFilter.GaussianBlur(radius=6))

    result_array = np.array(result)
    result_array = add_grain(result_array, amount=0.10)

    return Image.fromarray(result_array)


# Generate all images
os.makedirs('src/lib/images/tips', exist_ok=True)

print("Generating v4 gradients: Dawn -> Starry Night -> Gold Mastery")
print("=" * 50)

for tip in range(1, 51):  # 50 tips (1-50)
    img = make_gradient(tip, tip * 137 + 42)
    img.save(f'src/lib/images/tips/tip-{tip:02d}.png')

    # Find section name for logging
    section_name = "unknown"
    for name, (tips, _) in SECTIONS.items():
        if tip in tips:
            section_name = name
            break

    print(f'  tip-{tip:02d}.png [{section_name}]')

# Intro image
intro_img = make_intro()
intro_img.save('src/lib/images/tips/intro.png')
print('  intro.png [welcome]')

# Bonus image - THE BEST
bonus_img = make_bonus()
bonus_img.save('src/lib/images/tips/bonus.png')
print('  bonus.png [CELEBRATION!]')

print("=" * 50)
print(f'Done! 52 images generated (50 tips + intro + bonus)')
