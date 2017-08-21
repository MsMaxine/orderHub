import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Register from '@/components/Register';
import OrderDetail from '@/components/OrderDetail';

Vue.use(Router);

export default new Router({
    routes: [
    	{
            path: '/',
            name: 'Home',
            component: Home,
            //children: [
//              {path: '', name: 'Login', component: Login }
            //]
        },
        {
            path: '/user/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/user/register',
            name: 'Register',
            component: Register
        },
        {
        	path: '/order/:id',
        	name: 'OrderDetail',
        	component: OrderDetail,
        }
    ]
})