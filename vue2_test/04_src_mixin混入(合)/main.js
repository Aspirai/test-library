import Vue from 'vue';
import App from './App.vue';
import { showName, mixinData } from './mixin';
// 分别挂载
Vue.mixin(showName);
Vue.mixin(mixinData);
// 关闭生产提示
Vue.config.productionTip = false;

new Vue({
	el: '#root',
	render: h => h(App),
});
