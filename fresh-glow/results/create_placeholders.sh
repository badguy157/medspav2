#!/bin/bash
# Create placeholder images using ImageMagick if available, or simple solid color PNGs

if command -v convert &> /dev/null; then
    # Using ImageMagick
    convert -size 320x420 xc:#E8E8E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "Before\nForehead" results-forehead-before.jpg
    convert -size 320x420 xc:#D4F1E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "After\nForehead" results-forehead-after.jpg
    
    convert -size 320x420 xc:#E8E8E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "Before\nLips" results-lips-before.jpg
    convert -size 320x420 xc:#D4F1E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "After\nLips" results-lips-after.jpg
    
    convert -size 320x420 xc:#E8E8E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "Before\nUnder Eye" results-undereye-before.jpg
    convert -size 320x420 xc:#D4F1E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "After\nUnder Eye" results-undereye-after.jpg
    
    convert -size 320x420 xc:#E8E8E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "Before\nSkin Tone" results-tone-before.jpg
    convert -size 320x420 xc:#D4F1E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "After\nSkin Tone" results-tone-after.jpg
    
    convert -size 320x420 xc:#E8E8E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "Before\nCheeks" results-cheeks-before.jpg
    convert -size 320x420 xc:#D4F1E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "After\nCheeks" results-cheeks-after.jpg
    
    convert -size 320x420 xc:#E8E8E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "Before\nPores" results-pores-before.jpg
    convert -size 320x420 xc:#D4F1E8 -pointsize 24 -fill black -gravity center -annotate +0+0 "After\nPores" results-pores-after.jpg
else
    echo "ImageMagick not available, trying Python with PIL"
    python3 << 'PYEOF'
from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(filename, bg_color, text):
    img = Image.new('RGB', (320, 420), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((320 - text_width) // 2, (420 - text_height) // 2)
    draw.text(position, text, fill='black', font=font)
    
    img.save(filename, 'JPEG', quality=85)
    print(f"Created {filename}")

create_placeholder('results-forehead-before.jpg', '#E8E8E8', 'Before\nForehead')
create_placeholder('results-forehead-after.jpg', '#D4F1E8', 'After\nForehead')
create_placeholder('results-lips-before.jpg', '#E8E8E8', 'Before\nLips')
create_placeholder('results-lips-after.jpg', '#D4F1E8', 'After\nLips')
create_placeholder('results-undereye-before.jpg', '#E8E8E8', 'Before\nUnder Eye')
create_placeholder('results-undereye-after.jpg', '#D4F1E8', 'After\nUnder Eye')
create_placeholder('results-tone-before.jpg', '#E8E8E8', 'Before\nSkin Tone')
create_placeholder('results-tone-after.jpg', '#D4F1E8', 'After\nSkin Tone')
create_placeholder('results-cheeks-before.jpg', '#E8E8E8', 'Before\nCheeks')
create_placeholder('results-cheeks-after.jpg', '#D4F1E8', 'After\nCheeks')
create_placeholder('results-pores-before.jpg', '#E8E8E8', 'Before\nPores')
create_placeholder('results-pores-after.jpg', '#D4F1E8', 'After\nPores')
PYEOF
fi
