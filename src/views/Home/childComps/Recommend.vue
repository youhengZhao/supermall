<template>
  <div class="recommend">
    <div v-for="(item,index) in recommendList" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div class="title">{{ item.title }}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        recommendList:{
            type: Array,
            default() {
                return[]
        }
      }
   }
}
</script>

<style scoped>
.recommend{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2667rem .2667rem .8rem .2667rem;
    background-color: #fff;
    border-bottom:.2133rem solid #eee ;
}

.recommend img{
    width: 2.1333rem;
    height:2.1333rem;
}

.title{
    margin-top: .16rem;
    font-size: .3733rem;
    text-align: center;
}
</style>