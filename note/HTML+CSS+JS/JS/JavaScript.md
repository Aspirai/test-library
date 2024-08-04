#### 1.设置图片自动切换

```
<img :src="images[currentIndex]" alt="Description of the image" @click="nextImage">
```

```
export default {
  data() {
    return {
      currentIndex: 0, // 当前显示的图像索引
      images: [ // 图像的URL数组,public
        './assets/image1.jpg',
        './assets/image2.jpg',
        './assets/image3.jpg'
      ]
    };
  },
  methods: {
    nextImage() {
      // 切换到下一张图像
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
}
```

