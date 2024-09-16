## Taro图片放大与缩小

### 1 .图片上传到页面

```TypeScript
import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { AtButton } from 'taro-ui';

export default function Demo() {
  const [path, setPath] = useState('');
  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        setPath(res.tempFilePaths[0]);
      },
    });
  };
  return (
    <View
      className='index'
      style={{ width: '100vw', height: '100vh' }}
    >
      <View style={{ border: '1px solid red', width: '100vw', height: '44vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={path} />
      </View>
      <AtButton
        type='primary'
        onClick={() => {
          handleChooseImage();
        }}
      >
        test
      </AtButton>
    </View>
  );
}
```

![image-20240826105106266](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240826105106266.png)

### 2.图片放大

#### 2.1预备知识：

##### 1.CSS----transform属性

```

1. 基本语法
transform: function(value);

2. 常用变换函数
a. translate()：平移

    translate(x, y): 移动元素到相对于其当前位置的指定 x 和 y 位置。单位可以是像素、百分比等。
        translateX(x)：只在水平方向上移动。
        translateY(y)：只在垂直方向上移动。
    transform: translate(50px, 100px); /* 在 x 方向上移动 50px，在 y 方向上移动 100px */

b. scale()：缩放

    scale(x, y): 按照 x 和 y 方向的比例缩放元素。scale(2, 2) 会将元素放大两倍。
        scaleX(x)：只在水平方向上缩放。
        scaleY(y)：只在垂直方向上缩放。
    transform: scale(1.5, 0.5); /* 水平方向放大 1.5 倍，垂直方向缩小为 0.5 倍 */

c. rotate()：旋转

    rotate(angle): 按照指定的角度旋转元素。角度可以是正值或负值，单位为度（deg）。
    transform: rotate(45deg); /* 旋转 45 度 */

d. skew()：倾斜

    skew(x-angle, y-angle): 沿着 x 和 y 轴对元素进行倾斜变换。
        skewX(x-angle)：只沿水平方向倾斜。
        skewY(y-angle)：只沿垂直方向倾斜。
    transform: skew(30deg, 20deg); /* 水平倾斜 30 度，垂直倾斜 20 度 */

e. matrix()：矩阵变换

    matrix(a, b, c, d, e, f): 以矩阵形式定义 2D 变换，允许更复杂的变换组合。
    transform: matrix(1, 0.5, -0.5, 1, 0, 0); /* 使用矩阵实现复杂变换 */

3. 组合变换

    可以将多个 transform 函数组合在一起使用，用空格分隔它们。
    transform: translate(50px, 100px) rotate(45deg) scale(1.2);

4. 3D 变换

除了 2D 变换外，transform 还支持 3D 变换：
a. translate3d(x, y, z)：三维平移

    沿着 x, y, z 轴平移。

b. rotate3d(x, y, z, angle)：三维旋转

    围绕 x, y, z 轴旋转。

c. perspective(n)：设置透视效果

    定义 3D 空间中物体与观察者之间的距离，单位为像素。

transform: rotate3d(1, 1, 0, 45deg); /* 围绕 x 和 y 轴旋转 45 度 */

5. transform-origin
    控制 transform 变换的原点，默认原点是元素的中心。
    transform-origin: top left; /* 将变换原点设置为元素的左上角 */

6. 动画和过渡
transform 属性与 transition 和 animation 结合使用时，可以产生平滑的过渡和复杂的动画效果。

.box {
  transition: transform 0.5s ease;
}
.box:hover {
  transform: rotate(45deg) scale(1.2);
}

```

##### 2.Taro----onTouchStart触摸事件的处理属性

```
在 Taro 框架中，onTouchStart 是一个触摸事件的处理属性，用于捕获当用户手指第一次触摸屏幕时触发的事件。
onTouchStart 的作用

    onTouchStart 事件会在手指触碰到屏幕的那一瞬间触发。通常用于检测用户开始触摸的动作，可以结合其他触摸事件如 onTouchMove 和 onTouchEnd 一起使用，以处理更加复杂的手势操作。

用法示例

<View
  onTouchStart={(e) => {
    console.log('触摸开始', e);
  }}
>
  触摸我
</View>

在这个示例中，当用户触摸到 View 组件时，会触发 onTouchStart 事件，触发后会执行事件处理函数，打印出 “触摸开始” 以及事件对象 e。
事件对象

onTouchStart 事件处理函数会收到一个事件对象 e，其中包含以下一些常用的属性：

    e.touches: 当前触摸点的列表（会包含所有正在触摸的点）。
    e.changedTouches: 当前状态改变的触摸点的列表。
    e.timeStamp: 触发事件的时间戳。

常见使用场景

    处理手势操作，比如滑动开始的检测。
    在拖动操作中，捕捉用户开始拖动的起点。

```

