// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';

import App from './App';
import router from './router';
//import axios from 'axios';//全局引入没有起作用？


//引入自己的css
import '../static/css/global.css';
import '../static/css/animate.css';//引入animate.css库

//安装插件
//Vue.use(VueResource);
Vue.use(VueCookie);


Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
