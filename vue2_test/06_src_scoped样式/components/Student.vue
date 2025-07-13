<template>
	<div class="demo">
		<h2 class="title que">学生姓名:{{ name }}</h2>
		<h2>学生年龄:{{ age }}</h2>
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
};
</script>

<style scoped lang="less">
.demo {
	background-color: blue;
	.que {
		font-size: 40px;
	}
}
</style>
