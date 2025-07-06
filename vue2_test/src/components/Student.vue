<template>
	<div>
		<h2>学生姓名:{{ name }}</h2>
		<h2>学生年龄:{{ age }}</h2>
		<input type="text" v-fbind:value="name" />
		{{ x }}
		<button @click="test">点我测试hello方法</button>
	</div>
</template>

<script>
export default {
	name: 'Student-A',
	data() {
		return {
			name: 'Kaleus',
			age: '14',
		};
	},
	methods: {
		test() {
			this.hello();
		},
	},
};
</script>

<style></style>
