<template>
	<div class="demo">
		<h2 class="title">学生姓名:{{ name }}</h2>
		<h2>学生年龄:{{ age }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student-A',
	data() {
		return {
			name: 'Kaleus',
			age: '18',
		};
	},
};
</script>

<style scoped>
.demo{
	background-color: aquamarine;
}
</style>
