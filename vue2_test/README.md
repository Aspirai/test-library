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
