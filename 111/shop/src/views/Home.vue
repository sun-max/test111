
<template>
  <div class="container">
    <van-nav-bar title="首页" class='nav-title'>
    <van-Icon name="search" slot="left"></van-Icon>
    <van-Icon  slot="right" @click="$router.push('/my')">{{userInfo.userName}}</van-Icon>
</van-nav-bar>
    
     <!-- 轮播图 -->
   <div class="swipe">
     <van-swipe :autoplay="2000">
        <van-swipe-item class='swipe-item' v-for="(item,index) in swipeItem" :key="index">
          <img v-lazy="item.imgSrc" alt="">
          </van-swipe-item>
     </van-swipe>
   </div> 
   <!-- 热门商品 -->
   <div class="hot">
     <p class='hot-title'>热门商品</p>
     <swiper class='hot-swiper' :options="swiperOption">
      <swiper-slide v-for="(item,index) in hotProducts" :key="index" >
        <div class="hot-swiper-content">
          <img :src="item.img" alt="">
          <div>{{item.name}}</div>
          <div>￥{{item.price}}</div>
        </div>
      </swiper-slide>
     </swiper>
   </div>
   <!-- 推荐商品 -->
   <div class="variety">
     <p>推荐商品</p>
     <ul>
       <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>

       </li>
     </ul>
   </div>
   </div>
</template>

  

<script>
import {mapState} from 'vuex';
 import 'swiper/dist/css/swiper.css'
 import URL from '@/service.config.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
import axios from 'axios';

export default {
  data(){
    return{
      swipeItem:[
       {
         name:'img1',
         imgSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3079779011,446861036&fm=15&gp=0.jpg'
       },
       {
         name:'img2',
         imgSrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3316207984,923581241&fm=26&gp=0.jpg'
       },{
         name:'img3',
         imgSrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1995956332,2521633715&fm=15&gp=0.jpg'
       }
      ],
      hotProducts:[
                {
            "name": "  畜牧固定秸秆打包机 加菌料青储打捆包膜机",
            "img": "http://img49.nongjx.com/2/20180505/636611241104211752847_198_170_5.png",
            "price": "15600",
            "company": "曲阜洪升机械有限公司",
            "city": "济宁市"
        },
        {
            "name": "  菲马克FIMAKS青贮机",
            "img": "http://img58.nongjx.com/2/20140530/635370579445169017353_198_170_5.jpg",
            "price": "面议",
            "company": "中机华联机电科技（北京",
            "city": "北京市"
        },
        {
            "name": "  摘毛豆去荚机厂家 田间柴油带动毛豆脱荚机",
            "img": "http://img47.nongjx.com/2/20180629/636658591249324294459_198_170_5.jpg",
            "price": "9800",
            "company": "曲阜市润众机械制造有限",
            "city": "曲阜市"
        },
        {
            "name": "  多功能韭菜收割机 玉米青储机 多用割晒机",
            "img": "http://img48.nongjx.com/2/20180927/636736616039290776714_198_170_5.jpg",
            "price": "3160",
            "company": "曲阜浩发机械有限公司",
            "city": "济宁市"
        },
        {
            "name": "  菜园小型除草机 四冲汽油割灌机",
            "img": "http://img48.nongjx.com/2/20180920/636730488779461000136_198_170_5.jpg",
            "price": "920",
            "company": "曲阜润丰机械有限公司",
            "city": "济宁市"
        },
        {
            "name": "  优质秸秆打捆机厂家",
            "img": "http://img47.nongjx.com/2/20180606/636639161243538140545_198_170_5.jpg",
            "price": "面议",
            "company": "乐陵春益农牧机械有限公",
            "city": "德州市"
        }
      ],
      swiperOption:{
        slidesPerView:3
      },
      varietyItem:[
       /*  {
            "name": "  畜牧固定秸秆打包机 加菌料青储打捆包膜机",
            "img": "http://img49.nongjx.com/2/20180505/636611241104211752847_198_170_5.png",
            "price": "15600",
            "company": "曲阜洪升机械有限公司",
            "city": "济宁市"
        },
        {
            "name": "  菲马克FIMAKS青贮机",
            "img": "http://img58.nongjx.com/2/20140530/635370579445169017353_198_170_5.jpg",
            "price": "面议",
            "company": "中机华联机电科技（北京",
            "city": "北京市"
        },
        {
            "name": "  摘毛豆去荚机厂家 田间柴油带动毛豆脱荚机",
            "img": "http://img47.nongjx.com/2/20180629/636658591249324294459_198_170_5.jpg",
            "price": "9800",
            "company": "曲阜市润众机械制造有限",
            "city": "曲阜市"
        },
        {
            "name": "  多功能韭菜收割机 玉米青储机 多用割晒机",
            "img": "http://img48.nongjx.com/2/20180927/636736616039290776714_198_170_5.jpg",
            "price": "3160",
            "company": "曲阜浩发机械有限公司",
            "city": "济宁市"
        },
        {
            "name": "  菜园小型除草机 四冲汽油割灌机",
            "img": "http://img48.nongjx.com/2/20180920/636730488779461000136_198_170_5.jpg",
            "price": "920",
            "company": "曲阜润丰机械有限公司",
            "city": "济宁市"
        },
        {
            "name": "  优质秸秆打捆机厂家",
            "img": "http://img47.nongjx.com/2/20180606/636639161243538140545_198_170_5.jpg",
            "price": "面议",
            "company": "乐陵春益农牧机械有限公",
            "city": "德州市"
        }*/
      ]
    };
  },
  components:{
    swiper,
    swiperSlide
  },
  created()
  {
    // let url1="http://www.wichuang.com/getUser";
    var url2=URL.getVarietyItem;
    axios.get(url2).then((res)=>{
     this.varietyItem = res.data;
    })
  },
  computed:{
    ...mapState(['userInfo'])
  }
}

</script>
<style lang="scss">
.container{
  background: #eeeeee
}
.nav-title{
  position:fixed;
  top:0;
  left: 0;
  width:100%;
  z-index: 999 !important;
}
.swipe{
  margin-top:1rem;
  height:3rem;
  &-item{
    img{
    width:100%;
    height:3rem;
    }
  }
}
.hot{
  background: white;
  margin-top:0.2rem;
  &-title{
    width:100%;
    height:0.5rem;
    padding-left:0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
 &-swiper{
   &-content{
     width:2rem;
     text-align: center;
     img{
       width:2rem;
       height:2rem;
     }
   }
 }
  
}
//热门shangpin
.variety{
  margin-top:0.2rem;
  background-color: #fff;
  text-align: center;
  margin-top:1rem;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item{
    flex-basis:45%;
  }
  img{
    width:2rem;
    height:2rem;
  }
}
</style>