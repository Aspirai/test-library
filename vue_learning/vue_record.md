1. ### 插件

   - #### Live Server

     vscode插件,可以将HTML以本地环境服务器5500端口启动,项目默认加载到根目录;

2. ### 项目

   - #### learn git branching

     学习git[指令](https://github.com/pcottle/learnGitBranching) 

   - #### awesome-vue

     与vue相关[内容](https://github.com/vuejs/awesome-vue#readme)

   - #### 相关库搜索[地址](https://awesomejs.dev/for/vue/)

3. ### 配置项

   - 引入`vue`之后,相当于全局添加了一个`vue`变量,需要new后使用;

     ```html
     <script type="text/javascript" src="../js/vue.js"></script>
     <script type="text/javascript">
         const vm = new Vue()
     </script>
     ```

   - #### 引入外部文件

     ```html
     <head>
       <!-- 添加网站icon -->
       <link rel="icon" href="../img/favicon.ico" type="image/x-icon">
       <!-- 引入样式表 -->
       <link rel="stylesheet" href="../css/style.css">
       <!-- 引入vue 脚本,全局多出一个Vue函数,需要new使用 -->
       <script type="text/javascript" src="../js/vue.js"></script>
     </head>
     ```

   - #### `el`配置项说明

   - 语法:`#`为id选择器,若是类元素class,使用`.`选择,即`.root`

     ```tsx
       <script type="text/javascript">
         Vue.config.productionTip = false //设置为 false 以阻止 vue 在启动时生成生产提示
         //创建Vue实例
         const vm = new Vue({
           el:'#root' //el:元素选择器,选择元素id为root的元素,指定当前Vue实例为那个容器服务,值通常为CSS选择器字符串,也可以使用下面的写法
           // el:document.getElementById('root')
         })
       </script>
     ```

   - #### 插值语法

     `name`为配置项`data`中的`name`值,`{{}}`中为JS表达式;

     JS表达式是一种特殊的JS语句,JS语句等价于JS代码;

     ```html
     <div id="root">
       Hello,{{name}}
     </div>
     ```

   - #### `data`配置项说明

     语法:多组key,value之间使用`,`分隔

     语法:对象是`{}`,数组是`[]`

     ```HTML
       <script type="text/javascript">
         Vue.config.productionTip = false //设置为 false 以阻止 vue 在启动时生成生产提示
     
         //创建Vue实例
         const vm = new Vue({
           el:'#root', 
           data:{ //data中用于存储数据,数据供el所指定的容器去使用
             name:'Kaleus'
           }
         })
       </script>
     ```

     

4. ### 语法糖

   - `#root` = `<div id="root"></div>`