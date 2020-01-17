import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/css/reset.css';
import '@/assets/js/rem.js';
import '@/mock/mock.js';
//vant完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
//vant按需引入
import { NavBar,Icon, Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload ,Tab, Tabs, Field,CellGroup,Button,Toast } from 'vant';

Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)
.use(Lazyload).use(Tab).use(Tabs).use(Field).use(CellGroup).use(Button).use(Toast );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
