<template>
    <div class="photo-box">
        <img v-for="(photo,index) in photoData" :key="index" :src="photo.src" @click="goDetail(index)" alt="" >
    </div>
</template>

<script>
    import axios from 'axios';
     import {mapMutations} from 'vuex';
    export default {
        data(){
            return {
                photoData:[]
            }
        },
        created(){
            axios.get('./data/photodata.json')
            .then((res)=>{
                this.photoData = res.data.photoData;
                this.addPhotoList(res.data.photoData);
            })
        },
        methods:{
            ...mapMutations(['addPhotoList']),
            goDetail(index){
                // 路由跳转 将当前显示的图片的索引传到photoDetail页
                this.$router.push({
                    path:'/photo/photo-detail/',
                    query:{index}
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .photo-box{
        overflow: hidden;
        img{
            float: left;
            width:50%;
        }
    }
</style>