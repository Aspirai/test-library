<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="root">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->

        <nav>
          <!-- <RouterLink to="/">Home</RouterLink> -->
          <!-- <RouterLink to="/about">About</RouterLink> -->
          <RouterLink to="/">Test Page</RouterLink>
          <RouterLink to="/dateTimePicker">Picker Page</RouterLink>
          <RouterLink to="/waterfall">Waterfall Page</RouterLink>
        </nav>
      </div>
      <RouterView />
    </header>
  </div>
</template>

<style scoped>
.root {
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
header {
  line-height: 1.5;
  max-height: 100%;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  nav {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
