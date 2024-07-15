 #### 文章目录

*   *   *   [一、npx介绍及使用](#npx_1)
        *   *   [1、npx 是什么](#1npx__5)
            *   [2、npx 会把远端的包下载到本地吗?](#2npx__25)
            *   [3、npx 执行完成之后， 下载的包是否会被删除？](#3npx___29)
            *   [4、npx和npm的区别](#4npxnpm_34)
        *   [二、yarn介绍及使用](#yarn_41)
        *   *   [1、Yarn是什么？](#1Yarn_43)
            *   [2、Yarn的常见场景：](#2Yarn_46)
            *   [3、Yarn常用命令](#3Yarn_56)
        *   [三、nvm介绍及使用](#nvm_122)
        *   *   [1、nvm是什么？](#1nvm_124)
            *   [2、nvm的安装](#2nvm_127)
            *   [3、nvm的使用](#3nvm_133)

#### 一、[npx](https://so.csdn.net/so/search?q=npx&spm=1001.2101.3001.7020)介绍及使用

平时[安装node](https://so.csdn.net/so/search?q=%E5%AE%89%E8%A3%85node&spm=1001.2101.3001.7020)模块的时候，经常使用的命令是npm。其实还有另外一个命令，叫做npx。网上的说法都是：npx是npm命令的升级版本，功能非常强大。

##### 1、npx 是什么

npx是一个由Node.js官方提供的用于快速执行npm包中的可执行文件的工具。它可以帮助我们在不全局安装某些包的情况下，直接运行该包提供的命令行工具。npx会在执行时，检查本地项目中是否安装了对应的依赖，如果没有安装则会自动下载安装，并执行命令。如果本地已经存在该依赖，则直接执行命令。

使用npx时，可以在命令行中输入要执行的包名加上其参数，例如：

用npx创建vue项目

```
npx @vue/cli create your-project-name
```

用npx创建react项目

```
npx create-react-app your-project-name
```

##### 2、npx 会把远端的包下载到本地吗?

npx 不会像 npm 或 yarn 一样将包下载到本地的 node\_modules 目录中。相反，它会在执行命令时，在本地缓存中寻找并下载包，然后执行该包中的命令。这样可以避免在开发过程中在全局安装大量的包，同时也可以确保使用的是最新版本的包。

##### 3、npx 执行完成之后， 下载的包是否会被删除？

是的，npx会在执行完命令后删除下载的包。这是因为npx会在执行命令之前，将需要执行的包下载到一个临时目录中，并在执行完毕后删除该目录。这样可以避免在本地留下不必要的依赖包。如果需要保留依赖包，可以使用–no-cleanup选项来禁止删除下载的包。

##### 4、npx和npm的区别

npx侧重于执行命令的，执行某个模块命令。虽然会自动安装模块，但是重在执行某个命令。

npm侧重于安装或者卸载某个模块的。重在安装，并不具备执行某个模块的功能。

#### 二、yarn介绍及使用

##### 1、Yarn是什么？

Yarn是一个流行的JavaScript包管理器，它提供了方便的方式来安装、管理、更新和删除JavaScript库和框架。Yarn可以与npm（Node Package Manager）互操作，并且具有更高的性能和更可靠的网络连接。

##### 2、Yarn的常见场景：

*   安装依赖：使用Yarn可以轻松地安装项目所需的JavaScript库和框架。通过运行yarn install命令，Yarn会读取项目中的package.json文件，并安装所有列出的依赖项。
*   版本控制：Yarn支持版本控制，可以轻松地管理依赖项的版本。通过运行yarn upgrade命令，可以更新所有依赖项到最新版本。而通过yarn downgrade命令，可以将特定依赖项降级到以前的版本。
*   发布包：Yarn也允许你发布自己的JavaScript包到npm仓库。通过运行yarn publish命令，可以准备一个npm包并将其发布到npm仓库。
*   链接依赖：Yarn支持链接依赖项，允许开发人员在不同项目之间共享依赖项。通过运行yarn link命令，可以将一个项目的依赖项链接到另一个项目。
*   脚本执行：Yarn允许在项目中使用自定义脚本。通过在package.json文件中定义脚本命令，可以轻松地执行自定义脚本，例如运行测试、构建应用程序或启动开发服务器等。

总之，Yarn是一个功能强大的工具，可以帮助开发人员更有效地管理JavaScript项目中的依赖项和脚本。

##### 3、Yarn常用命令

安装yarn命令:

```
npm install -g yarn
```

查看版本号

```
yarn version
```

初始化项目

```
yarn init 
```

查看全部配置项

```
yarn config list
```

显示某配置项

```
yarn config get <key>
```

删除某配置项

```
yarn config delete <key>
```

设置配置项

```
yarn config set <key> <value> [-g|--global]
```

安装包命令，该命令会根据packge.json文件安装依赖包，生成node\_modules文件夹。

```
yarn install xxx
```

强制重新下载所有包

```
yarn install --force
```

添加包，该命令会自动更新package.json和yarn.lock

```
yarn add [package]
```

删除包，该命令会自动更新package.json和yarn.lock

```
yarn remove <packageName> 
```

发布包

```
yarn publish
```

查看缓存

```
yarn cache
```

运行脚本，该命令执行在 package.json 中 scripts 属性下定义的脚本。

```
yarn run 
```

打包，该命令将源码编译成dist目录下发行文件。

```
yarn build 
```

#### 三、nvm介绍及使用

##### 1、nvm是什么？

nvm是一个node的版本管理工具，可以简单操作node版本的切换、安装、查看等等，与npm不同的是，npm是依赖包的管理工具。

##### 2、nvm的安装

1.下载  
2.安装

> 安装后的目录：C:\\Users\\admin\\AppData\\Roaming\\nvm

##### 3、nvm的使用

1.看安装的所有node.js的版本

```
nvm ls
```

2.查显示可以安装的所有node.js的版本

```
nvm list available
```

4.安装所对应的版本。

```
nvm install 版本号 

// 例如：nvm install 16.20.1
```

5.// 切换到使用指定的nodejs版本

```
nvm use 版本号
```

6.检测是否切换完成，新开一个cmd

```
node -v
```

8、删除已安装node

```
nvm uninstall 版本  

// 例如：nvm uninstall 14.19.0
```

源：https://blog.csdn.net/shanghai597/article/details/133930521