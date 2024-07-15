This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## git常用提交命令

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

## git规范提交格式

git commit -m <type>[optional scope]: <description> //注意冒号后面有空格

- type：提交的类型（如新增、修改、更新等）
- optional scope：涉及的模块，可选
- description：任务描述

### type类型：

类别 含义
feat 新功能
fix 修复 bug
style 样式修改（UI校验）
docs 文档更新
refactor 重构代码(既没有新增功能，也没有修复 bug)
perf 优化相关，比如提升性能、体验
test 增加测试，包括单元测试、集成测试等
build 构建系统或外部依赖项的更改
ci 自动化流程配置或脚本修改
revert 回退某个commit提交

### 示例：

git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'

#### 我使用的

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

### 拉取远程恢复到本地

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

## git设置邮箱和用户名

1.用户名和邮箱的作用

    用户名和邮箱地址是本地git客户端的一个变量 . 用户每次提交代码都会记录用户名和邮箱 .

2.设置
2.1设置用户名

git config --global user.name "username"

2.2设置邮箱 (没有双引号)

git config --global user.email useremail@qq.com

3.查看用户名和密码

git config user.name
git config user.email

4.查看其他配置信息(git设置列表)

git config --list

5.制定身份配置文件
git config --local include.path /path/to/another/config/file

## git关联GitHub使用ssh

$ cd ~  ///保证当前路径在”~”下

$ ssh-keygen -t rsa -C "你的邮箱地址"  ///建议填写自己真实有效的邮箱地址

结果：

Enter file in which to save the key (/c/Users/xxxx_000/.ssh/id_rsa):   ///不填直接回车

Enter passphrase (empty for no passphrase):   ///输入密码（直接回车）

Enter same passphrase again:   ///再次确认密码（直接回车）

*本机已完成ssh key设置，其存放路径为：c:/Users/用户名/.ssh/下。

将id_rsa.pub 中的一大串内容拷贝到GitHub上


## npm使用

