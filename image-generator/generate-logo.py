"""
Logo Generator - Creates SVG, PNG, ICO, WebP versions of the logo.

4 Variants:
- transparent-dark: Transparent bg, black symbol (for light backgrounds)
- transparent-white: Transparent bg, white symbol (for dark backgrounds)
- dark-bg: Dark bg, white symbol (favicon, anywhere)
- white-bg: White bg, black symbol (anywhere)

Additional outputs:
- logo-og.webp: 1200x630 OG image with centered logo
- apple-touch-icon.png: 180x180 for iOS

Formats: SVG, PNG (multiple sizes), ICO, WebP
"""

import os
import subprocess

# Colors
DARK = "#0a0a0a"
WHITE = "#fafafa"
LIGHT_BG = "#ffffff"

# PNG sizes for square logos
SIZES = [512]

# OG image dimensions
OG_WIDTH = 1200
OG_HEIGHT = 630

# Apple touch icon size
APPLE_TOUCH_SIZE = 180

# SVG template - chevron + dot
def svg_template(bg_color, fg_color):
    bg_rect = f'<rect width="48" height="48" fill="{bg_color}"/>' if bg_color else ''
    return f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  {bg_rect}
  <path d="M10 38 L24 24 L38 38" stroke="{fg_color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="24" cy="11" r="3" fill="{fg_color}"/>
</svg>'''

# Variants: (name, bg_color, fg_color)
VARIANTS = [
    ("transparent-dark", None, DARK),
    ("transparent-white", None, WHITE),
    ("dark-bg", DARK, WHITE),
    ("white-bg", LIGHT_BG, DARK),
]

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = os.path.join(script_dir, "logo")
    os.makedirs(output_dir, exist_ok=True)

    print("Generating logo variants...")
    print("=" * 50)

    for name, bg, fg in VARIANTS:
        svg_content = svg_template(bg, fg)
        svg_path = os.path.join(output_dir, f"logo-{name}.svg")

        # Save SVG
        with open(svg_path, "w") as f:
            f.write(svg_content)
        print(f"  {name}.svg")

        # Generate PNGs using sharp (via node)
        for size in SIZES:
            png_path = os.path.join(output_dir, f"logo-{name}-{size}.png")
            node_script = f'''
const sharp = require("sharp");
sharp(Buffer.from(`{svg_content}`))
  .resize({size}, {size})
  .png()
  .toFile("{png_path}")
  .then(() => process.exit(0))
  .catch(err => {{ console.error(err); process.exit(1); }});
'''
            subprocess.run(["node", "-e", node_script], check=True, capture_output=True)
        print(f"  {name} PNGs: {', '.join(str(s) for s in SIZES)}")

    # Generate ICO files (only for bg variants - transparent doesn't work well for favicon)
    for name, bg, fg in [("dark-bg", DARK, WHITE), ("white-bg", LIGHT_BG, DARK)]:
        svg_content = svg_template(bg, fg)
        ico_path = os.path.join(output_dir, f"logo-{name}.ico")
        png_32 = os.path.join(output_dir, f"_tmp-{name}-32.png")
        png_16 = os.path.join(output_dir, f"_tmp-{name}-16.png")

        # Generate temp PNGs for ICO
        for size, path in [(32, png_32), (16, png_16)]:
            node_script = f'''
const sharp = require("sharp");
sharp(Buffer.from(`{svg_content}`))
  .resize({size}, {size})
  .png()
  .toFile("{path}")
  .then(() => process.exit(0))
  .catch(err => {{ console.error(err); process.exit(1); }});
'''
            subprocess.run(["node", "-e", node_script], check=True, capture_output=True)

        subprocess.run(
            ["npx", "--yes", "png-to-ico", png_32, png_16],
            stdout=open(ico_path, "wb"),
            check=True,
            capture_output=False
        )

        # Clean up temp files
        os.remove(png_32)
        os.remove(png_16)
        print(f"  {name}.ico")

    # Generate OG image (1200x630 WebP with centered logo on dark bg)
    print("\nGenerating OG image...")
    og_path = os.path.join(output_dir, "logo-og.webp")
    # Create SVG at OG dimensions with centered logo
    og_svg = f'''<svg viewBox="0 0 {OG_WIDTH} {OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{OG_WIDTH}" height="{OG_HEIGHT}" fill="{DARK}"/>
  <g transform="translate({OG_WIDTH/2 - 120}, {OG_HEIGHT/2 - 120}) scale(5)">
    <path d="M10 38 L24 24 L38 38" stroke="{WHITE}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="24" cy="11" r="3" fill="{WHITE}"/>
  </g>
</svg>'''
    node_script = f'''
const sharp = require("sharp");
sharp(Buffer.from(`{og_svg}`))
  .resize({OG_WIDTH}, {OG_HEIGHT})
  .webp({{ quality: 90 }})
  .toFile("{og_path}")
  .then(() => process.exit(0))
  .catch(err => {{ console.error(err); process.exit(1); }});
'''
    subprocess.run(["node", "-e", node_script], check=True, capture_output=True)
    og_size = os.path.getsize(og_path)
    print(f"  logo-og.webp: {og_size/1024:.1f}KB")

    # Generate Apple Touch Icon (180x180 PNG with dark bg)
    print("\nGenerating Apple Touch Icon...")
    apple_path = os.path.join(output_dir, "apple-touch-icon.png")
    svg_content = svg_template(DARK, WHITE)
    node_script = f'''
const sharp = require("sharp");
sharp(Buffer.from(`{svg_content}`))
  .resize({APPLE_TOUCH_SIZE}, {APPLE_TOUCH_SIZE})
  .png()
  .toFile("{apple_path}")
  .then(() => process.exit(0))
  .catch(err => {{ console.error(err); process.exit(1); }});
'''
    subprocess.run(["node", "-e", node_script], check=True, capture_output=True)
    apple_size = os.path.getsize(apple_path)
    print(f"  apple-touch-icon.png: {apple_size/1024:.1f}KB")

    print("=" * 50)
    print("Done!")

if __name__ == "__main__":
    main()