##### 3.Taro 其它触摸属性

```
onTouchMove
    描述: 当用户手指在屏幕上滑动时触发，类似于原生的 touchmove 事件。
    场景: 用于跟踪手指的移动路径，常用于拖拽、滑动操作。

onTouchEnd
    描述: 当用户手指离开屏幕时触发，类似于原生的 touchend 事件。
    场景: 用于检测触摸操作的结束，比如手势识别结束时的处理。

onTouchCancel
    描述: 当触摸操作被打断时（比如来电、弹窗等）触发，类似于原生的 touchcancel 事件。
    场景: 处理因外部因素中断触摸的场景。

onLongPress
    描述: 当用户长时间按住屏幕时触发，类似于原生的 longpress 事件。
    场景: 用于长按操作，比如调出菜单或执行特定操作。

onTap
    描述: 当用户轻触屏幕时触发，类似于点击事件，通常用于捕获点击操作。
    场景: 用于响应用户点击动作，触发页面跳转、按钮点击等操作。

onTouchForceChange

    描述: 当压力变化时触发，适用于支持 3D Touch 或 Force Touch 的设备。
    场景: 检测用户在屏幕上施加的压力变化。
```

#### 2.2代码编写

```tsx
import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { AtButton } from 'taro-ui';

export default function Demo() {
  const [path, setPath] = useState('');
  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        setPath(res.tempFilePaths[0]);
      },
    });
  };

  const [scale, setScale] = useState(1); // 图片缩放比例
  const [lastDistance, setLastDistance] = useState(0); // 上一次两指距离

  const getDistance = (touches) => { // 计算两指距离
    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX; //
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches);
      setLastDistance(distance);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches);
      const scaleChange = distance / lastDistance;
      setScale((preScale) => Math.max(1, preScale * scaleChange));
      setLastDistance(distance);
    }
  };
  
  return (
    <View
      className='index'
      style={{ width: '100vw', height: '100vh' }}
    >
      <View
        style={{
          border: '1px solid red',
          width: '100vw',
          height: '30vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Image
          src={path}
          mode='aspectFit' // 图片缩放模式 保持宽高比缩放图片，使图片的长边能完全显示出来
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </View>
      <AtButton
        type='primary'
        onClick={() => {
          handleChooseImage();
        }}
      >
        test
      </AtButton>
    </View>
  );
}

```

### 3图片移动

```tsx
import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { AtButton } from 'taro-ui';

export default function Demo() {
  const [path, setPath] = useState('');
  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        setPath(res.tempFilePaths[0]);
      },
    });
  };

  const [scale, setScale] = useState(1); // 图片缩放比例
  const [lastDistance, setLastDistance] = useState(0); // 上一次两指距离
  const [translateX, setTranslateX] = useState(0); // 图片水平偏移
  const [translateY, setTranslateY] = useState(0); // 图片垂直偏移
  const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 }); // 上一次触摸坐标 用于计算偏移量

  const getDistance = (touches) => { // 计算两指距离
    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX; //
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches);
      setLastDistance(distance);
    } else if (e.touches.length === 1) {
      setLastTouch({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches);
      const scaleChange = distance / lastDistance;
      setScale((preScale) => Math.max(1, preScale * scaleChange));
      setLastDistance(distance);
    } else if (e.touches.length === 1) {
      const dx = e.touches[0].clientX - lastTouch.x;
      const dy = e.touches[0].clientY - lastTouch.y;
      setTranslateX((preTranslateX) => preTranslateX + dx);
      setTranslateY((preTranslateY) => preTranslateY + dy);
      setLastTouch({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  return (
    <View
      className='index'
      style={{ width: '100vw', height: '100vh' }}
    >
      <View
        style={{
          border: '1px solid red',
          width: '100vw',
          height: '30vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Image
          src={path}
          mode='aspectFit' // 图片缩放模式 保持宽高比缩放图片，使图片的长边能完全显示出来
          style={{
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
          }}
        />
      </View>
      <AtButton
        type='primary'
        onClick={() => {
          handleChooseImage();
        }}
      >
        test
      </AtButton>
    </View>
  );
}
```

### 4.限制移动范围

#### 前置知识:

##### 4.1 useRef----创建可变的引用对象

useRef 是 React 提供的一个 Hook，用于创建一个可变的引用对象（ref），这个对象在组件的整个生命周期内保持不变。useRef 最常见的用途是访问 DOM 元素或在组件中存储某个可变值，而不会触发组件的重新渲染。

