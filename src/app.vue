<template>
  <div id="app" class="app">
    <v-app-main></v-app-main>
  </div>
</template>

<script>
import appMain from './layouts/app-main';

export default {
  name: 'app',
  components: {
    vAppMain: appMain
  }
}
</script>

<style lang="scss">
.app {
  height: 100%;
}
</style>
