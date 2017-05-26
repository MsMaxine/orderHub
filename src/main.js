import Vue from 'vue';
//引入mintUi和Mui-> css
import MintUi from 'mint-ui';
//引入mintUi的css
import 'mint-ui/lib/style.css';
//路由插件
import VueRouter from 'vue-router';
//引入vue-resource插件
import VueResource from 'vue-resource';
//引入自己的插件
import MyPluginConfig from './myPlugin.js';


//引入自己的css
import '../static/css/global.css';

import App from './app.vue';
//引入主页组件
import Home from './components/home/home.vue';
//引入登录组件
import Login from './components/order/login.vue';
//引入获取订单组件
import GetOrder from './components/order/getorder.vue';
//引入订单详情组件
import Details from './components/order/details.vue';



//安装router插件
Vue.use(VueRouter);
Vue.use(VueResource); //此时有this.$http
//安装我们自己的插件挂载config属性
Vue.use(MyPluginConfig);

//构建对象配置路由规则
let router = new VueRouter();
router.addRoutes([
    { path: '/', component: Home, },
    { path: '/site/account/:websiteId', component: Login, },//登录组件
    { path: '/account/getOrder/:accountId/', component: GetOrder, },//获取订单组件
    { path: '/account/orderDetails', component: Details, },//订单链接组件

]);

new Vue({
    el: '#app',
    router, //注意，容易忘记，还不报错
    render: c => c(App),
})
