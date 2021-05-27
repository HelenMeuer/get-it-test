<template>
  <div class="home">
    <v-card-list></v-card-list>
  </div>
</template>

<script>
import cardList from './components/card-list/card-list'

export default {
  name: 'home',
  components: {
    vCardList: cardList
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 $padding;
}
</style>