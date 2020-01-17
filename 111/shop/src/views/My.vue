<template>
  <div>
    <van-tabs v-model="active">
     <van-tab title="登录">
       <van-cell-group>
         <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="logUsername"></van-field>
         <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="logPassword"></van-field>
       </van-cell-group>
       <div><van-button type="primary" size="large" @click="loginHandler">登录</van-button></div>
     </van-tab>
     <van-tab title="注册">
        <van-cell-group>
         <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="regUsername"></van-field>
         <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="regPassword"></van-field>
       </van-cell-group>
       <div><van-button type="primary" size="large" @click="registHandler">注册</van-button></div>
     </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import url from '@/service.config.js'
import axios from 'axios'
import {mapActions} from "vuex"
export default {
  data() {
    return {
      active: 2,
      logUsername:'',
      logPassword:'',
      regUsername:'',
      regPassword:''
    };
  },
  methods:{
    ...mapActions(['loginAction']),
    //注册的处理方法
    registHandler(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.regUsername,
          passWord:this.regPassword
        }
      }).then((res)=>{
        if(res.data.code == 200){
          this.$toast.success('注册成功');
          this.regUsername = this.regPassword='';
        }else{
           this.$toast.fail('注册失败');
        }
      }).catch((err)=>{
         console.log(err);
          this.$toast.fail('注册失败');
      })
    },
    //登录的处理方法
    loginHandler(){
       axios({
         url:url.loginUser,
         method:'post',
         data:{
           userName:this.logUsername,
           passWord:this.logPassword
         }
       }).then(res=>{
         console.log(res);
         new Promise((resolve) => {
           setTimeout(()=>{
             resolve();
           },1000);
         }).then(()=>{
           this.$toast.success('登录成功');
           //保存登录状态
           this.loginAction(res.data.userInfo);
           this.$router.push('/');
         }).catch((err)=>{
            this.$toast.fail('保存登录状态失败');
            console.log(err);
         });
       }).catch(err=>{
        console.log(err);
       })
    }
  }
  
}
</script>
<style lang="scss">

</style>