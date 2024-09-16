运维 | 使用 Docker Compose 搭建 Lsky Pro 图床 | Docker
----------------------------------------------

### 简介

Lsky Pro 是一个用于在线上传、管理图片的图床程序，中文名：兰空图床，你可以将它作为自己的云上相册，亦可以当作你的写作贴图库。

兰空图床始于 2017 年 10 月，最早的版本由 ThinkPHP 5 开发，后又经历了数个版本的迭代，在 2021 年末启动了新的重写计划并于 2022 年 3 月份发布全新的 2.0 版本。

项目地址：[https://github.com/lsky-org/lsky-pro](https://link.zhihu.com/?target=https%3A//github.com/lsky-org/lsky-pro)

官网地址：[https://www.lsky.pro/](https://link.zhihu.com/?target=https%3A//www.lsky.pro/)

文档地址：[https://docs.lsky.pro/](https://link.zhihu.com/?target=https%3A//docs.lsky.pro/)

Docker镜像地址：[https://hub.docker.com/r/dko0/lsky-pro](https://link.zhihu.com/?target=https%3A//hub.docker.com/r/dko0/lsky-pro)

PicGo插件：[https://hellodk.cn/post/964](https://link.zhihu.com/?target=https%3A//hellodk.cn/post/964)

### 功能特性

*   支持`本地`等多种第三方云储存 `AWS S3`、`阿里云 OSS`、`腾讯云 COS`、`七牛云`、`又拍云`、`SFTP`、`FTP`、`WebDav`、`Minio`
*   多种数据库驱动支持，`MySQL 5.7+`、`PostgreSQL 9.6+`、`SQLite 3.8.8+`、`SQL Server 2017+`
*   支持配置使用多种缓存驱动，`Memcached`、`Redis`、`DynamoDB`、等其他关系型数据库，默认以文件的方式缓存
*   多图上传、拖拽上传、粘贴上传、动态设置策略上传、复制、一键复制链接
*   强大的图片管理功能，瀑布流展示，支持鼠标右键、单选多选、重命名等操作
*   自由度极高的角色组配置，可以为每个组配置多个储存策略，同时储存策略可以配置多个角色组
*   可针对角色组设置上传文件、文件夹路径命名规则、上传频率限制、图片审核等功能
*   支持图片水印、文字水印、水印平铺、设置水印位置、X/y 轴偏移量设置、旋转角度等
*   支持通过接口上传、管理图片、管理相册
*   支持在线增量更新、跨版本更新
*   图片广场

### 准备工作

*   服务器

Vultr 注册：[https://www.vultr.com/](https://link.zhihu.com/?target=https%3A//www.vultr.com/) Racknerd 注册：[https://my.racknerd.com/](https://link.zhihu.com/?target=https%3A//my.racknerd.com/)

*   域名注册与解析

域名注册：[https://www.namesilo.com](https://link.zhihu.com/?target=https%3A//www.namesilo.com) 域名解析：[https://www.cloudflare.com](https://link.zhihu.com/?target=https%3A//www.cloudflare.com)

*   SSH 连接工具（可选，推荐）

FinalShell下载：[http://www.hostbuf.com/t/988.html](https://link.zhihu.com/?target=http%3A//www.hostbuf.com/t/988.html)

*   反向代理工具（可选，推荐）

Nginx Proxy Manager：[https://nginxproxymanager.com/](https://link.zhihu.com/?target=https%3A//nginxproxymanager.com/)

> 以上提供的链接或工具仅作为示例，具体情况请按照需使用

### 快速使用

> 下面以 `CentOS` 系统为例

### 环境搭建

*   安装常用工具包

```text
sudo -i # 切换到root用户
yum update -y
yum install wget curl sudo vim git lsof
```

*   设置 `SWAP` 脚本（可选）

```text
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```

> 注意：VPS的内存如果过小，建议设置一下SWAP，一般为内存的1-1.5倍即可，可以让运行更流畅！

*   安装 `Docker` 环境  
    
*   Docker 安装文档：[https://docs.docker.com/engine/install/](https://link.zhihu.com/?target=https%3A//docs.docker.com/engine/install/)  
    
*   Docker Compose 安装文档：[https://docs.docker.com/compose/install/](https://link.zhihu.com/?target=https%3A//docs.docker.com/compose/install/)

### 创建容器

1.  在系统任意位置创建一个文件夹，此文档以 `/opt/docker/lsky` 为例

```text
mkdir -p /opt/docker/lsky && cd /opt/docker/lsky
mkdir -p ./{conf,data,logs}
```

> 注意：后续操作中，产生的所有数据都会保存在这个目录，请妥善保存

1.  创建 `docker-compose.yaml`

```text
version: '3'
services:
    lsky-pro:
        container_name: lsky-pro
        image: dko0/lsky-pro
        restart: always
        volumes:
            - ./data/html:/var/www/html  #映射到本地
        ports:
            - 7791:80
        environment:
            - MYSQL_HOST=mysql
            - MYSQL_DATABASE=lsky-pro
            - MYSQL_USER=lsky-pro
            - MYSQL_PASSWORD=lsky-pro

    mysql:
        image: mysql:8.0
        container_name: lsky-pro-db
        restart: always
        environment:
          - MYSQL_DATABASE=lsky-pro
          - MYSQL_USER=lsky-pro
          - MYSQL_PASSWORD=lsky-pro
          - MYSQL_ROOT_PASSWORD=lsky-pro
        volumes:
          - ./data/db:/var/lib/mysql
```

> 注意：查看端口是否被占用 `lsof -i:7791`

1.  启动服务

```text
docker-compose up -d
```

实时查看日志：

```text
docker-compose logs -f
```

1.  用浏览器访问 `http://ip:端口号` 即可  
    
2.  查看服务器 IP：  
    

```text
curl ip.sb
```

> 如果需要配置域名访问，建议先配置好反向代理以及域名解析再进行初始化。如果通过 `http://ip:端口号` 的形式无法访问，请到服务器厂商后台将运行的端口号添加到安全组，如果服务器使用了 Linux 面板，请检查此 Linux 面板是否有还有安全组配置，需要同样将端口号添加到安全组。

### 更新容器

1.  停止运行中的容器组

```text
cd /opt/docker/lsky && docker-compose down
```

1.  备份数据（重要）

```text
cp -r /opt/docker/lsky /opt/docker/lsky.archive
```

> 需要注意的是，`lsky.archive` 文件名不一定要根据此文档命名，这里仅仅是个示例。

1.  更新服务

修改 `docker-compose.yaml` 中配置的镜像版本

拉取镜像

```text
docker-compose pull lsky-pro
```

重新启动容器

```text
docker-compose up -d
```

### 进阶使用

### 反向代理

*   使用 Nginx Proxy Manager 工具

> Nginx Proxy Manager（以下简称NPM）会用到 `80`、`443` 端口，所以本机不能占用

### 使用指南

### 初始化安装

访问网页地址，进入安装界面，按照提示进行安装即可

  

<img src="https://pic2.zhimg.com/v2-0b8ad4cd30003f41b699ba9879495bc1\_b.jpg" data-caption="" data-size="normal" data-rawwidth="2952" data-rawheight="1826" class="origin\_image zh-lightbox-thumb" width="2952" data-original="https://pic2.zhimg.com/v2-0b8ad4cd30003f41b699ba9879495bc1\_r.jpg"/>

![](https://pic2.zhimg.com/v2-0b8ad4cd30003f41b699ba9879495bc1_r.jpg)

  

注意，数据库连接地址，填 `docker-compose` 文件里的容器名称 `lsky-pro-db`

  

<img src="https://pic2.zhimg.com/v2-21471bf24328fd3b87fbdae490f8cecd\_b.jpg" data-caption="" data-size="normal" data-rawwidth="2952" data-rawheight="1826" class="origin\_image zh-lightbox-thumb" width="2952" data-original="https://pic2.zhimg.com/v2-21471bf24328fd3b87fbdae490f8cecd\_r.jpg"/>

![](https://pic2.zhimg.com/v2-21471bf24328fd3b87fbdae490f8cecd_r.jpg)

  

提示安装成功，就可以开始使用了

![](https://pic2.zhimg.com/v2-d467026e74cbc26f1c12972702cb78ed_r.jpg)

  

![](https://pic3.zhimg.com/v2-bbb3b1aea650e27997a281d57f201392_r.jpg)

  

### 管理员登录

输入前面填写的 `管理员邮箱` 和 `密码` 进行登录

  

<img src="https://pic3.zhimg.com/v2-3a920874d40892a06100b49d7add369a\_b.jpg" data-caption="" data-size="normal" data-rawwidth="2952" data-rawheight="1826" class="origin\_image zh-lightbox-thumb" width="2952" data-original="https://pic3.zhimg.com/v2-3a920874d40892a06100b49d7add369a\_r.jpg"/>

![](https://pic3.zhimg.com/80/v2-3a920874d40892a06100b49d7add369a_720w.webp)

  

  

<img src="https://pic2.zhimg.com/v2-1e07377a2ab43e092f1a37dee781c215\_b.jpg" data-caption="" data-size="normal" data-rawwidth="2952" data-rawheight="1826" class="origin\_image zh-lightbox-thumb" width="2952" data-original="https://pic2.zhimg.com/v2-1e07377a2ab43e092f1a37dee781c215\_r.jpg"/>

![](https://pic2.zhimg.com/80/v2-1e07377a2ab43e092f1a37dee781c215_720w.webp)

  

### 系统设置

*   修改站点名称

  

<img src="https://pic1.zhimg.com/v2-5fe6d3d538338a60f4d4294f0d95f98c\_b.jpg" data-caption="" data-size="normal" data-rawwidth="2952" data-rawheight="1826" class="origin\_image zh-lightbox-thumb" width="2952" data-original="https://pic1.zhimg.com/v2-5fe6d3d538338a60f4d4294f0d95f98c\_r.jpg"/>

![](https://pic1.zhimg.com/80/v2-5fe6d3d538338a60f4d4294f0d95f98c_720w.webp)

  

### API 接口

*   访问 `接口` 设置页面

  

<img src="https://pic1.zhimg.com/v2-5ec2f430c491612010bb3466ede226a4\_b.jpg" data-caption="" data-size="normal" data-rawwidth="2952" data-rawheight="1826" class="origin\_image zh-lightbox-thumb" width="2952" data-original="https://pic1.zhimg.com/v2-5ec2f430c491612010bb3466ede226a4\_r.jpg"/>

![](https://pic1.zhimg.com/80/v2-5ec2f430c491612010bb3466ede226a4_720w.webp)

  

*   获取 `token`

在线 HTTP 接口测试：[https://www.sojson.com/httpRequest/](https://link.zhihu.com/?target=https%3A//www.sojson.com/httpRequest/)

  

<img src="https://pic4.zhimg.com/v2-abb4bf3f2976918a21eaa1d099aaf987\_b.jpg" data-caption="" data-size="normal" data-rawwidth="2952" data-rawheight="1826" class="origin\_image zh-lightbox-thumb" width="2952" data-original="https://pic4.zhimg.com/v2-abb4bf3f2976918a21eaa1d099aaf987\_r.jpg"/>

![](https://pic4.zhimg.com/80/v2-abb4bf3f2976918a21eaa1d099aaf987_720w.webp)

  

### PicGO 插件

参考文档：[https://www.imcharon.com/1068/](https://link.zhihu.com/?target=https%3A//www.imcharon.com/1068/)

### FAQ

### 该网页无法正常运作，显示 HTTP ERROR 503

*   检测防火墙，放行端口

CentOS

```text
firewall-cmd --list-ports   # 查看已开放的端口
firewall-cmd --zone=public --add-port=7791/tcp --permanent  # 开放端口（开放后需要要重启防火墙才生效）
firewall-cmd --reload   # 重启防火墙
```

Ubuntu & Debian

```text
iptables -I INPUT -p tcp --dport 80 -j ACCEPT   # 放行80端口
iptables -I INPUT -p tcp --dport 443 -j ACCEPT  # 放行443端口
iptables -I INPUT -p tcp --dport 7791 -j ACCEPT  # 放行7791端口
```

### 结尾

本期的内容就到这里，路过的小伙伴记得支持一下哦！

本文转自 <https://zhuanlan.zhihu.com/p/659140708>，如有侵权，请联系删除。