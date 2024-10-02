#### 1.element修改级联选择器输入框高度问题

```
::v-deep(.el-cascader .el-input__wrapper){
    border-radius: 20px;
    width: 40px;
}
```

#### 2.设置element表格样式问题

​	1.尝试设置表格，脑袋好热，下次再试

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



#### 5.取消表格边框显示

```
border-collapse: collapse;//table设置
```

