### 插件

#### Live Server

vscode插件,可以将HTML以本地环境服务器5500端口启动,项目默认加载到根目录;

### 项目

#### learn git branching

学习git[指令](https://github.com/pcottle/learnGitBranching) 

#### awesome-vue

与vue相关[内容](https://github.com/vuejs/awesome-vue#readme)

#### 相关库搜索[地址](https://awesomejs.dev/for/vue/)

### 配置项

引入`vue`之后,相当于全局添加了一个`vue`变量,需要new后使用;

```html
<script type="text/javascript" src="../js/vue.js"></script>
<script type="text/javascript">
    const vm = new Vue()
</script>
```

#### 引入外部文件

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

#### `el`配置项说明

语法:`#`为id选择器,若是类元素class,使用`.`选择,即`.root`

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

#### 插值语法

`name`为配置项`data`中的`name`值,`{{}}`中为JS表达式;

JS表达式是一种特殊的JS语句,JS语句等价于JS代码;

```html
<div id="root">
  Hello,{{name}}
</div>
```

#### `data`配置项说明

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



### 语法糖

`#root` = `<div id="root"></div>`

#### 指令语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02_Vue模板语法</title>
  <link rel="icon" href="../img/favicon.ico" type="image/x-icon">
  <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
  <!-- 
  Vue模板语法有2大类：
    1.插值语法：
      功能：用于解析标签体内容。
      写法: {{xxx}}， xxx是js表达式，且可以直接读取到data中的所有属性。
    2.指令语法：
      功能：用于解析标签（包括：标签属性、标签体内容、绑定事件……..）。
      举例:v-bind:href="xxx" 或 简写为 ：href="xxx"，xxx同样要写js表达式，x且可以直接读取到data中的所有属性。
      备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。
  -->
  <div id="root">
    <h1>插值语法</h1>
    <h3>你好,{{name}}</h3>
    <hr>
    <h1>指令语法</h1>
    <!-- `<div :id="val">` ====> `<div id="{{ val }}">` -->
    <!-- `v-bind:` ====> `:` 绑定指令,指令以`v-`开头 -->
    <a v-bind:href="url" x="hello">去尚硅谷学习</a>
    <a :href="url">学习</a>
  </div>
  <script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
      el: '#root',
      data: {
        name: 'Kaleus',
        url: 'http://www.atguigu.com',
      }
    })
  </script>
</body>
</html>
```

