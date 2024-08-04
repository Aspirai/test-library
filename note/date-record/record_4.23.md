#### 1.修改选项框大小

```
#check {
    width: 20px; /* 设置宽度 */
    height: 20px; /* 设置高度 */
}
```

#### 2.设置复选框和按钮在同一水平线上

​	使用CSS中的`display`属性，并将它们设置为`inline-block`。此外，您可以使用`vertical-align`属性来垂直对齐它们。

```
#check,
.select {
    display: inline-block;
    vertical-align: middle; /* 垂直对齐方式可以根据需要进行调整 */
}
```

#### 3.设置td中图像垂直居中

```
td img{
    position: absolute;
    top: 2px;
}
td {
    position: relative;
}
```

#### 4.Vue3中函数读取另一个域中数据的问题

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

#### 5.对于v-for读取item.id问题

item.id若不是从数据库中取出，则本身并不携带id值

#### 6.对于读取另一个函数域中数组问题

```
//直接读取定义函数名
//输出
RefImpl {__v_isShallow: false, dep: Map(1), __v_isRef: true, _rawValue: Array(3), _value: Proxy(Array)}

//读取函数内数组
函数._value
```

#### 7.换行空格问题

```
&nbsp;		//不断行空格
&emsp;		//中等空格
&thinsp;	//窄空格
```

#### 8.按钮无法选中

​	1.需要设置class类；

​	2.不能直接在按钮上设置style的背景色，需要引用类名设置背景颜色

​	3.常用按钮状态设置类

```
:hover		//悬浮
:active		//点击
```

#### 9.input属性

```
文本框（Text Input）： <input type="text">
密码框（Password Input）： <input type="password">
日期选择框（Date Input）： <input type="date">
时间选择框（Time Input）： <input type="time">
电子邮件输入框（Email Input）： <input type="email">
数字输入框（Number Input）： <input type="number">
搜索框（Search Input）： <input type="search">
文件上传框（File Input）： <input type="file">
```

#### 10.隐藏滚动条

```
//方法一:
//父组件设置overflow:hidden;
//子组件设置overflow-y:scroll;margin-ringht:-50px;pading-right:50px;

//方法二：
//设置overflow-y:scroll;scrollbar-width:none;
```

#### 11.Vue2组件封装问题

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

#### 12.vue3组件封装问题

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

#### 14.使用Dialog在Vue页面中显示vue组件及其实现

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
