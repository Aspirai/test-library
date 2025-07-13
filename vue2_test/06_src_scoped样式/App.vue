<template>
	<div>
		<h1 class="title">你好啊</h1>
		<Student />
		<StudentTow />
	</div>
</template>

<script>
// 引入组件
import Student from './components/Student.vue';
import StudentTow from './components/StudentTow.vue';

export default {
	name: 'App',
	components: {
		Student,
		StudentTow,
	},
};
</script>

<style scoped>
.title {
	color: red;
}
</style>
