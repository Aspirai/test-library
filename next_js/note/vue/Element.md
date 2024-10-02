#### 1.Element修改样式穿透

​	1.input修改方法：使用deep告诉浏览器覆盖原样式；

```
  :deep(.el-input__wrapper){//按F12查找所需要修改的元素的class
    border-radius: 30px;
  }
```

![image-20240419124734711](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240419124734711.png)

​	2.按钮修改方法:

```
设置属性
:.el-button{}
```

#### 2.ElementUI container布局容器引入不生效问题

​	1.先在main.ts引入Element

```js
// 引入Element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus);
```

​	2.在引入界面的style添加样式

```js
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
```

#### 3.elementui--icon大小设置

```js
//设置icon的style属性
style="font-size: 20px"
```

#### 4.element修改级联选择器输入框高度问题

```js
::v-deep(.el-cascader .el-input__wrapper){
    border-radius: 20px;
    width: 40px;
}
```

#### 5.