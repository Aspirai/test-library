## 缩放Echarts方法

#### 添加如下代码

```
    //图形位置
    grid: {
      left: '5%', // 调整网格左边距
      right: '2%', // 调整网格右边距
      top: '10%', // 调整网格上边距
      bottom: '15%', // 调整网格下边距
    },
    // 缩放插件用来做滚动slider和拖拽inside
    dataZoom: {
      type: 'inside', // 滑动条类型slider
      orient: 'horizontal', // 设置为横向
      height: 10, // 设置高度
      bottom: '1%', // 设置位置
    },
```

