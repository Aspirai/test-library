#### 1.安装环境

```
# 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli

# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# 使用 pnpm 安装 CLI
$ pnpm install -g @tarojs/cli

# 可以使用 npm info 查看 Taro 版本信息，在这里你可以看到当前最新版本
npm info @tarojs/cli


```

`pnpm` 在磁盘空间使用、性能和安全性方面提供了一些改进，但 `npm` 由于其广泛的使用和支持，仍然是许多项目的首选包管理工具。

#### 2.卸载环境

```
# 使用 npm 卸载 CLI
npm uninstall -g @tarojs/cli

# 使用 yarn 卸载 CLI
yarn global remove @tarojs/cli
```

#### 3.项目初始化

使用命令创建模板项目：

```bash
$ taro init myApp
```

npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目：

```bash
$ npx @tarojs/cli init myApp
```

安装依赖

```bash
# 进入项目根目录
$ cd myApp
# 使用 npm 安装依赖
$ npm install


# 进入项目根目录
$ cd myApp
# 使用 yarn 安装依赖
$ yarn


# 进入项目根目录
$ cd myApp
# 使用 pnpm 安装依赖
$ pnpm install
```

#### 4.编译命令

##### 微信小程序

###### 编译命令

```bash
# yarn
$ yarn dev:weapp
$ yarn build:weapp

# npm script
$ npm run dev:weapp
$ npm run build:weapp

# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp

# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # CMD
$ NODE_ENV=production taro build --type weapp --watch # Bash
```

注：yarn或npm全局安装之后，VSCode终端内命令可能还未更新，需要关闭所有VsCode后再打开
