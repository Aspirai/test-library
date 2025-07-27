<template>
	<div class="todo-footer" v-show="total">
		<label>
			<input type="checkbox" :checked="isAll" @change="checkAll" />
		</label>
		<span>
			<span>已完成{{ doneTotal }}</span> / 全部{{ total }}
		</span>
		<button class="btn btn-danger" @click="clearDone" v-show="doneTotal">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	name: 'MyFooter',
	props: ['todos', 'checkAllTodo'],
	computed: {
		total() {
			return this.todos.length;
		},
		doneTotal() {
			return this.todos.reduce((pre, todo) => pre + (todo.statue ? 1 : 0), 0);
		},
		isAll() {
			return this.total > 0 && this.doneTotal === this.total;
		},
	},
	methods: {
		checkAll(e) {
			this.checkAllTodo(e.target.checked);
		},
		clearDone() {
			this.$emit('clearDone');
		},
	},
};
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	margin-top: 5px;
	position: absolute;
	right: 10px;
}
</style>
