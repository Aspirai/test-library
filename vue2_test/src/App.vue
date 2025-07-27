<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<MyHeader :addTodo="addTodo" />
			<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
			<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" @clearDone="clearDone" />
		</div>
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
		addTodo(todoObj) {
			this.todos.unshift(todoObj);
		},
		checkTodo(id) {
			this.todos.forEach(todo => {
				if (todo.id === id) {
					todo.statue = !todo.statue;
				}
			});
		},
		deleteTodo(id) {
			this.todos = this.todos.filter(todo => todo.id !== id);
		},
		checkAllTodo(done) {
			this.todos.forEach(todo => {
				todo.statue = done;
			});
		},
		clearDone() {
			this.todos = this.todos.filter(todo => !todo.statue);
		},
	},
	computed: {
		isAll() {
			return this.todos.length > 0 && this.todos.every(todo => todo.statue === true);
		},
		doneTotal() {
			return this.todos.reduce((pre, todo) => pre + (todo.statue ? 1 : 0), 0);
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
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0 auto;
}

.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>
