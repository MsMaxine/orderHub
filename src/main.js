// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';

import App from './App';
import router from './router';
//import axios from 'axios';//全局引入没有起作用？
//Vue.prototype.$axios = axios;  全局绑定
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题

//import VModal from 'vue-js-modal';

import '../static/css/animate.css';//引入animate.css库
//引入自己的css
import '../static/css/global.css';


//安装插件
//Vue.use(VueResource);
Vue.use(VueCookie);
Vue.use(ElementUI);

//Vue.use(VModal);


Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
  	Bus: new Vue(),  //用于非父子组件通信的空vue实例
  }
});
