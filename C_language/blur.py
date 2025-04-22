from PIL import Image, ImageFilter

before = Image.open("1.jpg")
# after = before.filter(ImageFilter.GaussianBlur(5))
# after.save("blurred.jpg")
# after.show()
img_gray = before.convert("L")
img_gray.save("gray.jpg")
img_gray.show()