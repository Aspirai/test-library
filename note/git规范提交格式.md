### 我使用的

```
初始化仓库
git init

查看仓库状态
git status

添加文件到暂存区
git add .

提交文件到仓库
git commit -m "feat: 增加 Initial 功能"

查看仓库状态
git status

提交到远程仓库
git push

查看修改前后对比
git diff readme.txt

查看最近提交日志
git log

回退版本
git reset -- hard 版本号

查看远程仓库信息
git remote -v

拉取远程仓库最新内容到本地
git pull

强制推送本地到远端（会覆盖他人修改内容，尽量不使用）
git push -force
```

```
#SSH链接克隆仓库
git clone LINK

#推送并设置上游分支（用于创建了一个新的本地分支并且还没有将它推送到远程仓库）
git push --set-upstream origin master
将当前 master 分支推送到远程仓库并设置上游分支

#查看当前分支
git branch

#切换当前分支到master
git checkout master

#自动设置上游分支（终端或命令行）
git config --global push.autoSetupRemote true
```

```
#本地分支比远程分支落后【 ! [rejected] master -> master (non-fast-forward) 】

1.使用 git pull 命令将远程分支的变化合并到本地分支：
git pull origin master

2.解决冲突（如果有）
git add FILE

3.提交合并
git commit -m "Resolved merge conflicts"

4.推送本地分支到远程仓库
git push origin master
```

```
#将本地分支推送到指定的远程仓库

1.添加远程仓库（如果尚未添加）
git remote add origin LINK

2.拉取远程仓库的最新变化
git pull origin master

3.推送本地分支到远程仓库
git push origin master

4.解决冲突并提交（如果有冲突）：
git add <conflict_file>
git commit -m "Resolved merge conflicts"
强制推送！
git push --force origin master
```

```
#配置 Git 使用 SSH 远程仓库
1.修改远程仓库地址为 SSH：
如果远程仓库地址当前使用的是 HTTPS URL，需要将其修改为 SSH URL。删除原有的 HTTPS 远程仓库：
git remote remove origin

2.添加 SSH 远程仓库：
git remote add origin git@github.com:Aspirai/taro.git

3.验证远程仓库地址：
git remote -v
```



## git规范提交格式

- ```
  git commit -m <type>[optional scope]: <description> //注意冒号后面有空格
  
  - type：提交的类型（如新增、修改、更新等）
  - optional scope：涉及的模块，可选
  - description：任务描述
  ```

### type类型：

| 类别     | 含义                                     |
| -------- | ---------------------------------------- |
| feat     | 新功能                                   |
| fix      | 修复 bug                                 |
| style    | 样式修改（UI校验）                       |
| docs     | 文档更新                                 |
| refactor | 重构代码(既没有新增功能，也没有修复 bug) |
| perf     | 优化相关，比如提升性能、体验             |
| test     | 增加测试，包括单元测试、集成测试等       |
| build    | 构建系统或外部依赖项的更改               |
| ci       | 自动化流程配置或脚本修改                 |
| revert   | 回退某个commit提交                       |

### 示例：

```
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'
```

## git常用提交命令

```
mkdir： XX (创建一个空目录 XX指目录名)

pwd： 显示当前目录的路径。

git init 把当前的目录变成可以管理的git仓库，生成隐藏.git文件。

git add XX 把xx文件添加到暂存区去。

git commit –m “XX” 提交文件 –m 后面的是注释。

git status 查看仓库状态

git diff XX 查看XX文件修改了那些内容

git log 查看历史记录

git reset --hard HEAD^ 或者 git reset --hard HEAD~ 回退到上一个版本
(如果想回退到100个版本，使用git reset –hard HEAD~100 )

cat XX 查看XX文件内容

git reflog 查看历史记录的版本号id

git checkout -- XX 把XX文件在工作区的修改全部撤销。

git rm XX 删除XX文件

git remote add origin https://github.com/tugenhua0707/testgit 关联一个远程库

git push –u(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库

git clone https://github.com/tugenhua0707/testgit 从远程库中克隆

git checkout –b dev 创建dev分支 并切换到dev分支上

git branch 查看当前所有的分支

git checkout master 切换回master分支

git merge dev 在当前的分支上合并dev分支

git branch –d dev 删除dev分支

git branch name 创建分支

git stash 把当前的工作隐藏起来 等以后恢复现场后继续工作

git stash list 查看所有被隐藏的文件列表

git stash apply 恢复被隐藏的文件，但是内容不删除

git stash drop 删除文件

git stash pop 恢复文件的同时 也删除文件

git remote 查看远程库的信息

git remote –v 查看远程库的详细信息

git push origin master Git会把master分支推送到远程库对应的远程分支上
```



