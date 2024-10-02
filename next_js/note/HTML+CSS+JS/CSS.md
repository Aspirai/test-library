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
box-shadow: h-offset v-offset blur-radius spread-radius color inset;
```

**h-offset（水平偏移）**：

- 这是阴影的水平偏移距离，可以是正值或负值。
- 正值：阴影向右偏移。
- 负值：阴影向左偏移。

**v-offset（垂直偏移）**：

- 这是阴影的垂直偏移距离，也可以是正值或负值。
- 正值：阴影向下偏移。
- 负值：阴影向上偏移。

**blur-radius（模糊半径）**：

- 可选参数，定义阴影的模糊程度。
- 值越大，阴影越模糊且扩散。
- 值为 `0` 时，阴影是锐利的（没有模糊）。

**spread-radius（扩展半径）**：

- 可选参数，定义阴影的扩展程度。
- 正值：阴影扩大。
- 负值：阴影收缩。

**color（颜色）**：

- 可选参数，定义阴影的颜色。
- 默认是黑色 (`black`)。
- 可以使用颜色名称、HEX、RGB、RGBA、HSL等方式指定颜色。

**inset（内阴影）**：

- 可选关键字，用于将阴影从外阴影变为内阴影。
- 内阴影会向元素内部投影，而非外部。

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

#### 22.设置padding后元素的边距异常变化

```
容器宽度和高度的问题

    100vw 和 100vh 分别代表视口宽度和高度。由于设置了 width: 100vw 和 height: 100vh，并且 box-sizing 默认是 content-box，padding 会增加实际的渲染尺寸，因此可能会超出视口大小，使得右边距和下边距看起来没有效果。
    box-sizing 的影响

    默认情况下，box-sizing 是 content-box，这意味着 padding 和 border 会增加元素的尺寸。如果希望包含 padding 和 border 在内的元素总尺寸为 100vw 和 100vh，你可以将 box-sizing 设置为 border-box。

解决方案：

    调整 box-sizing：

    设置 box-sizing: border-box; 确保元素的 padding 和 border 包含在 width 和 height 中，这样可以避免超出视口的问题。


.calendar {
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  padding: 10px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
}

减少宽度和高度：

如果你不想改变 box-sizing，可以将宽度和高度设置得略小于 100vw 和 100vh，例如：

.calendar {
  height: calc(100vh - 20px); /* 减去 padding */
  width: calc(100vw - 20px);  /* 减去 padding */
  padding: 10px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
}

这样做可以确保 padding 的效果能够在视口内完整显示。
```

#### 23.动态计算单位calc()

```
width: calc(50% - 6px); 是 CSS 中使用 calc() 函数来动态计算宽度的一个例子。这个表达式的含义如下：
1. calc() 函数
    calc() 函数允许你在 CSS 中进行动态计算，将不同的单位（如百分比、像素等）组合在一起。
    它支持基本的算术运算：加（+）、减（-）、乘（*）和除（/）。
2. 50%
    50% 表示父元素宽度的 50%。这是一个相对单位，依赖于父元素的宽度。
3. - 6px
    减去 6px 表示在 50% 的基础上减少 6 像素。px 是一个绝对单位，表示像素。

4. 组合
    width: calc(50% - 6px); 的最终效果是，元素的宽度将是父元素宽度的一半减去 6 像素。这在需要对元素进行精确布局时非常有用，比如创建两个等宽且有一定间距的元素时。
```

#### 24.元素动态上浮效果

```
import { useState } from 'react';
import { View, Text, Input, Button } from '@tarojs/components';
import './InputBar.scss';

export default function InputBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
  //1.这里控制页面样式，是否使用expanded
    <View className={`input-bar ${isExpanded ? 'expanded' : ''}`}>
      <View className="input-container">
        <Input className="input" placeholder="请输入..." />
        <Button className="toggle-btn" onClick={toggleExpand}>+</Button>
      </View>
      {isExpanded && (
        <View className="function-bar">
          <Text>功能1</Text>
          <Text>功能2</Text>
          <Text>功能3</Text>
          {/* 在这里可以添加其他功能项 */}
        </View>
      )}
    </View>
  );
}

```

```
.input-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  // 2.这里设置当expanded为ture时，使用的样式
  &.expanded {
    transform: translateY(-100px); // 控制输入栏上浮的高度
  }
}

.input-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #eaeaea;
}

.input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
}

.toggle-btn {
  margin-left: 10px;
  background-color: #007aff;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.function-bar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f8f8f8;
}

