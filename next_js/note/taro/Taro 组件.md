### Taro组件

#### 1.Taro数据存放

1. 静态资源：放在src/assets目录下。

2. 接口请求相关代码：放在src/services或src/api目录下。

3. 全局状态管理：放在src/store目录下。

   ```
   使用Taro时，通常会用到MobX(小型应用)或Redux(大型应用)来进行全局状态管理。
   
   全局状态管理是一种在应用程序中共享和管理状态的方式，使多个组件能够访问和更新相同的状态。这在复杂应用中尤为重要，因为它可以帮助你避免在各个组件之间传递大量的props，从而简化数据流和状态管理。
   ```

   项目目录

   ```
   src/
     store/
       counter.ts
       index.ts
   ```

   couter.ts

   ```
   import { observable, action } from 'mobx';
   
   class CounterStore {
     @observable counter = 0;
   
     @action
     increment() {
       this.counter++;
     }
   
     @action
     decrement() {
       this.counter--;
     }
     
     @action
     reset() {
       this.counter = 0;
     }
   }
   export default new CounterStore();
   ```

   index.ts

   ```
   import counterStore from './counter';
   
   const store = {
     counterStore
   };
   
   export default store;
   ```

4. 页面或组件内部数据：直接在对应的页面或组件文件中定义。



#### 2.tabbar导航

```
#src/app.config.ts

export default defineAppConfig({
  pages: [
    // 添加导航页面
    'pages/about/index',
    'pages/me/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // tabBar导航 
  tabBar: {
    list: [
      {
        // 图标路径
        'iconPath': 'assets/1.png',
        // 选中的图标路径
        'selectedIconPath': 'assets/1.png',
        // 页面路径
        pagePath: 'pages/about/index',
        // 导航文本
        text: '关于'
      },
      {
        'iconPath': 'assets/1.png',
        'selectedIconPath': 'assets/1.png',
        pagePath: 'pages/me/index',
        text: '个人' 
      },
    ]
  }
})
```

