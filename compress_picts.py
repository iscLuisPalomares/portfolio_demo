from PIL import Image
import os


directory = 'src/assets/images/portrait'
index = -1
for filename in os.listdir(directory):
    index += 1
    f = os.path.join(directory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        image = Image.open(f)
        imgcopy = image.copy()
        # image.resize((888, 667), Image.Resampling.BILINEAR)
        imgcopy.thumbnail((888,667))
        fnoext = f.split('.')[0]
        imgcopy.save(f'{fnoext}_min.jpg', "JPEG")
        
