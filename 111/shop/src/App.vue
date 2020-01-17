<template>
  <div id="app">
   <router-view></router-view>
   <van-tabbar v-model="active" class="footer-bar">
  <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="records" to="/sort">分类</van-tabbar-item>
  <van-tabbar-item icon="cart"  to="/cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact"  to="/my">我的</van-tabbar-item>
</van-tabbar>
   
  </div>
</template>
<script>
export default {
  data(){
    return{
       active:0
       
    }
   
  }
}
</script>
<style lang="scss">

.footer-bar{
 
  position:fixed;//固定定位，会脱离文档流,设置相应的宽度
   bottom: 0;
   left:0;
   width:100%;
   
}
</style>
