<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
//引入滚动插件
import BetterScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default:0
        },
        pullUpLoad: {
            type: Boolean,
            default:false
        }
    },
    components: {
        BetterScroll
    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll.scrollTo(x,y,time)  
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        }
    },
    mounted() {
        this.scroll= new BetterScroll(this.$refs.wrapper, {
                click: true,
                pullUpLoad: this.pullUpLoad,
                probeType:this.probeType
        })
        //监听滚动事件
        this.scroll.on('scroll', (onScroll) => {
            //绑定自定义事件 将监听的实时滚动位置传给父组件
            this.$emit('scroll',onScroll)
        })

        //监听触底加载更多
        this.scroll.on('pullingUp', () => {
            //绑定触底事件
            this.$emit('pullingUp')
        })
    //     this.$nextTick(() => {
    //         const bs = new BetterScroll(this.$refs.wrapper, {
    //             click: true,
    //             pullUpLoad: true
    //     }) 
    //         bs.on('pullingUp', () => {
    //         console.log('触底了');
    //         bs.finishPullDown()
    //       })
    //    })
    },
}
</script>

<style scoped>
 /* .wrapper {
  position: fixed;
  top: 1.1733rem;
  bottom: 1.3067rem;
  left: 0;
  right: 0;
  overflow: hidden;
}  */
</style>