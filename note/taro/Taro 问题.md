### Taro 问题

#### 1.taro 中 index.config.js的作用

```
// 用于配置页面的一些属性，如导航条背景色、标题、是否允许下拉刷新等
//在 Taro 项目中，index.config.js 文件用于配置页面的个性化设置。这些配置主要用于设置页面的导航栏样式、窗口表现以及页面的其他一些行为。每个页面都可以有自己的配置文件，这样可以实现每个页面不同的显示效果和功能。

// export default {
//   navigationBarTitleText: '首页', // 设置导航栏标题
//   navigationBarBackgroundColor: '#ffffff', // 导航栏背景颜色
//   navigationBarTextStyle: 'black', // 导航栏文字颜色
//   enablePullDownRefresh: true, // 是否启用下拉刷新
//   backgroundColor: '#f0f0f0', // 页面背景颜色
//   backgroundTextStyle: 'dark', // 下拉背景字体、loading 图的样式，仅支持 dark / light
//   navigationStyle: 'default', // 导航栏样式，default 为默认样式，custom 为自定义导航栏
//   onReachBottomDistance: 50, // 页面上拉触底事件触发时距页面底部距离，单位为 px
// }
```

#### 2.获取用户头像信息问题

```
使用Taro.getUserProfile无法获取用户的现有头像和名称，在调试库版本在2.27.0以下可以通过授权获得用户现有头像和名称。
```

#### 3.报错Minified React error #310;

```
    只从React函数组件或自定义钩子中调用Hook
    只在最顶层使用 Hook
    不要在循环，条件或嵌套函数中调用 Hook
    确保总是在你的 React 函数的最顶层以及任何 return 之前使用 Hook
```

#### 4.配置路径别名

1.安装Babel插件解析路径别名

```
npm install babel-plugin-module-resolver --save-dev
```

2.根目录下

```
./babel.config.js

module.exports = {
  "plugins": [
    ["module-resolver", {
      "root": [
        "./src"
      ],
      "alias": {
        "@/components": "./src/components",
        "@/pages": "./src/pages",
        "@/utils": "./src/utils"
      }
    }]
  ]
}
```

```
./tsconfig.json

{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/components/*": ["./src/components/*"],
      "@/assets/*": ["./src/assets/*"],
    },
}
```

#### 5.Taro中Echarts图表的用法

参考：https://juejin.cn/post/7347578366835163175

#### 6.这什么写法

```
{/* 实现点击之后60秒倒计时 */}
{/* <Button className='code-button' onClick={() => countdown_button(countdown)}> */}
{/* <Button className='code-button' onClick={phone_login}> */}
{/* {countdown < 60 ? `${countdown}秒后重新获取` : '获取验证码'} */}
{/* </Button> */}
```

#### 7.mobx变量集中管理的使用

##### 7.1创建store用于公用变量管理

```
#src/store/sth_store.ts

import { observable } from "mobx";

// observable 用于定义一个可观察的对象，这个对象的属性发生变化时，会自动触发视图更新
const registerStore = observable({
    time: 0,
    phone_number: '',
    verification_code: '',
    select_box: false,
    // 计时
    setTime() {
        this.time = 60;
        let timer;
        timer = setInterval(() => {
            this.time -= 1;
            if (this.time === 0) {
                clearInterval(timer);
            }
        }, 1000);
    },
    // 改变手机号
    setPhoneNumber(phone) {
        this.phone_number = phone;
    },
    // 改变验证码
    setVerificationCode(code) {
        this.verification_code = code;
    },
    // 改变选择框状态
    setSelectBox() {
        this.select_box = !this.select_box;
    }
})

export default registerStore;
```

##### 7.2在子组件使用store

```
#src/components/LogInButton

import { observer } from 'mobx-react'; //引入变量更改触发页面刷新
import Store from '../../../store/index'; //引入Store变量管理


const LogInButton = () => {
	
  // 通过useContext获取全局状态
  const { registerStore } = useContext(Store); 
  const { time, phone_number, verification_code, select_box } = registerStore;

  // 监听值
  useEffect(() => {}, [select_box, verification_code, time]);

  // 设置点击事件
  const handleClick = () => {
      Taro.request({
        url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/ReCaptcha/',
        method: 'POST',
        data: {
          "phone": phone_number,
          "code": verification_code
        },
        success: function (res) {
          console.log(res.data)
        }
      });
      registerStore.timeOut();
  };

  return (
    <View className="login-button-container">
      <Button
        className="login-button"
        disabled={!isLoginEnabled}  // disabled 属性用于控制按钮是否可点击
        onClick={handleClick}
      >
        登录
      </Button>
    </View>
  );
};
export default observer(LogInButton);
```

##### 7.3另一组件用法同上

#### 8.get请求和post请求

