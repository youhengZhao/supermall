<template>
  <div class="home">
    <Navbar class="navbar"><div slot="center">购物街</div></Navbar>
     <Scroll class="content" ref="scroll" 
                             :probe-type="3" 
                             @scroll="currentScroll"
                             :pull-up-load="true"
                             @pullingUp="LoadMore"
                             >
      <Swiper :swiperList="banners"></Swiper>
      <Recommend :recommendList="recommends"></Recommend>
      <FeatureView></FeatureView>
      <TabControl class="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
     </Scroll>
     <BackTop @click.native="backClick"  v-show="isshow"></BackTop>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue'
import Swiper from '@/components/common/swiper/Swiper.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goodslist/GoodsList.vue'
import FeatureView from './childComps/FeatureView.vue'
import Recommend from './childComps/Recommend.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'

//网络请求
import { getHomeMultidata,getGoodsdata} from '@/network/home'

export default {
  data() {
    return {
      isshow:false,
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list:[]
        },
        new: {
          page: 0,
          list:[]
        },
        sell: {
          page: 0,
          list:[]
        }
      },
      currentType:'pop'
    }
  },
  components: {
    Navbar,
    Swiper,
    TabControl,
    GoodsList,
    FeatureView,
    Recommend,
    Scroll,
    BackTop
  },
  created() {
    //请求swiper数据
    this.getHomeMultidata()
    //请求展示列表的数据
    this.getGoodsdata('pop')
    this.getGoodsdata('new')
    this.getGoodsdata('sell')
  },
  mounted() {
    
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //自定义事件触底加载更多
    LoadMore() {
      //调用网络请求方法
      this.getGoodsdata(this.currentType)
      //调用scroll组件里finishPullUp方法 实现反复触底加载更多
      this.$refs.scroll.finishPullUp()
      //重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
      this.$refs.scroll.scroll.refresh()
    },
    //接受子组件传的自定义事件携带的参数
    currentScroll(onScroll) {
      if (-(onScroll.y) > 1000) {
        this.isshow=true
      } else {
        this.isshow=false
     }
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new' 
          break
        case 2:
          this.currentType = 'sell'
          break   
      }
    },
    backClick() {
      // console.log(this.$refs.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0,0)
    },

    //以下为网络请求的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res.data.data);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
    },
    getGoodsdata(type) {
      let page=this.goods[type].page+1
      getGoodsdata(type, page).then(res => {
       console.log( res.data.data);
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    }
  },
}
</script>

<style scoped>

.home{
  position: relative;
  /* margin-top: 1.1733rem; */
  height: 100vh;
}

.navbar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  font-size: .4267rem;
  background-color: var(--color-tint);
  color: #fff;
}

.tabControl{
  /* z-index: 999;
  position: sticky; */
  top: 1.1733rem;
  background-color: #fff;
}

.content{
  /* overflow: hidden;
  height: 300px; */
  position: absolute;
  top: 1.1733rem;
  bottom: 1.3067rem;
  left: 0;
  right: 0;
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
}
</style>