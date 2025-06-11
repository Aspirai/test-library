<!--
  原始宽高比瀑布流示例 - 图片按原本尺寸比例显示
-->
<template>
  <div class="original-ratio-demo">
    <h1>🖼️ 原始宽高比瀑布流展示</h1>

    <div class="demo-controls">
      <button @click="switchMode('original')" :class="{ active: mode === 'original' }">
        原始宽高比
      </button>
      <button @click="switchMode('limited')" :class="{ active: mode === 'limited' }">
        限制宽高比
      </button>
      <button @click="switchMode('fixed')" :class="{ active: mode === 'fixed' }">固定宽高比</button>
    </div>

    <p class="mode-description">
      <span v-if="mode === 'original'">
        📏 当前模式：<strong>原始宽高比</strong> - 图片按照原本的宽高比例显示，保持真实比例
      </span>
      <span v-else-if="mode === 'limited'">
        📐 当前模式：<strong>限制宽高比</strong> - 图片宽高比被限制在合理范围内（0.5-2.0）
      </span>
      <span v-else>
        📦 当前模式：<strong>固定宽高比</strong> - 所有图片都使用相同的宽高比（1:1）
      </span>
    </p>

    <!-- 瀑布流容器 -->
    <Waterfall
      :list="imageList"
      :gutter="15"
      :width="250"
      :breakpoints="breakpoints"
      :load-props="currentLoadProps"
      :lazyload="true"
      :animation-effect="'animate__fadeInUp'"
      @afterRender="onRenderComplete"
    >
      <!-- 每个卡片的模板 -->
      <template #default="{ item, url, index }">
        <!-- <div class="image-card"> -->
          <!-- 懒加载图片 -->
          <!-- <div class="image-container"> -->
            <LazyImg :url="url" :alt="item.title" @success="onImageSuccess" @error="onImageError" />
            <!-- 图片信息标签 -->
            <!-- <div class="image-info">
              <span class="dimensions">{{ item.width }}×{{ item.height }}</span>
              <span class="ratio">{{ item.aspectRatio }}</span>
            </div>
          </div> -->
          <!-- 卡片内容 -->
          <!-- <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <div class="meta-info">
              <span class="category">{{ item.category }}</span>
              <span class="size">{{ item.fileSize }}</span>
            </div>
          </div> -->
        <!-- </div> -->
      </template>
    </Waterfall>

    <!-- 加载更多按钮 -->
    <div class="load-more">
      <button @click="loadMore" :disabled="loading">
        {{ loading ? '加载中...' : '加载更多图片' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Waterfall, LazyImg } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

// 响应式数据
const imageList = ref([])
const loading = ref(false)
const mode = ref('original') // 'original', 'limited', 'fixed'

// 断点配置
const breakpoints = {
  1400: { rowPerView: 5 },
  1100: { rowPerView: 4 },
  800: { rowPerView: 3 },
  500: { rowPerView: 2 },
  300: { rowPerView: 1 },
}

// 根据模式计算懒加载配置
const currentLoadProps = computed(() => {
  const baseConfig = {
    loading:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij7liqDovb3kuK08L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNiYmIiPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
    error:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmNWY1IiBzdHJva2U9IiNmZmNjY2MiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTc0YzNjIj7liqDovb3lpLHotKU8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNjYzc4NzgiPkVycm9yPC90ZXh0Pjwvc3ZnPg==',
  }

  if (mode.value === 'original') {
    // 原始宽高比模式 - 完全保持图片原始比例
    return {
      ...baseConfig,
      ratioCalculator: (width, height) => {
        return height / width // 直接返回原始宽高比
      },
    }
  } else if (mode.value === 'limited') {
    // 限制宽高比模式 - 在合理范围内保持比例
    return {
      ...baseConfig,
      ratioCalculator: (width, height) => {
        const originalRatio = height / width
        // 限制在 0.5 到 2.0 之间（宽度是高度的0.5倍到2倍）
        return Math.min(Math.max(originalRatio, 0.5), 2.0)
      },
    }
  } else {
    // 固定宽高比模式 - 所有图片使用相同比例
    return {
      ...baseConfig,
      ratioCalculator: (width, height) => {
        return 1 // 固定 1:1 比例
      },
    }
  }
})

// 模拟不同尺寸的图片数据
const generateImageData = (count = 15) => {
  const categories = ['风景', '人物', '建筑', '动物', '美食', '艺术']
  const titles = ['美丽的', '壮观的', '精致的', '可爱的', '神秘的', '优雅的', '震撼的', '温馨的']
  const subjects = ['日落', '山峰', '海滩', '森林', '城市', '花朵', '动物', '建筑']

  // 不同的图片尺寸，模拟真实场景中的各种宽高比
  const imageSizes = [
    { width: 400, height: 600, ratio: '2:3' }, // 竖图
    { width: 600, height: 400, ratio: '3:2' }, // 横图
    { width: 500, height: 500, ratio: '1:1' }, // 方图
    { width: 800, height: 400, ratio: '2:1' }, // 超宽图
    { width: 400, height: 800, ratio: '1:2' }, // 超高图
    { width: 600, height: 450, ratio: '4:3' }, // 标准横图
    { width: 450, height: 600, ratio: '3:4' }, // 标准竖图
    { width: 700, height: 350, ratio: '2:1' }, // 宽屏
    { width: 350, height: 700, ratio: '1:2' }, // 长条
    { width: 550, height: 400, ratio: '11:8' }, // 特殊比例
  ]

  return Array.from({ length: count }, (_, index) => {
    const size = imageSizes[index % imageSizes.length]
    const title = titles[Math.floor(Math.random() * titles.length)]
    const subject = subjects[Math.floor(Math.random() * subjects.length)]
    const category = categories[Math.floor(Math.random() * categories.length)]

    return {
      id: Date.now() + index,
      title: `${title}${subject}`,
      description: `这是一张${size.ratio}比例的${category}照片，展示了${subject}的美丽景象。`,
      category,
      width: size.width,
      height: size.height,
      aspectRatio: size.ratio,
      fileSize: `${Math.floor(Math.random() * 500 + 100)}KB`,
      src: `https://picsum.photos/${size.width}/${size.height}?random=${Date.now() + index}`,
    }
  })
}

// 初始化数据
imageList.value = generateImageData(15)

// 切换显示模式
function switchMode(newMode) {
  mode.value = newMode
  console.log(`切换到${newMode}模式`)
}

// 加载更多数据
function loadMore() {
  loading.value = true

  setTimeout(() => {
    const newData = generateImageData(10)
    imageList.value.push(...newData)
    loading.value = false
  }, 1000)
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
.original-ratio-demo {
  border: 1px solid #000;
  width: 90vw;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 28px;
}

.demo-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.demo-controls button {
  padding: 10px 20px;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.demo-controls button:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
}

.demo-controls button.active {
  background: #3498db;
  color: white;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.mode-description {
  text-align: center;
  margin-bottom: 30px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  color: #555;
  font-size: 16px;
}

.mode-description strong {
  color: #2c3e50;
}

.image-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.image-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-info {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dimensions,
.ratio {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}

.ratio {
  background: rgba(52, 152, 219, 0.8);
}

.card-content {
  padding: 16px;
}

.card-content h3 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
}

.description {
  margin: 0 0 12px 0;
  color: #7f8c8d;
  font-size: 14px;
  line-height: 1.4;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category {
  background: #e8f5e8;
  color: #27ae60;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.size {
  color: #95a5a6;
  font-size: 12px;
}

.load-more {
  text-align: center;
  margin-top: 40px;
}

.load-more button {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.load-more button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.load-more button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .original-ratio-demo {
    padding: 15px;
  }

  h1 {
    font-size: 24px;
  }

  .demo-controls {
    flex-direction: column;
    align-items: center;
  }

  .demo-controls button {
    width: 200px;
  }

  .mode-description {
    font-size: 14px;
    padding: 12px;
  }
}
</style>
