#### 1.Taro 路由配置

```
1.// 导入Taro，用于页面跳转
import Taro from "@tarojs/taro";

2.定义跳转函数
const goIndex = () => {
  // 跳转到首页
  Taro.navigateTo({
    url: "/pages/index/index",
  })
}

3.函数调用
<Button onClick={goIndex}>点击跳转页面</Button>
```

##### 1.1.路由传参格式

```
import { Component } from "react";
// 导入组件库
import { View } from "@tarojs/components";
// 状态管理
import { observer, inject } from "mobx-react";

import Taro from "@tarojs/taro";

// @inject('store') 用于注入状态管理
@inject("store")
@observer
class Index extends Component {
  // 会在组件挂载后执行
  componentDidMount() {
   this.getApi()
   console.log('first')
  }
  
  //
  getApi(){
    const fetchData = async () => {
      try {
        const response = await Taro.request({
          url: 'http://echo.apifox.com', // 你的API接口地址
          method: 'GET', // 请求方法，根据API可以选择POST, PUT等
          data: {
            // 这里放你要传递的参数
            q1: 'v1',
            q2: 'v2'
          },
          header: {
            'content-type': 'application/json', // 默认值
          },
        })
    
        // 请求成功，处理数据
        console.log('成功',response.data)
      } catch (error) {
        // 请求失败，处理错误
        console.error(error)
      }
    }

    fetchData()
  }
  render() {
   
    return (
      <View className='index'>
        
      </View>
    );
  }
}
export default Index;

```

#### 2.解析API

```
#src\services\crossTalk.ts
// 获取列表的服务
import Taro from "@tarojs/taro";
// 通过 Taro.request 发送请求 获取数据列表
export function getCrossTalkList(){
  let httpUrl = 'https://api.apiopen.top/api/sentences';
  return Taro.request({url:httpUrl})
}
```

```
#src\store\cross_talk.ts
// 存储数据的 store
// 导入 mobx 的 observable 方法，用于定义可观察对象
import { observable } from "mobx";
import { getCrossTalkList } from "../services/crossTalk"; // 导入请求方法

// 定义一个可观察对象 crossTalkStore 用于存储数据 
const crossTalkStore = observable({
    crossTalkList: [],
    // 箭头函数指向外部this
    // function函数指向内部this
    setCrossTalkList:async function() {
        // await等待一个异步操作的完成
        let res = await getCrossTalkList();
        // console.log(res)
        // 将请求到的数据存储到crossTalkList中
        this.crossTalkList = res.data.result.name;
        console.log(this.crossTalkList)
    },
})
export default crossTalkStore;
```

```
// 使用mobx状态管理
import { Component } from "react";
// 导入组件库
import { View } from "@tarojs/components";
// 状态管理
import { observer, inject } from "mobx-react";

// @inject('store') 用于注入状态管理
@inject("store")
@observer
class Index extends Component {
  // 会在组件挂载后执行
  componentDidMount() {
   console.log('成功');
    // 调用状态管理中的方法
    this.props.store.crossTalkStore.setCrossTalkList();
  }
  render() {
    const { crossTalkList } = this.props.store.crossTalkStore;
    return (
      <View className='index'>
        <text>{crossTalkList}</text>
      </View>
    );
  }
}
export default Index;

```
