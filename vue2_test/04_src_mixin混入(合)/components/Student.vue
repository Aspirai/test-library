<template>
	<div>
		<h2 @click="showName">学生姓名:{{ name }}</h2>
		<h2>学生年龄:{{ age }}</h2>
		<h2>{{ x }}</h2>
	</div>
</template>

<script>
// import { showName, mixinData } from '@/mixin';

export default {
	name: 'Student-A',
	data() {
		return {
			name: 'Kaleus',
			age: '14',
			x: 10,
		};
	},
	// mixins: [showName, mixinData],
	mounted () {
		console.log('Hello World');
	}
};
</script>

<style></style>
