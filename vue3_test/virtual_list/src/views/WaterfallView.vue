<template>
  <div class="body">你好</div>
</template>

<script setup lang="ts">
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import { ref, onMounted } from 'vue'
import { get } from '@/utils/request'

// 定义图片数据的接口
interface ImageData {
  url: string
  width: number
  height: number
  id?: string
  author?: string
  download_url?: string
}

// 存储图片数据的响应式数组
const imgList = ref<ImageData[]>([])

// 设置瀑布流相关的参数
const colCount = ref(3) // 列数
const imgGap = ref(10) // 图片间距
const loading = ref(false) // 加载状态
const hasMore = ref(true) // 是否有更多图片可加载

// 获取图片数据的函数
const fetchImages = async (count = 1) => {
  if (loading.value || !hasMore.value) return

  loading.value = true
  try {
    // 发起请求获取图片数据
    const res = await get('api/v2/list')
    console.log(res)
    // 处理返回的数据
    if (res && Array.isArray(res)) {
      const newImages = res.map((item) => ({
        url: item.download_url || item.url,
        width: item.width,
        height: item.height,
        id: item.id,
        author: item.author,
      }))
      imgList.value = [...imgList.value, ...newImages]
    } else {
      hasMore.value = false
    }
  } catch (error) {
    console.error('Failed to fetch images:', error)
    hasMore.value = false
  } finally {
    loading.value = false
  }
  console.log('imgList is', imgList)
}

// 加载更多图片
const loadMore = () => {
  fetchImages()
}

// 组件挂载时获取初始数据
onMounted(() => {
  fetchImages(1) // 初始加载20张图片
})

defineOptions({
  name: 'WaterFallView',
})
</script>

<style>
.body {
  width: 100%;
  border: 1px solid #000;
}
</style>
