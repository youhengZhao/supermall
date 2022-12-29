import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入淘宝自适应
import './assets/js/flexible'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
