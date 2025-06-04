import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 添加element引入
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(router)
// 挂载element
app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
