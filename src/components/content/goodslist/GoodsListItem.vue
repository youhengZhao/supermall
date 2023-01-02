<template>
  <div class="goodslistitem">
        <img :src="goodslistitem.show.img">
        <div class="goods-info">
            <p>{{ goodslistitem.title }}</p>
            <span class="price"> {{ goodslistitem.price }}</span>
            <span class="collect">{{ goodslistitem.cfav }}</span>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        goodslistitem: {
            type: Object,
            default() {
                return {}
            }
    }
   }
}
</script>

<style scoped>

.goodslistitem{
    padding-bottom:1.0667rem;
    position: relative;
    width: 48%;
}

.goodslistitem img{
    height: 7.2rem;
    width: 100%;
    border-radius: .1333rem;
    margin-bottom: 0.08rem;
}

.goods-info {
    font-size: .32rem;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

.goods-info p{
    text-overflow:ellipsis;
    overflow:hidden; 
    white-space:nowrap; 
   font-size: .4267rem;
}

.goods-info .price {
    color: var(--color-high-text);
    margin-right: .5333rem;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -0.4rem;
    top: -0.0267rem;
    width: .3733rem;
    height: .3733rem;
    background: url("@/assets/img/common/collect.svg") 0 0/.3733rem .3733rem;
  }
</style>