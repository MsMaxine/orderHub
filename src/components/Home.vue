<template>
	<div class="bosom_one">
		<div class="top_nav">
			<div class="nav">
				<p class="title">云订单</p>
				<ul class="menuList" v-show="!isLog">
					<li ><a href="javascript:;" @click="login">登录</a></li>
					<li ><a href="javascript:;"  @click="login">注册</a></li>
				</ul>
				<ul class="menuList avator" v-show="isLog">
					<li ><a href="javascript:;" ><img src="../assets/avator.png" alt="" /></a></li>
					<li ><a href="javascript:;" @click="logout">注销</a></li>
				</ul>
			</div>
			<div class="header">
				<ul class="menuList">
					<li ><a href="javascript:;" @click="changeTab">{{changeTxt}}</a></li>
					<li ><a href="javascript:;" >打印</a></li>
					<li ><a href="javascript:;" >下载</a></li>
					<li ><a href="javascript:;" >回传</a></li>
					<li ><a href="javascript:;" >关闭</a></li>
					<li ><a href="javascript:;" @click="check">查询</a></li>
				</ul>
			</div>
		</div>
		<!--二级路由-->
		<!--<router-view> </router-view>-->  
		
		<div class="bosom_side" >
			<!--订单列表-->
			<div class="viscera" v-if="isChange">
				<order-list :loadOnStart="loadOnStart" @QH="changeTab"></order-list>
			</div>
			
			<!--任务列表-->
			<!--api-url="https://vuetable.ratiw.net/api/users" v-show="!isChange" -->
			<div class="viscera" v-if="!isChange">
				<task-list></task-list>
			</div>
			
		</div>
		<my-footer class="footer"></my-footer>
	</div>
</template>

<script>
	import Vue from 'vue';
	import MyFooter from './MyFooter';
	import OrderList from './OrderList';
	import TaskList from './TaskList';
	
	export default {
		name: 'Home',
		components: {
		    MyFooter,
		    OrderList,
		    TaskList,
		},
		data() {
			return {
				isChange: true,
				isLog: false,//初始化登录状态为未登录
				loading: true,
				changeTxt: '进入任务列表',
				loadOnStart:false,
			}
		},
//		props: ['title'],
		methods: {
			login() {
				this.$router.push("user/login");
			},
			logout(){
				window.sessionStorage.removeItem('STORAGE_TOKEN' );
				this.$router.push("user/login");
			},
			changeTab() {
				this.isChange = !this.isChange;
				this.changeTxt = this.isChange ? '进入任务列表 ':'进入数据列表 ';
				
				
			},
			//模态框事件
			showModal() {
		        this.myModal = !this.myModal;
		    },
		    closeModal() {//定义close的事件函数
		        this.myModal = false;
		    },
		    //查询按钮点击,没起作用
		    check() {
		    	this.loadOnStart = true;

		    }
		},
		created() {
			if( window.sessionStorage.getItem('STORAGE_TOKEN') ) {
				this.isLog = true;
				this.$on('QH');//触发切换按钮事件
			}
			
		},
	
	}
	
</script>

<style scoped> 
	.bosom_one {
		height: 100%;
		box-sizing: border-box;
		padding-top: 100px;
		padding-bottom: 36px;
	}
	.bosom_side {
		height: 100%;
		padding: 12px 0;
	}
	.top_nav{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.nav {
		height: 50px;
		background: url('../assets/HeadRightImg2.jpg') no-repeat right center;
		background-color: #fff;
		border-bottom: 1px solid rgba(122,122,122,0.125);
	}
	.nav .menuList {
		margin-top: 10px;
        margin-right: 20px;
	}

	.nav .menuList li {
		margin-left: 10px;
	}
	.header {
		background: #fff;
	    padding: 10px;
	    height: 48px;
	    box-sizing: border-box;
	    box-shadow: 0 2px 2px rgba(122,122,122,0.125);
	    position: relative;
		
	}
	.title {
		float: left;
		color: #d82b0a;
		height: 50px;
		line-height: 50px;
		font-size: 2em;
		font-weight: 500;
		margin-left: 40px;
	}
	.menuList {
		float: right;
	}
	.menuList li {
		list-style: none;
		float: left;
		background-color: #38a0f4;
		margin-right: 4px;
		padding:5px 10px ;
		font-size: 12px;
		border: 1px solid #38a0f4;
	}
	.menuList li:hover{
		background-color: #1690f3;
    	border-color: #1690f3;
	}
	.menuList li:nth-child(5){
		background-color: #fafafa;
		border: 1px solid #cdd6e1;
	}
	.menuList li a {
		text-decoration: none;
		color: #fff;
	}
	.menuList li:nth-child(5) a{
		color: #515151;
	}
	.menuList li:nth-child(5):hover{
		background-color: #e9e9e9;
    	border-color: #cdd6e1;
	}
	
	/*头像部分*/
		
	.nav .avator{
		margin-top: 2px;
	}
	.nav .avator li:nth-child(2){
		margin-top: 10px;
	}
	.nav .avator img{
		width: 32px;
    	height: 32px;
    	vertical-align: middle;
    	border-radius: 16px;
	}
	
	.nav .avator li:nth-child(1) {
		background: none;
		border:0 none;
		margin-top: 3px;
	}
	
	/*头像部分结束*/
	
	.bosom_side .viscera {
		margin: 10px 18px;
	     padding: 0 20px;
	    background: #fff;
	    border-top: 3px solid #e7eaec;
	    height: 100%;
	    overflow-y: auto;
	    position: relative;
	}

	.footer {
		position: absolute;
		bottom: 0;
		left:0;
	}
</style>