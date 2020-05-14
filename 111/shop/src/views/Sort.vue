<template>
  <div>
    <van-nav-bar title='商品类型'></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
         <ul>
           <li v-for="(item,index) in types" :key="index" :class="{active:active==index}" @click="selectCategory(item.typeId,index)">
             {{item.typeName}}
           </li>
         </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class='content' @load="onLoad" :finished="finished" v-model="isLoading">
            <div class='content-item' v-for="(item,index) in productList" :key='index'>
              <img :src="item.img" alt="">
            <p class='content-item-name'>{{item.name}}</p>
            <p>￥{{item.price}}</p>
            </div>
          </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import URL from '@/service.config.js';
import axios from 'axios';
export default {
  data(){
    return {
      types:[],//存类型信息
      active:0,
      productList:[],
      typeId:1 ,//当前选中类型的Id,
      start:0,
      limit:10,
      finished:false,//是否加载完数据
      isLoading:false//上拉加载
    }
     
  },
  created(){
    axios({
      url:URL.getTypes
    }).then(res=>{
      console.log(res);
      this.types = res.data;
      this.selectCategory(this.typeId,this.active);
    }).catch((err)=>{
         console.log(err);
    })
  },
  methods:{
   selectCategory(typeId,index){
          this.active=index;
          this.typeId = typeId;
          this.getProductList();
          this.productList=[];
          this.finished= false;
   },
   getProductList(){
     this.isLoading = true;
     axios({
       url:URL.getProductsType,
       method:'get',
       params:{
         typeId:this.typeId,
         start:this.productList.length,
         limit:this.limit
       }
     }).then((res)=>{
       console.log(res);
       if(res.data.length != 0){ 
         this.productList=this.productList.concat(res.data);
       }else{
         this.finished=true;
       }
      this.isLoading = false;
     }).catch((err)=>{
      console.log(err);
     })
   },
   onLoad(){
     setTimeout(()=>{
         this.getProductList();
     },2000);
   
   },
   onRefresh(){
     setTimeout(()=>{
        this.productList=[];
        this.getProductList();
     },2000);
    
   }
  }
}
</script>
<style lang="scss">
.nav{
  background: #eeeeee;
  li{
    height:0.6rem;
    line-height:0.6rem;
    border:1px solid #ffffff;
    padding:3px;
    text-align: center;
  }
  .active{
    background: #ffffff;
  }
}
.container{
  position:fixed;
  top:46px;
  bottom:1rem;
  right:0;
  overflow-y: scroll;


}
.content{
  display:flex;
  padding-bottom:1rem;
  flex-wrap:wrap;
  &-item{
    width: 40%;
    padding:0 10px;
    text-align: center;
    img{
      width:2rem;
      height:2rem;
    }
    &-name{
      display:-webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>