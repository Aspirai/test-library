<template>
	<div>
		<h2>学生姓名:{{ name | mySlice }}</h2>
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

<style></style>
