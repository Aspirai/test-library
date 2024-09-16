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

#### 2.模板字符串----允许在字符串中嵌入表达式

模板字符串是在反引号 ``` 中定义的字符串，它允许在字符串中嵌入表达式。`${}` 是模板字符串的语法，用来插入变量或表达式的值。

```
//eg:
url: `http://101.35.55.227:8000/api/v1/chat/?query=${inputValue}`
等价
url: 'http://101.35.55.227:8000/api/v1/chat/?query=' + inputValue
```