```

#### 25.Grid布局

使用grid布局

```SCSS
.main-features{
  max-width: 100%;
  height: 21%;
  display: grid; // 使用grid布局
  grid-template-columns: 1fr 1fr; // fr：剩余空间
  grid-template-rows: 1fr 1fr;
  row-gap: 15px; // 行间距
  column-gap: 15px; // 列间距
  margin: 0 20px 0 0;
  border: 1px solid #ff4141;
}
```

属性解析

1. 使用 `grid-template-columns` 和 `grid-template-rows` 来定义列和行的数量和尺寸；

```SCSS
  display: grid;   
  grid-template-columns: 100px 200px 100px; /* 定义三列，分别宽100px, 200px和100px */
  grid-template-rows: 50px 100px; /* 定义两行，分别高50px和100px */
```

1. `使用grid-template-areas` 定义命名的网格区域，并使用 `grid-area` 将元素放置在这些区域中。

```SCSS
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 1fr 2fr 1fr; /* 使用 fr 单位，表示比例 */
  grid-template-rows: auto 1fr auto;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}
```

![img](https://lcnm2fuxr31h.feishu.cn/space/api/box/stream/download/asynccode/?code=M2MyZjg1NGVkNTI3ZTRiM2U0NDYxMmI0NTkyZTNmODVfVkpYNDlodmt1YXJBOVJ3TFdDUDJseUJjdWx1UEZWbXFfVG9rZW46UXlKcWJnaTBwb21FZXB4OUxlUmNjb29pbnloXzE3MjQ3NDc0MDY6MTcyNDc1MTAwNl9WNA)

1. 可以使用 `grid-column` 和 `grid-row` 来让元素跨越多列或多行。

```SCSS
.item1 {
    grid-column: 1 / 3;
    /* 从第1列跨到第3列 */
    grid-row: 1 / 2;
    /* 从第1行跨到第2行 */
}

.item2 {
    grid-column: 2 / 4;
    /* 从第2列跨到第4列 */
    grid-row: 2 / 3;
    /* 从第2行跨到第3行 */
}
```

1. 使用 `column-gap` 和 `row-gap` 来设置行和列之间的间隙。

```SCSS
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  row-gap: 15px; // 行间距
  column-gap: 15px; // 列间距
}
```

1. 使用 `repeat()` 函数简化重复的列或行定义。还可以使用 `auto-fill` 和 `auto-fit` 自动填充网格。

```SCSS
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3列，平分容器宽度 */
    grid-template-rows: repeat(2, 100px);
    /* 2行，每行100px */
}

/* 另一个容器 */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    /* 自动填充列，列宽最小100px，最大平分容器 */
}
```

![img](https://lcnm2fuxr31h.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWE1OWNhMDVhODRkM2U2YTY1ODBhOTgzYzI1MjE4ODBfMlVCQkxOU21QREo0ZVBSVTRpaGNaSWZTeTM0bFdqNlRfVG9rZW46SUxqemJ6Wjdzb1pMbWp4blVZU2NQTlA2blljXzE3MjQ3NDc0MDY6MTcyNDc1MTAwNl9WNA)

1. 嵌套网格（Subgrid）

```SCSS
.outer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.inner-grid {
    display: grid;
    grid-template-columns: subgrid;
    /* 使用父网格的模板 */
}
```

备注

- 网格线不能显示，但是可以设置子元素的边框间接显示网格线；或者使用Google调试工具，在Layout选项勾选Grid overlays显示；
- 设置margin和padding后发现元素溢出，可以设置容器max-width或者max-height属性；请确保容器大小满足；
- 使用 `box-sizing: border-box;`这样 `padding` 就不会额外增加到元素的总宽度上。

#### 26.聊天界面用户和ai对话左右效果实现

```
      <View className='messages'>
        {messages.map((message, index) => (
          <View
            key={index}
            className={`message-item ${message.type}`}
            style={{ display: 'flex', flexDirection: message.type === 'user' ? 'row-reverse' : 'row' }} // 根据消息类型调整方向
          >
            <Image
              src={require(`../../assets/chat/${message.type}.svg`)} // 根据消息类型选择不同的图标
              className='icon'
              style={{ height: '40px', width: '40px' }}
            />
            {/* 根据消息选择不同的样式 */}
            <View className={`message ${message.type}`}>
              <Text>{message.content}</Text>
            </View>
          </View>
        ))}
        {loadingFalse && <View className='loading'>Failed to send message</View>}{' '}
        {/* 如果loadingFalse为true,则显示Failed to send message */}
        {loading && <View className='loading'>Loading...</View>} {/* 如果loading为true,则显示Loading... */}
      </View>
```

```
.messages {
  flex: 1;
  padding: 25px;
  overflow-y: auto; // 实现滚动
  display: flex; // 实现消息垂直排列
  flex-direction: column;
  // border: 1px solid #c08484;
}

.message-item {
  margin-top: 20PX;
  display: flex;
  flex-direction: row;
  // border: 1px solid #000;
}

