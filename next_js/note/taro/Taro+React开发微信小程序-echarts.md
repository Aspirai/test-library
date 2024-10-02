echarts-taro3-react
===================

基于taro3.x-react版本构建的微信小程序echarts组件

### 安装

`npm i echarts-taro3-react` 将 **echarts-taro3-react** 下载至本地，放置在src目录下

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28966f93bec2419d98111f7b8fe920ad~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=427&h=364&s=21225&e=png&b=181818)

### 解决代码体积过大问题

自定义`echart.js`，自行前往[echart官网](https://link.juejin.cn?target=https%3A%2F%2Fecharts.apache.org%2Fzh%2Fbuilder.html "https://echarts.apache.org/zh/builder.html") **（注意：版本需要选择4.9.0，不要勾选压缩，可下载下来后自行压缩）**  按需构建`echart.js`，然后替换掉`echarts-taro3-react/ec-canvas/echart.js`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e9df1ab76d294f86b02b092952cbc479~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1110&h=799&s=78177&e=png&b=ffffff)

我这里图表只选择了折线图，构建完后替换掉是这样的

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e07ba7cb71cd4527bac70fa8d0931a54~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1768&h=912&s=270316&e=png&b=1e1e1e)

到这里就可以按照下面的使用示例在开发者工具上看看效果了，这时候可能会报错 `el.addEventListener is not a function`，我这边的处理方法是在 echart.js 文件里找到对应列注释掉，如果还有其他方法解决的也可以。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19264fb5ca7d4686a47a733e7c13c2d0~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=558&h=173&s=23697&e=png&b=2b0000)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1ed3620410a4268aff85d467685a3cf~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=501&h=101&s=6404&e=png&b=303030)

### 本地压缩方法

```
npm install uglify-js -g 
uglifyjs echarts.js -m -o echarts.min.js 
```

生成 echarts.min.js 后将里面的内容替换掉 echarts.js 的内容, 然后把 echarts.min.js 删掉

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5e57c3cf06c494eba4bc46f234dabe9~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=531&h=306&s=24092&e=png&b=1a1a1a)

### 使用示例

/pages/index/index.tsx

```
import React, { useRef, useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { EChart } from "../../echarts-taro3-react";
import './index.scss'

export default function Index() {
  const refBarChart = useRef<any>()
  const defautOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(220, 220, 220, 0.8)",
        },
      },
    ],
  };
  useEffect(() => {
    if(refBarChart.current) {
        refBarChart.current?.refresh(defautOption);
    }
  })

  return (
    <View className='index'>
      <EChart ref={refBarChart} canvasId='line-canvas' />
    </View>
  )
}
```

/pages/index/index.scss

```
.index {
  width: 100vw;
  height: 100vh;
  background-color: #F3F3F3;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url('../../assets/home-bg.svg');
}
```



echarts-wordcloud
=================

由于官方的[echarts-wordcloud](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fecomfe%2Fecharts-wordcloud "https://github.com/ecomfe/echarts-wordcloud")不支持微信小程序，我找到了一个基于微信小程序修改的词云图组件[echarts-for-weixin-wordcloud](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fclydee-geng%2Fecharts-for-weixin-wordcloud "https://github.com/clydee-geng/echarts-for-weixin-wordcloud")

1.  将项目中的 echarts-wordcloud 拷贝到自己的项目中
2.  引入wordcloud,并配置

```
import wordCloud from "../../echarts-wordcloud/wordCloud";

wordCloud({
  createCanvas: function () {
    return wx.createOffscreenCanvas({
      type: "2d",
    });
  },
});
```



3.  找到引入 echarts 的文件，将引入地址改成上面 echarts-taro3-react 的 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73e2d766055541bfaf01447061092c72~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1077&h=90&s=22069&e=png&b=1f1f1f)
4.  在页面使用，跟官方使用方法一样了

Demo
====

最后放一下个人封装的 echarts 组件 demo

CustomEchart.tsx

```
import React, { useEffect, useRef } from 'react'
import { EChart } from "../../echarts-taro3-react";
import wordCloud from '../../echarts-wordcloud/wordCloud'

interface ReEchartProps {
  option: object,
  canvasId: string
}

const ReEchart: React.FC<ReEchartProps> = ({ option, canvasId }) => {
  const refChart = useRef<any>()

  useEffect(() => {
    wordCloud({
      createCanvas: function () {
        return wx.createOffscreenCanvas({
          type: "2d",
        });
      },
    });
  }, [])

  useEffect(() => {
    if (refChart.current && option) {
      refChart.current.refresh(option);
    }
  }, [option])

  return <EChart ref={refChart} canvasId={canvasId} />
}

export default ReEchart
```

源： <https://juejin.cn/post/7347578366835163175>，如有侵权，请联系删除。

![image-20240830203640481](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830203640481.png)

![image-20240830203644482](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830203644482.png)

![image-20240830203900865](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830203900865.png)

![image-20240830203904782](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830203904782.png)

![image-20240830204316996](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830204316996.png)

![image-20240830204329536](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830204329536.png)

![image-20240830204438568](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830204438568.png)

![image-20240830210435412](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830210435412.png)

![image-20240830211048754](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830211048754.png)

![image-20240830211145963](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240830211145963.png)