### 拉取远程恢复到本地

```
git pull orgin master：
先将远程仓库master中的信息同步到本地仓库master中

git checkout -- test001.txt (或还原全部 git checkout -- \*)
将工作区修改的文件直接还原为最新版本

git push orgin master:
orgin是远程主机，master表示是远程服务器上的master分支和本地分支重名的简写，分支名是可以修改的

git reset HEAD
回退至当前版本(本地仓库,并移出暂存区)

git reset HEAD^
回退至上个版本(本地仓库,并移出暂存区)

git reset --hard HEAD^
回退至上一个版本(本地仓库,并移出暂存区,同时更新工作区的文件)

git reset --hard HEAD^^
回退至上上个版本(本地仓库,并移出暂存区,同时更新工作区的文件)

git reset –hard commitID
回退到某一次提交记录(不可逆,之前的提交记录会清除)

git revert commitID -m 1
撤销某一次的提交记录
```



## git设置邮箱和用户名

1.用户名和邮箱的作用

​    用户名和邮箱地址是本地git客户端的一个变量 . 用户每次提交代码都会记录用户名和邮箱 .

2.设置
2.1设置用户名

```
git config --global user.name "username"
```

2.2设置邮箱 (没有双引号)

```
git config --global user.email useremail@qq.com
```

3.查看用户名和密码

```
git config user.name
git config user.email
```

4.查看其他配置信息(git设置列表)

```
git config --list
```

5.制定身份配置文件

```
git config --local include.path /path/to/another/config/file
```

## git使用ssh关联GitHub方式

```
$ cd ~  ///保证当前路径在”~”下
$ ssh-keygen -t rsa -C "你的邮箱地址"  ///建议填写自己真实有效的邮箱地址
```

结果：

```
Enter file in which to save the key (/c/Users/xxxx_000/.ssh/id_rsa):   ///不填直接回车
Enter passphrase (empty for no passphrase):   ///输入密码（直接回车）
Enter same passphrase again:   ///再次确认密码（直接回车）
```

*本机已完成ssh key设置，其存放路径为：c:/Users/用户名/.ssh/下。

将id_rsa.pub 中的一大串内容拷贝到GitHub上

## 覆盖远程Github仓库

1. 使用 git push 命令覆盖远程仓库：

​    – 首先确认本地仓库与远程仓库关联，可以使用 `git remote -v` 命令查看关联信息。
​    – 在进行覆盖操作前，请确认没有其他人正在操作远程仓库，避免冲突。
​    – 使用 `git push -f <远程仓库名称> <本地分支名称>` 命令进行强制推送。例如：`git push -f origin main`。

2. 强制同步远程仓库：

​    – 使用 `git fetch <远程仓库名称> <远程分支名称>` 命令将远程仓库最新代码拉取到本地。
​    – 然后使用 `git reset –hard <远程仓库名称>/<远程分支名称>` 命令强制本地仓库回退到远程仓库的最新状态。

3. 删除远程仓库重新创建：

​    – 首先在 GitHub 上删除远程仓库。在仓库页面的 “Settings” 下方找到 “Danger Zone”，点击 “Delete this repository”。
​    – 在本地仓库中使用 `git remote remove <远程仓库名称>` 命令删除与远程仓库的关联。
​    – 使用 `git remote add <远程仓库名称> <远程仓库链接>` 命令重新关联远程仓库。
​    – 最后使用 `git push -u <远程仓库名称> <本地分支名称>` 命令推送本地仓库到新创建的远程仓库。

4. 使用 git revert 命令：

​    – 使用 `git log` 命令查看提交历史，找到要回退的提交的 commit hash。
​    – 使用 `git revert ` 命令创建一个新的提交来撤销指定的历史提交。
​    – 使用 `git push` 命令将新的提交推送到远程仓库。

5. 使用 git rebase 命令：

​    – 使用 `git log` 命令查看提交历史，找到要覆盖的提交的 commit hash。
​    – 使用 `git rebase -i ` 命令进入交互式 rebase 操作。
​    – 在弹出的界面中，将要覆盖的提交标记为 `edit`。
​    – 使用 `git commit –amend` 命令修改提交内容，然后使用 `git rebase –continue` 命令继续 rebase。
​    – 最后使用 `git push -f <远程仓库名称> <本地分支名称>` 命令强制推送到远程仓库。