.message-item.agent {
  justify-content: flex-start; // 实现消息左对齐
}

.message-item.user {
  justify-content: flex-start; // 实现消息右对齐
}

.message {
  padding: 20px;
  max-width: 84%;
  word-wrap: break-word; // 实现文本自动换行
  // border: 1px solid #000;
}

.message.agent {
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #f3f4f6;
  align-self: flex-start; // 实现消息左对齐
}

.message.user {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #28a745;
  align-self: flex-end; // 实现消息右对齐
  color: white;
}

```

#### 27."&::"伪类元素

在 CSS 或 SCSS 中，&:: 是一个组合符号，用于将父选择器与伪元素结合在一起。具体来说，& 表示当前选择器，而 :: 表示伪元素（如 ::before、::after）。这个组合通常出现在 SCSS 或 LESS 这样的预处理器中，用来生成带有伪元素的 CSS 规则。

```
.element {
  color: black;

  &::before {
    content: '•';
    color: red;
    margin-right: 5px;
  }
}
```

在上面的 SCSS 代码中：

- `&` 指代的是 `.element` 类。
- `::before` 是一个伪元素，用来在 `.element` 元素之前插入内容。

生成的 CSS 会是这样的：

```
.element {
  color: black;
}

.element::before {
  content: '•';
  color: red;
  margin-right: 5px;
}
```

#### 28."&."父元素中声明子元素

`&.` 用于将父选择器与另一个类选择器组合在一起，这样你可以在父选择器的上下文中定义子类的样式。

```
.button {
  color: white;
  background-color: blue;

  &.active {
    background-color: green;
  }

  &.disabled {
    background-color: gray;
    color: darkgray;
  }
}
```

`.button` 是父选择器。

`&.active` 会生成 `.button.active`，即表示 `.button` 元素同时具有 `active` 类时的样式。

`&.disabled` 会生成 `.button.disabled`，即表示 `.button` 元素同时具有 `disabled` 类时的样式。

```
.button {
  color: white;
  background-color: blue;
}

.button.active {
  background-color: green;
}

.button.disabled {
  background-color: gray;
  color: darkgray;
}
```

#### 29.对象扩展运算符{...}

`{...}`是对象扩展运算符，它用于将右侧对象的所有属性扩展到当前对象中。在这个打码片段中，如果`item`为真，则右侧的`style`对象将被扩展到当前组件的属性中；否则，扩展空对象，即没有任何属性添加；

```
{...(item
  ? {
      style: {
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
      },
    }
  : {})}
```

#### 30.三元运算符

如上例`item ? {...} : {}`,用于根据条件`item`是否为真来选择返回不同的对象；若为真则返回`{style}`为假则返回`{}`.

#### 31.字体垂直居中

##### 1.行内元素的垂直居中

```
.elment {
	height: 100px;
	line-height: 100px; //设置为与元素高度一致
	text-align: center; //水平居中
}
```

##### 2.Flexbox 实现垂直居中

```
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100px;
}
```

##### 3.Grid布局垂直居中

```
.container {
  display: grid;
  place-items: center; /* 同时水平和垂直居中 */
  height: 100px;
}
```

##### 4.使用绝对定位实现垂直居中

```
.container {
  position: relative;
  height: 100px;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

##### 5.使用表格布局实现垂直居中

```
.container {
  display: table-cell;
  vertical-align: middle; /* 垂直居中 */
  text-align: center; /* 水平居中 */
  height: 100px;
  width: 100px;
}
```

#### 32.buton和view设置宽高实际显示不一样问题

1.button内置默认样式，如内边距、边框、圆角等；

2.view则是一个纯粹的容器；

3.解决方法：设置button的padding和margin为零

#### 33.元素设置padding后元素整体变大问题

CSS默认使用content-box盒模型，即padding不会包含在元素的宽度和高度中，因此会导致元素的大小增加；

解决方法：设置盒模型为`box-sizing:border-box;`

#### 34.元素边框线的粗细不占用元素`margin`和`padding`空间

它会影响元素的大小，占用的是元素内部的空间

#### 35.盒子模型`content-box`与`border-box`

##### 1.`content-box`默认盒模型

在 `content-box` 盒模型下，元素的 `width` 和 `height` 只包括内容（content）部分，不包括 `padding`、`border` 和 `margin`。

如果添加 `padding` 或 `border`，它们会增加元素的实际显示尺寸。

##### 2.border-box 边框盒模型

在 `border-box` 盒模型下，元素的 `width` 和 `height` 包括了 `content`、`padding` 和 `border`，不包括 `margin`。

`padding` 和 `border` 会被包含在指定的 `width` 和 `height` 内，不会增加元素的实际尺寸。
