<template>
   <router-link to='/photo'> <v-touch  v-on:swipeleft="next()"  class="photo-detail" v-if='show' :style="{'background-image':'url('+$store.state.photoList[index].src+')'}" >
       
    </v-touch></router-link>
</template>

<script>
     import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
         data(){
            return {
                index:this.$route.query.index,
               show:false
            }
        }, beforeMount(){
            if(this.$store.state.photoList.length == 0){
                this.gophoto();
            }else{
                this.show = true;
            }
        },
        methods:{
            gophoto(){
                this.$router.push('/photo');
                
            },
            next(){
                this.index++;
                if(this.index == this.$store.state.photoList.length){
                    this.index = 0;
                }
            }
           
        }

    }
</script>

<style lang="scss" scoped>
    .photo-detail{
        background: #000 url("http://localhost:8080/img/photo/1.jpg") no-repeat center center;
        background-size:contain;
        // width:100%;
        // height:100%;
        position: absolute;
        left:0px;
        top:1rem;
        right:0px;
        bottom:1rem;


    }
</style>