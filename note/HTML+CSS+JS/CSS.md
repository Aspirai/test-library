#### 1.元素快速水平垂直居中

```
//对父元素设置
    display: flex;
    justify-content: center;
    align-items: center;
```

#### 2.元素放置在底部

​	1.父元素设置相对定位，子元素设置绝对定位

```
position:relative;//相对
position:absolute；//绝对
```

#### 3.字间距设置

```
letter-spacing: 12px;
```

#### 4.设置渐变背景

```
background: linear-gradient(45deg, #ffcc00, #ff6600, #ff0000);//三色，45度角渐变
```

#### 5.对于元素无法从左上角定位

​	设置元素为相对于浏览器窗口进行定位、然后设置top、left为0

```
position:fixed;
left:0px;
top:0px;
```

####  6.填充剩余位置

```
display:flex;//父元素设置
flex-direction:row;//横向布局
flex-direction:column;//纵向布局
```

#### 7.元素背景透明度设置

```
background-color：rgba(0,0,0,0.2)
```

#### 8.滚动条设置

```
overflow-y:scroll;//只显示右侧滚动条
overflow:scroll;//显示滚动条
```

#### 9.滚动条样式设计

```
Webkit 滚动条样式属性
::-webkit-scrollbar – 整个滚动条
::-webkit-scrollbar-track – 滚动条的滚动区域（轨道）
::-webkit-scrollbar-thumb – 滚动条的可拖拽部分（滑块）
以下是可用但不常用的属性：

::-webkit-scrollbar-button – 滚动条两端的上/下（或左/右）按钮
::-webkit-scrollbar-track-piece – 滚动条轨道未被滑块覆盖的部分
::-webkit-scrollbar-corner – 垂直滚动条和水平滚动条交汇的部分
```

#### 10.placeholder样式修改

```
::placeholder
```

#### 11.实现不同大小的字体在底部对齐

```
display:table-cell;
vertical-align:bottom;
```

#### 12.居中

```
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
```

#### 13.设置盒子阴影

```
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
```

#### 14.取消表格边框显示

```
border-collapse: collapse;//table设置
```

#### 15.修改选项框大小

```
#check {
    width: 20px; /* 设置宽度 */
    height: 20px; /* 设置高度 */
}
```

#### 16.设置复选框和按钮在同一水平线上

​	使用CSS中的`display`属性，并将它们设置为`inline-block`。此外，您可以使用`vertical-align`属性来垂直对齐它们。

```
#check,
.select {
    display: inline-block;
    vertical-align: middle; /* 垂直对齐方式可以根据需要进行调整 */
}
```

#### 17.设置td中图像垂直居中

```
td img{
    position: absolute;
    top: 2px;
}
td {
    position: relative;
}
```

#### 18.换行空格问题

```
&nbsp;		//不断行空格
&emsp;		//中等空格
&thinsp;	//窄空格
```

#### 19.按钮无法选中

​	1.需要设置class类；

​	2.不能直接在按钮上设置style的背景色，需要引用类名设置背景颜色

​	3.常用按钮状态设置类

```
:hover		//悬浮
:active		//点击
```

#### 20.input属性

```
文本框（Text Input）： <input type="text">
密码框（Password Input）： <input type="password">
日期选择框（Date Input）： <input type="date">
时间选择框（Time Input）： <input type="time">
电子邮件输入框（Email Input）： <input type="email">
数字输入框（Number Input）： <input type="number">
搜索框（Search Input）： <input type="search">
文件上传框（File Input）： <input type="file">
```

#### 21.隐藏滚动条

```
//方法一:
//父组件设置overflow:hidden;
//子组件设置overflow-y:scroll;margin-ringht:-50px;pading-right:50px;

//方法二：
//设置overflow-y:scroll;scrollbar-width:none;
```
