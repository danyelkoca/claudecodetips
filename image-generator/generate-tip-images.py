from PIL import Image, ImageFilter
import numpy as np
import os

W, H = 1200, 630
WEBP_QUALITY = 85

SECTIONS = {
    'setup':         ([1, 2, 3],                ['#FFF1EB', '#ACE0F9', '#E0C3FC']),
    'safety':        ([4, 5, 6, 7],             ['#30CFD0', '#330867', '#5F72BD']),
    'planning':      ([8, 9, 10, 11],           ['#9EFBD3', '#57E9F2', '#2AF598']),
    'prompting':     ([12, 13, 14, 15, 16, 17], ['#FBED96', '#ABECD6', '#F6D365']),
    'session':       ([18, 19, 20, 21],         ['#F6D365', '#FDA085', '#FBC2EB']),
    'input':         ([22, 23],                 ['#FDA085', '#FF989C', '#FECFEF']),
    'multi-agent':   ([24, 25, 26, 27, 28],     ['#FF8177', '#CF556C', '#B12A5B']),
    'customization': ([29, 30, 31],             ['#FF0066', '#D41872', '#A445B2']),
    'pitfalls':      ([32, 33, 34, 35, 36, 37, 38, 39], ['#A445B2', '#9B23EA', '#5753C9']),
    'advanced':      ([40, 41, 42, 43, 44],     ['#5753C9', '#3D4E81', '#232526']),
    'use-cases':     ([45, 46, 47, 48, 49],     ['#232526', '#414345', '#0F2027']),
    'closing':       ([50],                     ['#0F2027', '#FFD700', '#F7971E']),
}

def hex_to_rgb(h):
    h = h.lstrip('#')
    return np.array([int(h[i:i+2], 16) for i in (0, 2, 4)])

def get_colors_for_tip(tip_id):
    for section, (tips, colors) in SECTIONS.items():
        if tip_id in tips:
            c1, c2, c3 = [hex_to_rgb(c) for c in colors]
            idx = tips.index(tip_id)
            total = len(tips)
            if total > 1:
                shift = (idx / (total - 1)) * 0.15 - 0.075
                c2 = np.clip(c2 * (1 + shift), 0, 255).astype(np.uint8)
            return c1, c2, c3
    return hex_to_rgb('#FF006E'), hex_to_rgb('#FB5607'), hex_to_rgb('#FFBE0B')

def make_gradient(tip_id, seed):
    np.random.seed(seed)
    c1, c2, c3 = get_colors_for_tip(tip_id)
    y, x = np.ogrid[:H, :W]
    y_norm = y / H
    x_norm = x / W

    pattern = tip_id % 4

    if pattern == 0:
        angle = np.random.uniform(0.25, 0.75)
        t = x_norm * angle + y_norm * (1 - angle)
        wave = np.sin(np.broadcast_to(t, (H, W)) * np.pi * 2.5) * 0.08
        t = np.clip(np.broadcast_to(t, (H, W)) + wave, 0, 1)
    elif pattern == 1:
        cx = np.random.uniform(0.25, 0.75)
        cy = np.random.uniform(0.25, 0.75)
        dist = np.sqrt((x_norm - cx)**2 + (y_norm - cy)**2)
        t = np.clip(np.broadcast_to(dist, (H, W)) / 0.7, 0, 1)
    elif pattern == 2:
        cx, cy = np.random.uniform(0.3, 0.7), np.random.uniform(0.3, 0.7)
        angle = np.arctan2(y_norm - cy, x_norm - cx)
        t = (angle + np.pi) / (2 * np.pi)
        rotation = np.random.uniform(0, 1)
        t = (np.broadcast_to(t, (H, W)) + rotation) % 1
    else:
        wave_freq = np.random.uniform(1.5, 2.5)
        wave = np.sin(np.broadcast_to(y_norm, (H, W)) * np.pi * wave_freq) * 0.12
        t = np.clip(np.broadcast_to(x_norm, (H, W)) + wave, 0, 1)

    img = np.zeros((H, W, 3), dtype=np.float64)
    for i in range(3):
        mask1 = t < 0.5
        t1 = t * 2
        t2 = (t - 0.5) * 2
        img[:, :, i] = np.where(mask1,
            c1[i] * (1 - t1) + c2[i] * t1,
            c2[i] * (1 - t2) + c3[i] * t2
        )

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
    result = Image.fromarray(img.astype(np.uint8))
    result = result.filter(ImageFilter.GaussianBlur(radius=6))
    return result

def make_bonus():
    np.random.seed(99999)
    c1 = hex_to_rgb('#FFD700')
    c2 = hex_to_rgb('#FF006E')
    c3 = hex_to_rgb('#3D0066')

    y, x = np.ogrid[:H, :W]
    y_norm = y / H
    x_norm = x / W

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

    gx, gy = 0.5 * W, 0.45 * H
    gr = 0.4 * max(W, H)
    dist = np.sqrt((x - gx)**2 + (y - gy)**2)
    gold_glow = np.exp(-(dist**2) / (2 * gr**2)) * 0.5
    for i in range(3):
        img[:, :, i] = img[:, :, i] * (1 - gold_glow) + c1[i] * gold_glow

    px, py = 0.75 * W, 0.65 * H
    pr = 0.25 * max(W, H)
    dist2 = np.sqrt((x - px)**2 + (y - py)**2)
    pink_glow = np.exp(-(dist2**2) / (2 * pr**2)) * 0.3
    for i in range(3):
        img[:, :, i] = img[:, :, i] * (1 - pink_glow) + c2[i] * pink_glow

    img = np.clip(img, 0, 255)
    result = Image.fromarray(img.astype(np.uint8))
    result = result.filter(ImageFilter.GaussianBlur(radius=6))
    return result

# Main
output_dir = 'static/images/tips'
os.makedirs(output_dir, exist_ok=True)

print("Generating WebP images (1200x630, no grain)")
print("=" * 50)

total_size = 0

for tip in range(1, 51):
    img = make_gradient(tip, tip * 137 + 42)
    path = f'{output_dir}/tip-{tip:02d}.webp'
    img.save(path, format='WEBP', quality=WEBP_QUALITY)
    size = os.path.getsize(path)
    total_size += size
    print(f'  tip-{tip:02d}.webp: {size/1024:.1f}KB')

# Bonus (tip 51)
bonus = make_bonus()
bonus_path = f'{output_dir}/bonus.webp'
bonus.save(bonus_path, format='WEBP', quality=WEBP_QUALITY)
size = os.path.getsize(bonus_path)
total_size += size
print(f'  bonus.webp: {size/1024:.1f}KB')

print("=" * 50)
print(f"Total: {total_size/1024:.1f}KB ({total_size/1024/1024:.2f}MB)")
