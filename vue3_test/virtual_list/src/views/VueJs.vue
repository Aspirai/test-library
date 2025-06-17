<template>
  <div>
    <!-- <div>你好，{{ count }}</div>
    <button @click="count++">点击</button>
    <div>{{ read }}</div>
    <button @click="read++">点击</button>
    <component :is="ElementDateView" /> -->
    <!-- 高级列表组件示例 -->
    <FancyList api="" :per-page="10">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p class="meta">by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </FancyList>
    <FancyList api="" :per-page="10"
      ><template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p class="meta">by {{ username }} | {{ likes }}</p>
        </div>
      </template>
    </FancyList>
    <!-- 鼠标移动监听和封装 -->
    <MouseTracker v-slot="{ x, y }">
      <div>Mouse is at:{{ x }},{{ y }}</div>
    </MouseTracker>
    <MouseTracker>
      <template #default="{ x, y }">
        <div>Mouse is at:{{ x }},{{ y }}</div>
      </template>
    </MouseTracker>
    <!-- 共同状态管理 -->
    <div>{{ store.count }}</div>
    <button @click="store.increment()">点击</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ElementDateView from './ElementDateView.vue'
import FancyList from '@/components/FancyList.vue'
import MouseTracker from '@/components/MouseTracker.vue'
import { store } from './store'

const count = ref(0)
const read = computed(() => count.value + 1)
</script>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
