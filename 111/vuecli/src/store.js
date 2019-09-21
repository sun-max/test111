import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 存储状态
  state: {
    count:0,
    num:2
  }, 
 //修改状态
  mutations: {
    add(state,num){
      state.count += num;

    },
    reduce(state){
      state.count--;
    }
  },
  //计算属性
  getters:{
 sum(state){
   return state.count*state.num;
 }
  },
  actions: {

  },
});
