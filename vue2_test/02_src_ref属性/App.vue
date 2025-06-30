<template>
	<div>
		<h1 ref="title">你好</h1>
		<h1 v-text="msg"></h1>
		<button @click="showDOM" ref="but">点我输出上方的DOM元素</button>
		<School ref="sch" />
		<Student />
	</div>
</template>

<script>
// 引入组件
import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
	name: 'App',
	components: {
		School,
		Student,
	},
	data() {
		return {
			msg: '欢迎学习Vue!',
		};
	},
	methods: {
		showDOM() {
			// 获取DOM元素
			// console.log(document.getElementById('title'));
			console.log(this.$refs.title); // 真实DOM元素
			console.log(this.$refs.but); // 真实DOM元素
			console.log(this.$refs.sch); // School组件的实例对象
		},
	},
};
</script>

<style></style>
