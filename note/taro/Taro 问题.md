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

