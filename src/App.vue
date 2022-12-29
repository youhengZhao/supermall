<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home" isColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" isColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/shopcart" isColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" isColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
  import Tabbar from './components/tabbar/Tabbar.vue'
  import TabbarItem from './components/tabbar/TabbarItem.vue'
  export default {
    name:'App',
    components: {
      Tabbar,
      TabbarItem
    }
}
</script>
<style scoped>
@import'./assets/css/common.css';
@import './assets/css/iconfont.css'
</style>
