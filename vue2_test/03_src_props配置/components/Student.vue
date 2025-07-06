<template>
	<div>
		<h2>学生姓名:{{ name }}</h2>
		<h2>学生年龄:{{ ageOne }}</h2>
		<button @click="addAge()">修改年龄</button>
	</div>
</template>

<script>
export default {
	name: 'Student-A',
	data() {
		return {
			ageOne: this.age,
		};
	},
	methods: {
		showName() {
			alert(this.name);
		},
		addAge() {
			this.ageOne++;
		},
	},
	// 只接收
	// props: ['name', 'age'],

	// 限制类型
	// props: {
	// 	name: String,
	// 	age: Number,
	// },

	// 限制类型、限制必要性、指定默认值
	props: {
		name: {
			type: String,
			required: true,
			default: 'Kaleus',
		},
		age: {
			type: Number,
			required: true,
		},
	},
};
</script>

<style></style>
