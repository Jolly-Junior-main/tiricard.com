import sys
from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    
    # We will assume that near-white pixels are background.
    # The image has a textured background, so we need a tolerance.
    threshold = 220  # Pixels brighter than this in all RGB will be transparent
    
    for item in data:
        r, g, b, a = item
        # If it's bright enough to be the background, make it transparent
        if r > threshold and g > threshold and b > threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background(sys.argv[1], sys.argv[2])
