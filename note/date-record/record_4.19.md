### CSS样式

#### 1.元素快速水平垂直居中

```
//对父元素设置
    display: flex;
    justify-content: center;
    align-items: center;
```

#### 2.Element修改样式穿透

​	1.input修改方法：使用deep告诉浏览器覆盖原样式；

```
  :deep(.el-input__wrapper){//按F12查找所需要修改的元素的class
    border-radius: 30px;
  }
```

![image-20240419124734711](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240419124734711.png)

​	2.按钮修改方法:

```
设置属性
.el-button{}
```

#### 3.元素放置在底部

​	1.父元素设置相对定位，子元素设置绝对定位

```
position:relative;//相对
position:absolut；//绝对
```

#### 4.字间距设置

```
letter-spacing: 12px;
```

#### 5.设置图片自动切换

```
<img :src="images[currentIndex]" alt="Description of the image" @click="nextImage">
```

```
export default {
  data() {
    return {
      currentIndex: 0, // 当前显示的图像索引
      images: [ // 图像的URL数组
        './assets/image1.jpg',
        './assets/image2.jpg',
        './assets/image3.jpg'
      ]
    };
  },
  methods: {
    nextImage() {
      // 切换到下一张图像
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
}
```

#### 6.设置渐变背景

```
background: linear-gradient(45deg, #ffcc00, #ff6600, #ff0000);//三色，45度角渐变
```

#### 7.对于元素无法从左上角定位

​	设置元素为相对于浏览器窗口进行定位、然后设置top、left为0

```
position:fixed;
left:0px;
top:0px;
```

#### 8.Vue实现路由跳转

​	1.总共三个文件需要修改，main.ts、App.vue和自己创建的router.ts;

​	2.第一步：在main.ts引入路由函数

```
// 引入路由函数
import router from './core/router'
app.use(router)

const app = createApp()
app.mount('#app')
```

​	3.第二步：在router.ts编写相应路由

```
import { createRouter,createWebHistory } from "vue-router";

import Login from '@/components/Login/Login.vue';//引入相关组件
import Login1 from '@/components/HelloWorld.vue';

const router = createRouter({
    history:createWebHistory(),//哈希模式
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path:'/login1',
            component:Login1
        }
    ]
});

//暴露路由
export default router
```

​	3.第三步：在App.vue编写挂载位置----------这里还有一些不清楚

```
<script lang="ts">			//注意这里不能带setup，不然和export冲突
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
  // 暴露组件
  export default {
    name: 'App',//组件名
    components:{HelloWorld} //注册组件
  }
</script>

<template>
      <div class="header">
        <RouterView></RouterView>
      </div>
</template>

<style scoped>
</style>

```

#### 9.ElementUI container布局容器引入不生效问题

​	1.先在main.ts引入Element

```
// 引入Element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus);
```

​	2.在引入界面的style添加样式

```
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
```

