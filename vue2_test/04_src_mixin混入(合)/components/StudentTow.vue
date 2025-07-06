<template>
	<div>
		<h2 @click="showName">学生姓名:{{ name }}</h2>
		<h2>学生年龄:{{ age }}</h2>
		<h2>{{ x }}</h2>
	</div>
</template>

<script>
// import { mixinData,showName } from '@/mixin';
export default {
	name: 'Student-A',
	data() {
		return {
			name: 'Kaleus',
			age: '18',
		};
	},
	// mixins: [showName, mixinData],
};
</script>

<style></style>
