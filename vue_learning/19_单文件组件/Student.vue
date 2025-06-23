<template>
	<div>
		<h2>学生姓名:{{ name }}</h2>
		<h2>学生年龄:{{ age }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: 'Kaleus',
			age: 14,
		};
	},
	methods: {
		showName() {
			alert(this.name);
		},
	},
};
</script>

<style></style>
