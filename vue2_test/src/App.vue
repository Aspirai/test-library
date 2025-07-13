<template>
	<div>
		<MyHeader :addTodo="addTodo" />
		<MyList :todos="todos" :statue="changeStatue" />
		<MyFooter />
	</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

export default {
	name: 'App',
	data() {
		return {
			todos: [
				{ id: '001', title: '音乐', statue: true },
				{ id: '002', title: '动漫', statue: true },
				{ id: '003', title: '阅读', statue: false },
				{ id: '004', title: '学习', statue: true },
			],
		};
	},
	methods: {
		addTodo(e) {
			this.todos.unshift(e);
		},
		changeStatue(e) {
			this.todos[e].statue = !this.todos[e].statue;
		},
	},
	components: {
		MyHeader,
		MyList,
		MyFooter,
	},
};
</script>

<style scoped>
.title {
	color: red;
}
</style>
