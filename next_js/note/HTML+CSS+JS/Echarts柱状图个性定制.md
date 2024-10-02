# 一、Echarts柱状图个性定制

- 背景：设置渐变Echarts柱状图
- 技术定位：中级
- 技术应用场景：好看的柱状图；
- 整体思路：引入Echarts，设置颜色背景；

# 二、效果展示

![img](https://lcnm2fuxr31h.feishu.cn/space/api/box/stream/download/asynccode/?code=N2E1NWE2M2RjMDBhNDZjYTVjYzdmMGJhYjU5NjI2MzdfeHNUNGJTWnhwbjVDOVJPVmR0WmJUeDZIYlgwUE84bFVfVG9rZW46TTM2bGJHVHlib3hKYTB4blIyUmNlOVlSbjI3XzE3MjU1Mjk3Nzk6MTcyNTUzMzM3OV9WNA)

# 三、设置步骤

## 3.1 引入初始柱状图

```TypeScript
import { useRef, useEffect } from 'react';
import { View } from '@tarojs/components';
import { EChart } from '../../echarts-taro3-react';
import './index.scss';

export default function Histogram() {
  const refHistogramChart = useRef<any>();

  const defautOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
  useEffect(() => {
    if (refHistogramChart.current) {
      refHistogramChart.current?.refresh(defautOption);
    }
  });

  return (
    <View className='index'>
      <EChart
        ref={refHistogramChart}
        canvasId='line-canvas'
      />
    </View>
  );
}
```

## 3.2 设置SCSS

```SCSS
.index {
  position: relative;
  width: 650px;
  height: 550px;
}
```

## 3.3 自定义柱状图

```TypeScript
import { useRef, useEffect } from 'react';
import { View } from '@tarojs/components';
import { EChart } from '../../echarts-taro3-react';
import './index.scss';

export default function Histogram({ data}) {
  const refHistogramChart = useRef<any>();

  const scatterData =
    data && data.length > 0
      ? data.map((value) => ({
          value: value, // 与柱状图的值相同
          symbolOffset: [0, 7], // 确保点在柱子内部显示 第一个参数是x轴偏移量，第二个参数是y轴偏移量
        }))
      : [];
  const upperThreshold = 120;
  const lowerThreshold = 75;
  const defautOption = {
    xAxis: {
      type: 'category',
      data: ['日', '一', '二', '三', '四', '五', '六'],
      axisLine: {
        show: false, // 隐藏x轴线
      },
      axisTick: {
        show: false, // 隐藏x轴刻度
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false, // 隐藏y轴分割线
      },
      axisLine: {
        show: false, // 隐藏y轴线
      },
      max: function (value) {
        // 得到y轴最大值
        return value.max;
      },
    },
    grid: {
      top: '10%', // 调整图表离顶部的距离
      bottom: '30%', // 调整图表离底部的距离
      left: '10%', // 调整图表离左侧的距离
      right: '10%', // 调整图表离右侧的距离
    },
    series: [
      {
        data: data,
        type: 'bar',
        label: {
          show: true, // 显示标签
          position: 'top', // 标签位置设置在顶部
          color: '#000', // 标签颜色（可选）
          fontSize: 14, // 标签字体大小（可选）
          // fontWeight: '600', // 标签字体粗细（可选）
          formatter: '{c}', // 标签内容格式化，{c}表示当前数据值
        },
        markArea: {
          data: [
            [
              {
                yAxis: upperThreshold,
                itemStyle: {
                  color: {
                    type: 'linear', // 线性渐变
                    x: 0, // 起点x坐标（左上角）
                    y: 0, // 起点y坐标（左上角）
                    x2: 1, // 终点x坐标（右下角）
                    y2: 0, // 终点y坐标（右下角）
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(239, 152, 150,0.24)', // 起始颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(239, 152, 150,0)', // 结束颜色
                      },
                    ],
                  },
                },
              },
              {
                yAxis: 'max', // 最大值
              },
            ],
            [
              {
                yAxis: lowerThreshold,
                itemStyle: {
                  color: {
                    type: 'linear', // 线性渐变
                    x: 0, // 起点x坐标（左上角）
                    y: 0, // 起点y坐标（左上角）
                    x2: 1, // 终点x坐标（右下角）
                    y2: 0, // 终点y坐标（右下角）
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(38, 100, 235,0.24)', // 起始颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(38, 100, 235,0)', // 结束颜色
                      },
                    ],
                  },
                },
              },
              {
                yAxis: upperThreshold, // 最大值
              },
            ],
            [
              {
                yAxis: 0,
                itemStyle: {
                  color: {
                    type: 'linear', // 线性渐变
                    x: 0, // 起点x坐标（左上角）
                    y: 0, // 起点y坐标（左上角）
                    x2: 1, // 终点x坐标（右下角）
                    y2: 0, // 终点y坐标（右下角）
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(239, 152, 150,0.24)', // 起始颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(239, 152, 150,0)', // 结束颜色
                      },
                    ],
                  },
                },
              },
              {
                yAxis: lowerThreshold,
              },
            ],
          ],
        },
        itemStyle: {
          borderRadius: [10, 10, 0, 0], // 设置柱状图的圆角
          color: function (params) {
            if (params.data > upperThreshold || params.data < lowerThreshold) {
              return 'rgb(239, 152, 150,0.6)'; // 设置超出阈值的柱状图颜色为红色
            } else {
              return 'rgb(95, 146, 255,0.6)'; // 设置正常值的柱状图颜色为蓝色
            }
          },
        },
        barWidth: '30%',
      },
      {
        type: 'scatter',
        data: scatterData, // 与柱状图数据相同
        symbolSize: 13, // 设置散点图点的大小
        itemStyle: {
          color: function (params) {
            if (params.data.value > upperThreshold || params.data.value < lowerThreshold) {
              return 'rgb(239, 152, 150,0.6)';
            } else {
              return 'rgb(95, 146, 255,0.6)';
            }
          },
        },
        z: 3, // 确保散点图在柱状图上方显示
      },
    ],
  };
  useEffect(() => {
    if (refHistogramChart.current) {
      refHistogramChart.current?.refresh(defautOption);
    }
  });

  return (
    <View className='index'>
      <EChart
        ref={refHistogramChart}
        canvasId='line-canvas'
      />
    </View>
  );
}
```

## 3.4 变量引入

```TypeScript
  const [chartData, setChartData] = useState([60,110,90,100,120,130,140]);
```

# 四、总结

1. 柱状图顶部深色点可用散点图显示，并设置偏移量；