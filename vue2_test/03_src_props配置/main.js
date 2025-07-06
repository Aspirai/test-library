import Vue from 'vue';
import App from './App.vue';
// 关闭生产提示
Vue.config.productionTip = false;

new Vue({
	el: '#root',
	render: h => h(App),
});
