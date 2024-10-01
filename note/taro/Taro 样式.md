#### 1.复选框样式修改

```
// 设置选择框的样式
// 解释: wx-checkbox-input 是微信小程序的选择框的样式 
// wx-checkbox-input-checked 是选中后的样式 checkbox 是自定义的选择框样式
checkbox .wx-checkbox-input{
  border-radius: 50%;/* 圆角 */
  width: 30px; /* 背景的宽 */
  height: 30px; /* 背景的高 */
}

/* 选中后的 背景样式*/
checkbox .wx-checkbox-input.wx-checkbox-input-checked{
  border: 1rpx solid #28a745;
  background: #28a745;
}

// svg对勾的样式
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{
  border-radius: 50%;/* 圆角 */
  width: 30px;/* 选中后对勾大小，不要超过背景的尺寸 */
  height: 30px;/* 选中后对勾大小，不要超过背景的尺寸 */
  line-height: 30px;
  text-align: center;
  font-size:20px; /* 对勾大小 30rpx */
  color:#fff; /* 对勾颜色 白色 */
  background: transparent;
  transform:translate(-50%, -50%) scale(1);
  -webkit-transform:translate(-50%, -50%) scale(1);
}
```

![image-20240831212106575](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240831212106575.png)

#### 2.取消button默认边框

设置前

![image-20240912175612045](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240912175612045.png)

```scss
.verification-button {
  width: 200rpx;
  height: 60rpx;
  &[disabled] { // 设置禁用状态时样式
    border: none;
    font-size: 22rpx;
    background-color: #ccc;
    cursor: not-allowed;
  }
  &::after{ // 设置hover状态 取消默认边框显示
    border: none;
  }
}
```

设置后

![image-20240912175633879](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240912175633879.png)

#### 3.隐藏页面滚动条

1. **局部内容滚动并隐藏滚动条**

使用 `scroll-view` 容器实现局部滚动，并隐藏滚动条。

```html
<scroll-view class="content-scroll">
  <!-- 内容部分 -->
</scroll-view>
```

```css
/* wxss */
.content-scroll {
  height: 100vh; /* 限制滚动区域高度为全屏高度 */
  overflow-y: scroll; /* 启用垂直滚动 */
  -webkit-overflow-scrolling: touch; /* 平滑滚动效果 */
}

/* 隐藏滚动条 */
.content-scroll::-webkit-scrollbar {
  display: none;
}
```

2.**仅允许内部元素滚动，页面不滚动**

整个页面不滚动，内部某个容器可以滚动，设置如下：

```css
page {
  height: 100vh; /* 页面整体不可滚动 */
  overflow: hidden;
}

.scroll-area {
  height: 100%; /* 内部区域可以滚动 */
  overflow-y: scroll;
}

/* 隐藏滚动条 */
.scroll-area::-webkit-scrollbar {
  display: none;
}
```
