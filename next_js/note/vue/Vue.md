#### 1.Vue实现路由跳转

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

#### 2. ReferenceError: ref is not defined报错

原因：在setup里直接使用ref需要引入

```
    import { ref } from 'vue'
```

#### 3.setup中调用自定义函数问题解决

```
<script setup>
  function add(){
    console.log('1');
  }
  //暴露给模板
  defineExpose({
    add
  })
</script>
<template>
  <button @click='add'></button>
</template>
```

#### 4.为按钮添加切换状态

```
var cut = false
    function cut1(state){
        if (state == false){
            add();
            cut = true;
        }else{
            cancel();
            cut = false;
        }
    }
   
   
<button class="select" @click="cut1(cut);">
    全选
</button>
```

#### 5.Vue3中函数读取另一个域中数据的问题

```
<script setup lang="ts">
import { ref } from 'vue';

// 第一个函数
const data1 = ref('Hello');

// 第二个函数，读取第一个函数的数据
const readData = () => {
    console.log(data1.value); // 通过data1.value访问第一个函数的数据
};
</script>
```

#### 6.对于v-for读取item.id问题

item.id若不是从数据库中取出，则本身并不携带id值

#### 7.对于读取另一个函数域中数组问题

```
//直接读取定义函数名
//输出
RefImpl {__v_isShallow: false, dep: Map(1), __v_isRef: true, _rawValue: Array(3), _value: Proxy(Array)}

//读取函数内数组
函数._value
```

#### 8.Vue2组件封装问题

```
//子组件
<template>
  <div>
    <!-- 组件的模板部分 -->
    <button @click="increaseCount">{{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0 // 组件的数据
    };
  },
  methods: {
    increaseCount() {
      this.count++; // 组件的方法
    }
  }
};
</script>

<style scoped>
/* 组件的样式 */
button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>

```

```
//父组件
<template>
  <div>
    <h1>使用计数器组件</h1>
    <!-- 导入并注册 Counter 组件 -->
    <Counter />
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'; // 导入 Counter 组件

export default {
  components: {
    Counter // 注册 Counter 组件
  }
};
</script>

<style>
/* 可选的样式 */
</style>

```

#### 9.vue3组件封装问题

```
//组件
<!-- Counter.vue -->
<template>
  <div>
    <button @click="increment">Click to Increment: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 使用 ref 创建响应式状态
const count = ref(0);

// 定义增加计数值的方法
const increment = () => {
  count.value++;
};
</script>
```

```
//调用
<!-- App.vue -->
<template>
  <div>
    <h1>Parent Component</h1>
    <!-- 引入并使用计数器组件 -->
    <Counter />
  </div>
</template>

<script setup>
import Counter from './Counter.vue'; // 引入计数器组件
</script>
```

#### 10.使用Dialog在Vue页面中显示vue组件及其实现

​	1.在Script标签（setup）内引入组件

```
    import Counter from './student_management_pop.vue'
```

​	2.在template中装载位置使用Dialog并在标签内插入组件

​		参考：https://element-plus.org/zh-CN/component/dialog.html#dialog-%E5%AF%B9%E8%AF%9D%E6%A1%86	

```
       <el-dialog
            v-model="dialogVisible"
            width="730"
        >
        
        <Counter/>//这是组件
        
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </div>
        </template>
        </el-dialog>
```

#### 11.左右滚动实现

````
#### 

```
<template>
  <div id="scroll-container" ref="scrollContainer">
    <div id="scroll-content" ref="scrollContent">
      <!-- Your scroll content here -->
      <p>Scrollable Content</p>
    </div>
  </div>
  <button @click="scrollLeft">Scroll Left</button>
  <button @click="scrollRight">Scroll Right</button>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null);
const scrollContent = ref(null);

function scrollLeft() {
  scrollContainer.value.scrollLeft -= 100; // Adjust the scrolling amount as needed
}

function scrollRight() {
  scrollContainer.value.scrollLeft += 100; // Adjust the scrolling amount as needed
}
</script>

<style scoped>
#scroll-container {
  width: 300px; /* Adjust container width as needed */
  height: 200px; /* Adjust container height as needed */
  overflow-x: scroll;
  border: 1px solid #ccc;
  white-space: nowrap; /* Ensures content doesn't wrap */
}

#scroll-content {
  display: inline-block;
}
</style>

```


````

