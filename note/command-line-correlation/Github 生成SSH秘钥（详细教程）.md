前言
==

很多朋友在用github管理项目的时候，都是直接使用https url克隆到本地，当然也有有些人使用 SSH url 克隆到本地。然而，为什么绝大多数人会使用https url克隆呢？

这是因为，使用https url克隆对初学者来说会比较方便，复制https url 然后到 git Bash 里面直接用clone命令克隆到本地就好了。而使用 SSH url 克隆却需要在克隆之前先配置和添加好 SSH key 。

因此，如果你想要使用 SSH url 克隆的话，你必须是这个项目的拥有者。否则你是无法添加 SSH key 的。

https 和 SSH 的区别：
================

1、前者可以随意克隆github上的项目，而不管是谁的；而后者则是你必须是你要克隆的项目的拥有者或管理员，且需要先添加 SSH key ，否则无法克隆。

2、https url 在push的时候是需要验证用户名和密码的；而 SSH 在push的时候，是不需要输入用户名的，如果配置SSH key的时候设置了密码，则需要输入密码的，否则直接是不需要输入密码的。

在 github 上添加 SSH key 的步骤：
=========================

第一步、首先，检查下自己之前有没有已经生成：
----------------------

在开始菜单中打开git下的git bash（当然，在其他目录下打开git bash也是一样的）：  
然后执行

```bash
ls -al ~/.ssh 
```

第二步、如果能进入到.ssh文件目录下 ，则证明，之前生成过.ssh秘钥，可以直接使用里面的秘钥。
-------------------------------------------------

如果不能进入到.ssh文件目录下，则：

检测下自己之前有没有配置：

```lua
git config user.name和git config user.email（直接分别输入这两个命令）
```

如果之前没有创建，则执行以下命令：

```verilog
git config –global user.name ‘xxxxx’ 
git config –global user.email ‘xxx@xx.xxx’
```

生成秘钥

```undefined
ssh-keygen -t rsa -C ‘上面的邮箱’
```

代码参数含义：

\-t 指定密钥类型，默认是 rsa ，可以省略。  
\-C 设置注释文字，比如邮箱。  
\-f 指定密钥文件存储文件名。

接着按3个回车

```vbnet
[root@localhost ~]# ssh-keygen -t rsa       <== 建立密钥对，-t代表类型，有RSA和DSA两种
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):   <==密钥文件默认存放位置，按Enter即可
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):     <== 输入密钥锁码，或直接按 Enter 留空
Enter same passphrase again:     <== 再输入一遍密钥锁码
Your identification has been saved in /root/.ssh/id_rsa.    <== 生成的私钥
Your public key has been saved in /root/.ssh/id_rsa.pub.    <== 生成的公钥
The key fingerprint is:
SHA256:K1qy928tkk1FUuzQtlZK+poeS67vIgPvHw9lQ+KNuZ4 root@localhost.localdomain
The key's randomart image is:
+---[RSA 2048]----+
|           +.    |
|          o * .  |
|        . .O +   |
|       . *. *    |
|        S =+     |
|    .    =...    |
|    .oo =+o+     |
|     ==o+B*o.    |
|    oo.=EXO.     |
+----[SHA256]-----+
```

最后在.ssh目录下(C盘用户文件夹下)得到了两个文件：id\_rsa（私有秘钥）和id\_rsa.pub（公有密钥）

第三步、如果想登陆远端，则需要将rsa.pub里的秘钥添加到远端。
---------------------------------

首先，去.ssh目录下找到id\_rsa.pub这个文件夹打开复制全部内容。

接着：

1.登录GitHub，进入你的Settings

![](https://img2020.cnblogs.com/blog/1833224/202003/1833224-20200323114403508-625146572.png)

2.会看到左边这些目录，点击SSH and GPG keys

![](https://img2020.cnblogs.com/blog/1833224/202003/1833224-20200323114608488-786274780.png)

3.创建New SSH key

![](https://img2020.cnblogs.com/blog/1833224/202003/1833224-20200323114634462-1837490460.png)

4.粘贴你的密钥到你key输入框中

![](https://img2020.cnblogs.com/blog/1833224/202003/1833224-20200323114651978-1318462262.png)

5.点击Add SSH key  
6.再弹出窗口，输入你的GitHub密码，点击确认按钮。  
7.到此，就大功告成了。

第四步 测试。
-------

再使用下面的命令测试是否成功

```css
ssh -T git@github.com
```

然后会看到这个内容，输入yes即可  
![](https://img2020.cnblogs.com/blog/1833224/202003/1833224-20200323114903108-1714804783.png)

最后，如看到以下信息，那么就完美了。成功了！！！  
![](https://img2020.cnblogs.com/blog/1833224/202003/1833224-20200323114955428-1355713122.png)

本文转自 <https://www.cnblogs.com/yuqiliu/p/12551258.html>，如有侵权，请联系删除。