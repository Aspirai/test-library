<template>
	<div>
		<h2>学校地址:{{ address }}</h2>
		<h2>学校名称:{{ name }}</h2>
		<button @click="showName">提示</button>
	</div>
</template>

<script>
export default {
	name: 'School-A',
	data() {
		return {
			name: 'B站',
			address: '上海',
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
