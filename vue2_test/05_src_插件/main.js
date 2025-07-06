import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';

// 关闭生产提示
Vue.config.productionTip = false;

// 安装插件
Vue.use(plugins, 1, 2, 3);

new Vue({
	el: '#root',
	render: h => h(App),
});
