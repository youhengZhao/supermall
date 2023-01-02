<template>
  <div class='swiper-main'>
		<swiper :options="swiperOption" v-if="swiperList.length > 1" >
		  <swiper-slide 
			v-for='(item,index) in swiperList' 
			:key='index'
		   >
			<a :href="item.link"><img :src="item.image"></a>
            {{item}}
		  </swiper-slide>
		</swiper>
		<div class="swiper-pagination"></div> 
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'Swiper',
    data() {
        return {
            swiperOption: {//swiper3
			autoplay: true,
			speed: 500,
			pagination: {
				el: '.swiper-pagination'
			},
			loop: true,   //循环播放
		}
        }
    },
    props: {
        swiperList: Array,
    },
    components: {
        swiper,
        swiperSlide
   }
}
</script>

<style scoped>
.swiper-main{
	position: relative;
	width: 100%;
	height: 4.4rem;
}
.swiper-container{
	width: 100%;
	height: 4.4rem;
}
.swiper-main img{
	width: 100%;
	height: 4.4rem;
}
.swiper-pagination{
	width: 100%;
	bottom:0px;
}
::v-deep .swiper-pagination-bullet-active{
	background-color: #b0352f;
}
::v-deep .swiper-pagination-bullet{
	margin:0 0.08rem;
}
</style>