<template>
  <div class="goodslist">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodslistitem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
    props: {
        goods: {
            type: Array,
            default() {
            return {}
        }
     }
    },
    components: {
        GoodsListItem
  }
}
</script>

<style scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>