### Lsky 图床搭建

#### 1.宝塔面板搜索lsky

![image-20240808141214253](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808141214253.png)

#### 2.点击管理配置初始属性

![image-20240808141302795](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808141302795.png)

#### 3.进入访问信息查看访问地址

![image-20240808141401221](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808141401221.png)

#### 4.浏览器访问链接

![image-20240808141504465](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808141504465.png)

![image-20240808141602372](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808141602372.png)

注意，数据库连接地址，填 `docker-compose` 文件里的容器名称 `lsky-pro-db`，数据库名称为初始属性中名称 `lsky-pro` ；

用户名 === 密码 === `lsky-pro` 都为初始化中所填属性；

邮箱和密码为面板登录账号；

![image-20240808142031801](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142031801.png)

#### 5.输入账号登录

![image-20240808142131345](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142131345.png)

![img](https://pic3.zhimg.com/80/v2-3a920874d40892a06100b49d7add369a_720w.webp)

#### 6.设置属性

![image-20240808142228948](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142228948.png)

![image-20240808142244838](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142244838.png)

![image-20240808142342179](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142342179.png)

### Lsky 配置PicGo

#### 1.请求面板中接口获取token

![image-20240808142544935](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142544935.png)

![image-20240808142549626](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142549626.png)

#### 2.在PostMan或者Apifox请求链接获取token

![image-20240808142731337](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808142731337.png)

![image-20240808143026029](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808143026029.png)

#### 3.PicGo下载插件

![image-20240808143132344](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808143132344.png)

#### 4.配置属性

![image-20240808143300962](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808143300962.png)

注：token中前面需要加Bearer，然后空一格加上token;地址填写域名；或者服务器地址，加http和端口

![image-20240808143444896](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808143444896.png)

上传成功

![image-20240808143528178](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240808143528178.png)