```
useRef 的用法

import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null); // 创建一个 ref 对象，初始值为 null

  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={() => myRef.current.focus()}>
        Focus the input
      </button>
    </div>
  );
}

useRef 的特性和用途

    访问 DOM 元素:
        useRef 最常见的用途是访问 DOM 元素。你可以将 useRef 返回的 ref 对象附加到一个 DOM 元素上，通过 ref.current 可以直接访问该元素。
        在上面的例子中，myRef.current 会指向 <input> 元素，点击按钮时，可以使用 myRef.current.focus() 来聚焦输入框。

    持久化一个可变的值:
        useRef 可以用来存储跨渲染周期的值，并且更新 useRef 的值不会触发组件的重新渲染。相比之下，使用 useState 更新值会导致组件重新渲染。
        例如，你可以用 useRef 来存储计时器的 ID 或者某个组件的状态，这些状态不需要触发重新渲染。

    保持数据的一致性:
        由于 useRef 返回的对象在组件的整个生命周期内保持不变，因此它常被用来持有一些在多次渲染间保持一致的数据。
        它常用于存储前一次渲染时的一些数据或引用。

useRef vs useState

    useState: 用于管理组件的状态，每次状态更新都会导致组件重新渲染。
    useRef: 用于存储一个可变的值，该值的改变不会触发重新渲染。

useRef vs createRef

    useRef: 在每次渲染时返回同一个 ref 对象。
    createRef: 每次渲染都会创建一个新的 ref 对象，通常只在类组件中使用。

总结

useRef 是一个非常有用的工具，既可以用于直接操作 DOM 元素，也可以用于存储在渲染周期间保持一致的数据。在需要访问 DOM 或者存储某些不会影响组件渲染的数据时，useRef 是一个理想的选择。
```

#### 代码

```tsx
import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useRef, useState } from 'react';
import { AtButton } from 'taro-ui';

export default function Demo() {
  const [path, setPath] = useState('');
  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        setPath(res.tempFilePaths[0]);
      },
    });
  };

  const [scale, setScale] = useState(1); // 图片缩放比例
  const [lastDistance, setLastDistance] = useState(0); // 上一次两指距离
  const [translateX, setTranslateX] = useState(0); // 图片水平偏移
  const [translateY, setTranslateY] = useState(0); // 图片垂直偏移
  const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 }); // 上一次触摸坐标 用于计算偏移量
  const containerRef = useRef(null); // 图片容器ref

  const getDistance = (touches) => {
    // 计算两指距离
    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX; //
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches);
      setLastDistance(distance);
    } else if (e.touches.length === 1) {
      setLastTouch({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches);
      const scaleChange = distance / lastDistance;
      setScale((preScale) => Math.max(1, preScale * scaleChange));
      setLastDistance(distance);
    } else if (e.touches.length === 1) {
      const dx = e.touches[0].clientX - lastTouch.x;
      const dy = e.touches[0].clientY - lastTouch.y;

      Taro.createSelectorQuery()
        .select(`#${containerRef.current.id}`)
        .boundingClientRect()
        .exec((res) => {
          const container = res[0];
          if (container) {
            const { width: containerWidth, height: containerHeight } = container;

            console.log('containerWidth', containerWidth);
            console.log('containerHeight', containerHeight);
            const imageWidth = containerWidth * scale;
            const imageHeight = containerHeight * scale;

            let newTranslateX = translateX + dx;
            let newTranslateY = translateY + dy;

            const maxTranslateX = Math.max(0, (imageWidth - containerWidth) / 2); // 图片最大水平位移
            const maxTranslateY = Math.max(0, (imageHeight - containerHeight) / 2);

            // 限制图片位移不超出容器
            newTranslateX = Math.min(Math.max(newTranslateX, -maxTranslateX), maxTranslateX);
            newTranslateY = Math.min(Math.max(newTranslateY, -maxTranslateY), maxTranslateY);

            setTranslateX(newTranslateX);
            setTranslateY(newTranslateY);
            setLastTouch({ x: e.touches[0].clientX, y: e.touches[0].clientY });
          }
        });
    }
  };
  
  return (
    <View
      className='index'
      style={{ width: '100%', height: '30vh' }}
    >
      <View
        style={{
          border: '1px solid red',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        ref={containerRef}
        id='container'
      >
        <Image
          src={path}
          mode='aspectFit' // 图片缩放模式 保持宽高比缩放图片，使图片的长边能完全显示出来
          style={{
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
          }}
        />
      </View>
      <AtButton
        type='primary'
        onClick={() => {
          handleChooseImage();
        }}
      >
        test
      </AtButton>
    </View>
  );
}

```

