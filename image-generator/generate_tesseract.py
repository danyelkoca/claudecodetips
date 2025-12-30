"""Generate tesseract logo variations with tip-50 colors"""
import numpy as np
from PIL import Image, ImageDraw
from scipy.ndimage import gaussian_filter
import math

# Actual colors sampled from original logo
GOLD = np.array([176, 144, 88])      # top face
DARK = np.array([40, 73, 74])        # left face (teal)

SIZE = 1024
CX, CY = SIZE // 2, SIZE // 2


def lerp(c1, c2, t):
    return (c1 * (1 - t) + c2 * t).astype(np.uint8)


def add_grain(arr, intensity=15):
    noise = np.random.normal(0, intensity, (arr.shape[0], arr.shape[1]))
    noise = gaussian_filter(noise, sigma=0.8)
    result = arr.astype(np.float32)
    for c in range(3):
        result[:, :, c] = np.clip(result[:, :, c] + noise, 0, 255)
    return result.astype(np.uint8)


def create_tesseract(rotation=0, with_grain=True, dark_center=False):
    """Create filled tesseract with tip-50 colors

    rotation: 0, 1, 2, 3 (which face gets gold)
    with_grain: True/False
    dark_center: True = dark center, False = transparent/white
    """
    result = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))

    s_out = int(SIZE * 0.5)   # Outer square - fills edge to edge
    s_in = int(SIZE * 0.28)   # Inner square - BIGGER gap
    offset = int(SIZE * 0.08) # Offset - adjusted

    out = [
        (CX - s_out, CY - s_out),  # 0: top-left
        (CX + s_out, CY - s_out),  # 1: top-right
        (CX + s_out, CY + s_out),  # 2: bottom-right
        (CX - s_out, CY + s_out),  # 3: bottom-left
    ]
    inn = [
        (CX - s_in + offset, CY - s_in - offset),
        (CX + s_in + offset, CY - s_in + offset),
        (CX + s_in - offset, CY + s_in + offset),
        (CX - s_in - offset, CY + s_in - offset),
    ]

    # 4 faces - colors flow from GOLD to DARK
    # rotation shifts which face starts with gold
    base_colors = [
        (GOLD, lerp(GOLD, DARK, 0.3)),                    # Face 0: gold → gold-dark
        (lerp(GOLD, DARK, 0.3), lerp(GOLD, DARK, 0.6)),   # Face 1: transition
        (lerp(GOLD, DARK, 0.6), lerp(GOLD, DARK, 0.85)),  # Face 2: getting darker
        (lerp(GOLD, DARK, 0.85), DARK),                   # Face 3: dark
    ]

    # Apply rotation
    colors = base_colors[rotation:] + base_colors[:rotation]

    faces = [
        ([out[0], out[1], inn[1], inn[0]], colors[0]),  # Top
        ([out[1], out[2], inn[2], inn[1]], colors[1]),  # Right
        ([out[2], out[3], inn[3], inn[2]], colors[2]),  # Bottom
        ([out[3], out[0], inn[0], inn[3]], colors[3]),  # Left
    ]

    for pts, (c1, c2) in faces:
        # Calculate center of face for gradient
        cx_face = sum(p[0] for p in pts) / 4
        cy_face = sum(p[1] for p in pts) / 4

        g = np.zeros((SIZE, SIZE, 3), dtype=np.uint8)
        for y in range(SIZE):
            for x in range(SIZE):
                # Radial gradient from face center
                dx = x - cx_face
                dy = y - cy_face
                dist = math.sqrt(dx*dx + dy*dy)
                blend = min(dist / (SIZE * 0.3), 1.0)
                g[y, x] = lerp(c1, c2, blend)

        if with_grain:
            g = add_grain(g, 15)

        mask = Image.new('L', (SIZE, SIZE), 0)
        ImageDraw.Draw(mask).polygon(pts, fill=255)

        img = Image.fromarray(g, 'RGB').convert('RGBA')
        temp = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
        temp.paste(img, (0, 0), mask)
        result = Image.alpha_composite(result, temp)

    # Fill center if dark_center
    if dark_center:
        g_center = np.zeros((SIZE, SIZE, 3), dtype=np.uint8)
        g_center[:, :] = DARK
        if with_grain:
            g_center = add_grain(g_center, 15)

        mask_center = Image.new('L', (SIZE, SIZE), 0)
        ImageDraw.Draw(mask_center).polygon(inn, fill=255)

        img_center = Image.fromarray(g_center, 'RGB').convert('RGBA')
        temp_center = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
        temp_center.paste(img_center, (0, 0), mask_center)
        result = Image.alpha_composite(result, temp_center)

    return result


def main():
    img = create_tesseract(rotation=0, with_grain=False, dark_center=False)
    img.save('src/lib/images/logo.png', 'PNG')
    print(f"Generated: src/lib/images/logo.png ({SIZE}x{SIZE})")


if __name__ == '__main__':
    main()
