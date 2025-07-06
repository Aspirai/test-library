export default {
	// 传入x,y,z
	install(Vue, x, y, z) {
		console.log('我调用啦', Vue, x, y, z);

		// 全局过滤器注册
		Vue.filter('mySlice', function (value) {
			return value.slice(0, 4);
		});

		// 定义全局指令
		Vue.directive('fbind', {
			bind(element, binding) {
				element.value = binding.value;
			},
			// 指令所在元素被插入页面时
			inserted(element) {
				element.focus();
			},
			// 指令所在的模板被重新解析时
			update(element, binding) {
				element.value = binding.value;
			},
		});

		// 定义混入
		Vue.mixin({
			data() {
				return {
					x: 1,
					y: 2,
				};
			},
		});

		// 给Vue原型上添加一个方法
		Vue.prototype.hello = () => alert('你好啊');
	},
};
