#### 1.左右滚动实现

```
<template>
  <div id="scroll-container" ref="scrollContainer">
    <div id="scroll-content" ref="scrollContent">
      <!-- Your scroll content here -->
      <p>Scrollable Content</p>
    </div>
  </div>
  <button @click="scrollLeft">Scroll Left</button>
  <button @click="scrollRight">Scroll Right</button>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null);
const scrollContent = ref(null);

function scrollLeft() {
  scrollContainer.value.scrollLeft -= 100; // Adjust the scrolling amount as needed
}

function scrollRight() {
  scrollContainer.value.scrollLeft += 100; // Adjust the scrolling amount as needed
}
</script>

<style scoped>
#scroll-container {
  width: 300px; /* Adjust container width as needed */
  height: 200px; /* Adjust container height as needed */
  overflow-x: scroll;
  border: 1px solid #ccc;
  white-space: nowrap; /* Ensures content doesn't wrap */
}

#scroll-content {
  display: inline-block;
}
</style>

```

2.只要一个人呆着，就想玩游戏--看动漫--看小说--看QQ--看🐢--然后自责

3.总是担心别人会看自己，总是担心别人羡慕自己，总是担心自己不合群

4.因为自己花费了代价所得到的东西，不是很愿意免费给别人，又担心别人会不会因此而对自己产生了小气的想法，只好对这个东西表示不好。不喜欢炫富、不喜欢直白的夸耀、总是感觉别人会害自己。察觉到自己的行为很令人不齿，又马上逃避。去一个让自己很舒服的地方。而这里往往让人怠惰。

5.我想起来为什么卸载卡拉了，因为沉迷游戏
