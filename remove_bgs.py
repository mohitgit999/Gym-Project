import os
from rembg import remove
from PIL import Image
import glob

public_dir = '/Users/mohitverma96038/MERN/Temporary Project/public'
image_files = glob.glob(os.path.join(public_dir, '*.png'))

for img_path in image_files:
    print(f"Processing {img_path}...")
    try:
        input_image = Image.open(img_path)
        output_image = remove(input_image)
        output_image.save(img_path)
        print(f"Saved transparent image to {img_path}")
    except Exception as e:
        print(f"Failed on {img_path}: {e}")
