<!--
  简单的瀑布流示例 - 适合小白使用
-->
<template>
  <div class="waterfall-demo">
    <h1>我的瀑布流页面</h1>

    <!-- 瀑布流容器 -->
    <Waterfall
      :list="imageList"
      :gutter="10"
      :width="200"
      :breakpoints="breakpoints"
      @afterRender="onRenderComplete"
    >
      <!-- 每个卡片的模板 -->
      <template #default="{ item, url, index }">
        <div class="card">
          <!-- 懒加载图片 -->
          <LazyImg :url="url" :alt="item.title" @success="onImageSuccess" @error="onImageError" />
          <!-- 卡片内容 -->
          <!-- <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="card-footer">
              <span class="price">¥{{ item.price }}</span>
              <button @click="handleLike(item)" class="like-btn">
                {{ item.liked ? '❤️' : '🤍' }}
              </button>
            </div>
          </div> -->
        </div>
      </template>
    </Waterfall>

    <!-- 加载更多按钮 -->
    <div class="load-more">
      <button @click="loadMore" :disabled="loading">
        {{ loading ? '加载中...' : '加载更多' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// 导入瀑布流组件
import { Waterfall, LazyImg } from 'vue-waterfall-plugin-next'
// 导入样式
import 'vue-waterfall-plugin-next/dist/style.css'

// 响应式数据
const imageList = ref([])
const loading = ref(false)

// 断点配置 - 不同屏幕宽度显示不同列数
const breakpoints = {
  1200: { rowPerView: 4 }, // 大屏显示4列
  800: { rowPerView: 3 }, // 中屏显示3列
  500: { rowPerView: 2 }, // 小屏显示2列
  300: { rowPerView: 1 }, // 手机显示1列
}

// 模拟数据
const mockData = [
  {
    id: 1,
    title: '美丽的风景',
    description: '这是一张美丽的风景照片',
    price: 99,
    liked: false,
    src: 'https://picsum.photos/300/400?random=1',
  },
  {
    id: 2,
    title: '可爱的小猫',
    description: '一只非常可爱的小猫咪',
    price: 199,
    liked: false,
    src: 'https://picsum.photos/300/500?random=2',
  },
  {
    id: 3,
    title: '城市夜景',
    description: '繁华的城市夜景',
    price: 299,
    liked: false,
    src: 'https://picsum.photos/300/600?random=3',
  },
  {
    id: 4,
    title: '海边日落',
    description: '美丽的海边日落景色',
    price: 399,
    liked: false,
    src: 'https://picsum.photos/300/450?random=4',
  },
  {
    id: 5,
    title: '山间小屋',
    description: '宁静的山间小屋',
    price: 499,
    liked: false,
    src: 'https://picsum.photos/300/550?random=5',
  },
]

// 初始化数据
imageList.value = [...mockData]

// 加载更多数据
function loadMore() {
  loading.value = true

  // 模拟网络请求延迟
  setTimeout(() => {
    const newData = mockData.map((item, index) => ({
      ...item,
      id: Date.now() + index,
      src: `https://picsum.photos/300/${400 + Math.floor(Math.random() * 200)}?random=${Date.now() + index}`,
    }))

    imageList.value.push(...newData)
    loading.value = false
  }, 1000)
}

// 点赞功能
function handleLike(item) {
  item.liked = !item.liked
  console.log(`${item.liked ? '点赞' : '取消点赞'}: ${item.title}`)
}

// 图片加载成功
function onImageSuccess(url) {
  console.log('图片加载成功:', url)
}

// 图片加载失败
function onImageError(url) {
  console.error('图片加载失败:', url)
}

// 瀑布流渲染完成
function onRenderComplete() {
  console.log('瀑布流布局完成')
}
</script>

<style scoped>
.waterfall-demo {
  width: 90vw;
  /* height: 100%; */
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 16px;
}

.card-content p {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.4;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 16px;
}

.like-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.like-btn:hover {
  transform: scale(1.2);
}

.load-more {
  text-align: center;
  margin-top: 30px;
}

.load-more button {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

.load-more button:hover:not(:disabled) {
  background: #2980b9;
}

.load-more button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
</style>
