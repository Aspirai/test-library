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

