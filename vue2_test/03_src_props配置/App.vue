<template>
	<div>
		<!-- 属性前加':'会变为动态元素绑定,引号内内容,转为JS解析 -->
		<Student name="Kaleus" :age="18" />
	</div>
</template>

<script>
// 引入组件
import Student from './components/Student.vue';

export default {
	name: 'App',
	components: {
		Student,
	},
};
</script>

<style></style>
