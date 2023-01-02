<template>
  <div id="app">
    <router-view></router-view>
    <MineTabbarVue></MineTabbarVue>
  </div>
</template>
<script>
 import MineTabbarVue from './components/content/mineTabbar/MineTabbar.vue';
  export default {
  name: 'App',
  components: {
    MineTabbarVue
  }
}
</script>
<style scoped>
@import'./assets/css/common.css';
@import './assets/css/iconfont.css'
</style>
