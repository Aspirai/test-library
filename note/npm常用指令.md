### 1. 安装模块

| 命令             | 作用                                                         |
| :--------------- | :----------------------------------------------------------- |
| npm init         | 初始化 package.json，它是 NodeJS 约定的用来存放项目的信息和配置等信息的文件 |
| npm i            | 安装所有依赖，从github上拉取项目后，常执行此命令用于初始化   |
| npm i 包名       | 安装模块到默认dependencies                                   |
| npm i 包名 -g    | 会安装到配置的全局目录下                                     |
| npm i 包名 -S    | 安装包信息将加入到dependencies生产依赖                       |
| npm i 包名 -D    | 安装包信息将加入到devDependencies开发依赖                    |
| npm i 包名@1.8.3 | 安装模块指定为1.8.3版本                                      |

#### 缩写解释

- -g： 为 --global 的缩写，表示安装到全局目录里
- -S： 为 --save 的缩写，表示安装的包将写入package.json里面的dependencies
- -D： 为 --save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies
- i： 为install的缩写，表示安装

#### 常见问题

- 全局安装与本地安装的区别：本地安装是指安装到项目中指定的node-moudel中，全局安装是到node安装目录下的node-mouduels中，全局安装你可以用cmd命令行去操作，本地则通过require语法获取安装引入安装模块
- 生产依赖和开发依赖的区别：生产依赖里面的包只用于开发环境，不用于生产环境，这些包通常是单元测试或者打包工具等，例如webpack等。开发依赖，或者叫做业务依赖，这是我们最常用的依赖包管理对象，它用于指定应用依赖的外部包，这些依赖是应用发布后正常执行时所需要的，但不包含测试时或者本地打包时所使用的包

### 2. 卸载模块

- npm uninstall 包名
- un为uninstall的缩写

### 3. 更新模块

| 命令                    | 作用                   |
| :---------------------- | :--------------------- |
| npm update 包名         | 更新最新版本的模块     |
| npm update 包名@2.1.0   | 更新到指定版本号的模块 |
| npm install 包名@latest | 更新到最新版本         |

### 4. 查看命令

| 命令                       | 作用                           |
| :------------------------- | :----------------------------- |
| npm list / npm ls          | 查看本地已安装包的清单列表     |
| npm view 包名 dependencies | 查看某个包对于各种包的依赖关系 |
| npm view 包名 version      | 查看包的最新的版本号           |
| npm view 包名 versions     | 查看包的历史版本号             |
| npm view 包名              | 查看最新的jquery版本的信息     |

### 5. 设置镜像

全局淘宝镜像：

代码语言：javascript

复制

```javascript
npm config set registry https://registry.npm.taobao.org
```

默认全局镜像：

代码语言：javascript

复制

```javascript
npm config set registry https://registry.npmjs.org
```

### 6. 其他命令

| 命令            | 作用                     |
| :-------------- | :----------------------- |
| npm cache clean | 清除npm的缓存            |
| npm prune       | 清除项目中没有被使用的包 |

源：https://cloud.tencent.com/developer/article/2277596