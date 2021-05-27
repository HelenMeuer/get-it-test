import Vue from 'vue'
import app from './app.vue'
import router from './router/router'
import './assets/sass/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(app),
  router
}).$mount('#app')
