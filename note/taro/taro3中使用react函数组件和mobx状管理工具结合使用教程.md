 

![](https://i-blog.csdnimg.cn/blog_migrate/323308baf7d25fae9b9956d7f3fce903.png)在使用了最新版的函[数组](https://so.csdn.net/so/search?q=%E6%95%B0%E7%BB%84&spm=1001.2101.3001.7020)件hooks后，刚开始导入mobx，总是报cant resolve "src/store/index"这种错误，然后我就开始一步一步找原因，后来在组件中log了一下store，重新启动程序后，就没问题了，我也是无语.....

下面看一下taro使用[react](https://so.csdn.net/so/search?q=react&spm=1001.2101.3001.7020)函数组件接入mobx的流程：

先在store下面创建一个counter.ts:

```javascript
import { observable } from "mobx"; const counterStore = observable({  counter: 100,  addStore() {    this.counter++;  },  increment() {    this.counter++;  },  decrement() {    this.counter--;  },  incrementAsync() {    setTimeout(() => {      this.counter++;    }, 1000);  },}); export default counterStore;
```

然后再创建一个store/index.ts：

```javascript
import React from "react";import counterStore from "./counter"; const storesContext = React.createContext({  counterStore,}); // 默认导出export default storesContext;
```

然后看一下我的app.tsx：

```javascript
import { Component, PropsWithChildren } from "react";import "./app.scss"; class App extends Component<PropsWithChildren> {  componentDidMount() {}   componentDidShow() {}   componentDidHide() {}   // this.props.children 就是要渲染的页面  render() {    return this.props.children;  }} export default App;
```

然后开始在组件中使用这个mobx状态管理： 

```javascript
import { useContext, useEffect, useState } from "react";import { View, Button, Text } from "@tarojs/components";import { observer } from "mobx-react";import Store from "../../store/index";import "./index.scss"; function Index() {  const [count, setCount] = useState(0);   const { counterStore } = useContext(Store);   useEffect(() => {    console.log("store", counterStore);  });   // 点击按钮改变store状态  const handleClick = () => {    // 修改mobx中的数据状态    counterStore.addStore();    // 修改组件中的数据状态    setCount(count + 1);  };   return (    <View>      <Text>        函数组件状态：{count} || mobx中的状态: {counterStore.counter}      </Text>      <Button onClick={() => handleClick()}>+1</Button>    </View>  );} export default observer(Index);
```

最后点击即可实现状态控制：![](https://i-blog.csdnimg.cn/blog_migrate/6ee5738aef0f3c0b16ccd39f5f757c17.png)

本文转自 <https://blog.csdn.net/weixin_44786530/article/details/134184886>，如有侵权，请联系删除。