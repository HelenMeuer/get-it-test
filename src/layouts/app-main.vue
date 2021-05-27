<template>
  <main class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main>
</template>

<script>
export default {
  name: 'app-main',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.main {
  height: 100%;
}
</style>