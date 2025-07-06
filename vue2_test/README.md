1. `babel`
   将 ES6 语法编写的 JavaScript 转为 ES5 语法,以便代码能在更多浏览器运行.
   ES6 引入了很多新特性(如箭头函数、let/const、模板字符串、结构赋值等)

    ```javascript
    // ES6 语法
    const fn = (a, b) => a + b;

    // ES5 语法
    var fn = function (a, b) {
    	return a + b;
    };
    ```

    默认规则

    ```bash
    module.exports = {
      presets: [
        '@vue/cli-plugin-babel/preset'
      ]
    }
    ```

2. `.gitignore`

    配置 git 忽略监听文件夹,项目生成时自带

    ```bash
    .DS_Store
    node_modules
    /dist


    # local env files
    .env.local
    .env.*.local

    # Log files
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    pnpm-debug.log*

    # Editor directories and files
    .idea
    .vscode
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw?
    ```

3. `package.json`

    项目名称(name)、版本（vuesion）

    运行命令（scripts）:`serve`本地运行服务、`build`将项目编译为浏览器可以识别的形式（html、css、js）、`lint`检查语法（一般不用）

    生产依赖（dependencies）：项目运行时必须的依赖包，会被打包到最终的生产环境代码中，用户访问网站时需要这些包才能正常运行，安装命令：`npm install package-name --save`

    开发依赖（devDependencies）、代码规则（eslintConfig）:只在开发阶段需要依赖包，不会打包到生产环境，用于开发、测试、构建等过程，安装命令：`npm install package-name --save-dev`

    `eslintConfig`

    eslint 规则配置

    `browserslint`

    指定项目需要支持的浏览器范围配置，会影响 Babel、Autoprefixer、ESLint 等工具的行为

    ```shell
    "browserslist": [
      "> 1%",           // 全球使用率超过1%的浏览器
      "last 2 versions", // 每个浏览器的最新2个版本
      "not dead"        // 排除已停止维护的浏览器
    ]

    // 更宽松的兼容性
    ["defaults"]

    // 更严格的现代浏览器
    ["> 5%", "last 1 version", "not ie <= 11"]

    // 特定浏览器版本
    ["Chrome >= 60", "Firefox >= 55", "Safari >= 12"]

    // 移动端优先
    ["iOS >= 10", "Android >= 6"]
    ```

## 脚手架文件结构

    ├── node_modules
    ├── public
    │   ├── favicon.ico: 页签图标
    │   └── index.html: 主页面
    ├── src
    │   ├── assets: 存放静态资源
    │   │   └── logo.png
    │   │── component: 存放组件
    │   │   └── HelloWorld.vue
    │   │── App.vue: 汇总所有组件
    │   │── main.js: 入口文件
    ├── .gitignore: git版本管制忽略的配置
    ├── babel.config.js: babel的配置文件
    ├── package.json: 应用包配置文件
    ├── README.md: 应用描述文件
    ├── package-lock.json：包版本控制文件

## 关于不同版本的 Vue

1. vue.js 与 vue.runtime.xxx.js 的区别：
    1. vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器。
    2. vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能；没有模板解析器。
2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 这个配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容。

## vue.config.js 配置文件

1. 使用 vue inspect > output.js 可以查看到 Vue 脚手架的默认配置。
2. 使用 vue.config.js 可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref 属性

1. 被用来给元素或子组件注册引用信息（id 的替代者）
2. 应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
    1. 打标识：`<h1 ref="xxx">.....</h1>` 或 `<School ref="xxx"></School>`
    2. 获取：`this.$refs.xxx`

## mixin(混入)

1. 功能：可以把多个组件共用的配置提取成一个混入对象

2. 使用方式：

    第一步定义混合：

    ```
    {
        data(){....},
        methods:{....}
        ....
    }
    ```

    第二步使用混入：

    ​ 全局混入：`Vue.mixin(xxx)`
    ​ 局部混入：`mixins:['xxx']	`


## 插件

1. 功能：用于增强Vue

2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：

    ```js
    对象.install = function (Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)
    
        // 2. 添加全局指令
        Vue.directive(....)
    
        // 3. 配置全局混入(合)
        Vue.mixin(....)
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```
