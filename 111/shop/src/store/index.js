import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      userName:'未登录'
    }
  },
  getters:{

  },
  mutations: {//不可处理异步，修改state值
    changeLogin(state,status){
        state.userInfo = status;
    }
  },
  actions: {//可包括异步操作
    loginAction({commit},user){
      commit('changeLogin',user);
    }
  },
  modules: {
  }
})
