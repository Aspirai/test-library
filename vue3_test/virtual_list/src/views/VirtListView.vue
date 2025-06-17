<template>
  <div class="main">
    <div style="padding: 10px 0">
      <span>Total: {{ list.length }} </span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span>RenderBegin: {{ reactiveData.renderBegin }} </span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span>RenderEnd: {{ reactiveData.renderEnd }} </span>
    </div>

    <!-- demo -->
    <div class="demo-infinity" style="width: 100%; height: 500px" v-show="visible">
      <VirtList
        ref="virtListRef"
        :list="list"
        itemKey="id"
        :minSize="60"
        :buffer="5"
        @toBottom="toBottom"
        @scroll="onScroll"
      >
        <template #default="{ itemData, index }">
          <div class="list-item">
            <div class="item-content" style="display: flex; flex-direction: column">
              <div class="item-id">#{{ itemData.id }}</div>
              <div>
                <div class="item-title">{{ itemData.title }}</div>
                <div class="item-title">{{ itemData }}</div>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div v-if="loading" class="loading-footer">加载中...</div>
          <div v-else-if="noMore" class="no-more-footer">没有更多数据了</div>
        </template>
      </VirtList>
    </div>
    <div>{{ store.count }}</div>
  </div>
</template>

<script lang="ts">
import { VirtList } from 'vue-virt-list'
// 非setup语法导入时,需要将store填入到`data()`中
import { store } from './store'

export default {
  name: 'DemoInfinity',
  components: {
    VirtList,
  },
  data() {
    return {
      visible: true,
      loading: false,
      noMore: false,
      list: [],
      reactiveData: {
        renderBegin: 0,
        renderEnd: 0,
      },
      page: 0,
      pageSize: 30,
      store,
    }
  },
  async created() {
    await this.generateInitialData()
    console.log(this.list)
  },
  mounted() {
    this.reactiveData = (this.$refs.virtListRef as any).reactiveData
  },
  methods: {
    generateInitialData() {
      // 模拟初始加载数据
      this.loading = true
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          const data = Array(50)
            .fill(0)
            .map((_, index) => ({
              id: index + 1,
              title: `Item ${index + 1} - ${this.getRandomText()}`,
              content: `This is the content for item ${index + 1}`,
            }))
          this.list = data
          this.loading = false
          this.page = 1
          resolve()
        }, 500)
      })
    },

    async toBottom() {
      if (this.loading || this.noMore) return

      this.loading = true
      console.log('加载更多数据...')

      // 模拟加载更多数据
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          const startId = this.list.length + 1
          const newItems = Array(30)
            .fill(0)
            .map((_, index) => ({
              id: startId + index,
              title: `Item ${startId + index} - ${this.getRandomText()}`,
              content: `This is the content for item ${startId + index}`,
            }))

          this.list = [...this.list, ...newItems]
          this.loading = false
          this.page++

          // 模拟数据加载完毕
          if (this.list.length >= 200) {
            this.noMore = true
          }

          resolve()
        }, 800)
      })
    },

    onScroll(event) {
      // 可以处理滚动事件
      // console.log('scrolling', event)
    },

    getRandomText() {
      const texts = [
        'Vue virtual list',
        'High performance',
        'Smooth scrolling',
        'Memory efficient',
        'Dynamic heights',
        'Lazy loading',
      ]
      return texts[Math.floor(Math.random() * texts.length)]
    },
  },
}
</script>

<style lang="scss" scoped>
.demo-infinity {
  background-color: var(--vp-sidebar-bg-color);
  border: 1px solid var(--vp-c-border);
  overflow: hidden;
}

.list-item {
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}

.item-content {
  width: 100%;
}

.item-id {
  font-weight: bold;
  margin-bottom: 5px;
}

.item-title {
  color: #666;
}

.loading-footer {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.no-more-footer {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #999;
}
</style>
