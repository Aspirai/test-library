import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  // 设计改变全局变量的方法可以写在一起,通过调用全局变量方法来改变,便于后期维护
  increment() {
    this.count++
  },
})
