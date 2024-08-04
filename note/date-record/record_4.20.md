#### 1.填充剩余位置

```
display:flex;//父元素设置
flex-direction:row;//横向布局
flex-direction:column;//纵向布局
```

#### 2.VScode注释问题解决

   1.安装插件Vuter

![image-20240420104114767](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240420104114767.png)

   2.在设置搜索font ligatures,选择settings.json,搜索files.associations，其中添加“*.vue":"html"

![image-20240420104059667](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240420104059667.png)

![image-20240420104046289](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240420104046289.png)

#### 3.元素背景透明度设置

```
background-color：rgba(0,0,0,0.2)
```

#### 4.滚动条设置

```
overflow-y:scroll;//只显示右侧滚动条
overflow:scroll;//显示滚动条
```

#### 5.滚动条样式设计

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

#### 6.placeholder样式修改

```
::placeholder
```

#### 7. ReferenceError: ref is not defined报错

原因：在setup里直接使用ref需要引入

```
    import { ref } from 'vue'
```

#### 8.elementui--icon大小设置

```
//设置icon的style属性
style="font-size: 20px"
```

#### 9.浏览器快速创建新的标签页

```
Ctrl+T
```

#### 10.实现不同大小的字体在底部对齐

```
display:table-cell;
vertical-align:bottom;
```

#### 11.居中

```
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
```