```
GET：用于获取资源，参数附加在URL中，不适合传递敏感信息，幂等且可重复，响应可缓存。
POST：用于提交数据，参数在请求体中，适合传递大量和敏感信息，非幂等且不建议重复发送，响应不缓存。
```

#### 9.引入@antmjs/vantui组件库

```
//site：https://antmjs.github.io/vantui/main/#/home

1.安装
npm install @antmjs/vantui

2.通过babel引入组件
npm i babel-plugin-import -D

3.配置babel引入组件样式
#babel.config.js

const {
  plugin
} = require("postcss");
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  "plugins": [ //plugins是一个数组
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "@/components": "./src/components",
          "@/pages": "./src/pages",
          "@/echarts": "./src/echarts-taro3-react/lib",
        },
      },
    ],
    [
      "import",
      {
        "libraryName": "@antmjs/vantui",
        "libraryDirectory": "es",
        "style": true
      },
      "@antmjs/vantui",
    ]
  ]
}

4.注意事项
需要注意开发者工具的项目设置：
    需要设置关闭 ES6 转 ES5 功能，开启可能报错
    需要设置关闭上传代码时样式自动补全，开启可能报错
    需要设置关闭代码压缩上传，开启可能报错

```

#### 10.在数组中添加数组

```
1.设置循环后的数组
const dates = ['2024-7-11', '2024-7-17', '2024-7-26']
const dateColumns = dates.map((item) => ({
  title: item,
  dataIndex: 'numerical_value',
  align: undefined,
  sort: true,
}));
//注：组件设定align 只接受"left" | "right" | "center" | undefined"中一个，指定'left' as 'left',

2.添加循环后的数组
const columns: ITableProps['columns'] = [
  {
    title: '简称',
    dataIndex: 'abbreviation',
    align: 'left',
    render: (val) => <View style={{ color: '#2196F3' }}>{val}</View>,
    width: 80,
  },
  ...dateColumns,
  {
    title: '参考区间',
    dataIndex: 'section',
    sort: true,
  }
]
```

#### 11.useState方法异步执行

问题描述：在请求方法中，使用了两次set，但是最后一次set覆盖了之前的set；

```
const handleSend = () => {
  if (inputValue.trim()) { //如果输入的值不为空; trim() 方法用于删除字符串的头尾空白符
    setMessages([...messages, { type: 'user', content: inputValue }]); //将输入的值添加到messages数组中
    console.log(inputValue);
    Taro.request({
      url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/chat/',
      method: 'POST',
      data: {
        content: inputValue
      },
      success: (res) => {
        console.log(res.data);
        // 将返回的数据添加到messages数组中
        setMessages([...messages, { type: 'agent', content: res.data.content }]);
      },
      fail: (err) => {
        console.log('err', err);
      },
    });
    setInputValue(''); //清空输入框
  }
};
```

![image-20240809184537851](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240809184537851.png)

![image-20240809184541948](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240809184541948.png)

原因：由于 [`setMessages`](vscode-file://vscode-app/c:/Program Files/CodeSoftware/Microsoft VS Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) 是异步的，[`messages`](vscode-file://vscode-app/c:/Program Files/CodeSoftware/Microsoft VS Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) 变量在回调中仍然是旧的值。

解决：使用函数式的setMessages来解决这个问题

```
const handleSend = () => {
  if (inputValue.trim()) {
    setMessages((prevMessages) => [...prevMessages, { type: 'user', content: inputValue }]);
    console.log(inputValue);
    // 延时请求
    setTimeout(() => {
      Taro.request({
        url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/chat/',
        method: 'POST',
        data: {
          content: inputValue
        },
        success: (res) => {
          console.log(res.data);
          // 将返回的数据添加到messages数组中
          setMessages((prevMessages) => [...prevMessages, { type: 'agent', content: res.data.content }]);
        },
        fail: (err) => {
          console.log('err', err);
        },
      });
    }, 1000);
    setInputValue(''); //清空输入框
  }
};
```

#### 12.异步创建

```
 const Index = async () => {}
 
 const avatarUrl = await Taro.getStorage({ key: 'avatarUrl' }).then(res => res.data);

 const nickName = await Taro.getStorage({ key: 'nickName' }).then(res => res.data);
```

#### 13.设置Picker组件弹性布局不生效问题

Picker组件内默认为一个元素，无法使用弹性布局；需要使用一个整体View组件，在内部设置弹性布局；

```
{/* 注：Picker中默认为一个元素 */}
<Picker
  mode='selector'
  range={initialData.map((item) => item.title)}
  onChange={handleChangeValue}
  className='main-left'
>
  <View className='picker'>
    <View className='picker-text'>{selectedValue}</View>
    <Image
      className='picker-image'
      src={require('../assets/charts/arrow-down.svg')}
    />
  </View>
</Picker>
```

