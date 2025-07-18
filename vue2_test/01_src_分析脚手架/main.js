import Vue from 'vue/dist/vue.runtime.esm.js';
import App from './App.vue';

Vue.config.productionTip = false;

/*
	关于不同版本的Vue：

		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

new Vue({
	el: '#app',
	render: h => h(App),
	// template: `<App></App>`,
	// template: `<h1>你好</h1>`,

	// 属性定义应当使用`:`
	// render: h => h('h1', `你好`),
	// console.log( typeof h )
	// components: {
	// 	App,
	// },
});
