<template>
	<div class="bosom_one">
		<div class="top_nav">
			<div class="nav">
				<p class="title">云订单</p>
				<ul class="menuList">
					<li ><a @click="login">登录</a></li>
					<li ><a href="#" @click="login" >注册</a></li>
				</ul>
			</div>
			<div class="header">
				<ul class="menuList">
					<li ><a href="#" >切换</a></li>
					<li ><a href="#" >打印</a></li>
					<li ><a href="#" >下载</a></li>
					<li ><a href="#" >回传</a></li>
					<li ><a href="#" >关闭</a></li>
					<li ><a href="#" >查询</a></li>
				</ul>
			</div>
		</div>
		<div class="bosom_side">
			<div class="viscera">
				<search></search>
				<!--<div class="ui right aligned seven wide column">
                        <button class="ui basic button" id="settingsBtn" @click="showSettingsModal">
                          <i class="setting icon"></i>
                          Settings
                        </button>
                 </div>-->
                 
				<!--<my-vuetable class="tab"></my-vuetable>
					http://172.18.4.23:10003/api/v1/h5/website/list/popular
					https://vuetable.ratiw.net/api/users
				-->
				<my-table 
					api-url=""
      				:fields="fields"
				></my-table>
				
				<button class="btn" @click="login">开始采集</button>
  
				<!--<settings-modal ref="settingsModal"
                    :vuetable-fields="vuetableFields"
                  ></settings-modal>-->
			</div>
	
		</div>
		<my-footer class="footer"></my-footer>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyTable from './MyTable';
	import Search from './Search';
	import MyFooter from './MyFooter';
	import FieldDefs from './FieldDefs.js'; //fieldDefs
	
	export default {
		name: 'Home',
		components: {
		    MyTable,
		    Search,
		    MyFooter
		},
		data() {
			return {
				fields: FieldDefs,
				//perPage: 30 //没起作用？上边 my-table标签加了:per-page="perPage"
			}
		},
//		props: ['title'],
		methods: {
			login() {
				this.$router.push("login");
			},
			showSettingsModal() {
				
			}
			
		},
		created(){
//			this.$cookie.set('hhh','hi')
//			console.log(this.$cookie.get('hhh'));
//			this.$http.get('http://172.18.4.23:10003/api/v1/h5/website/list/popular', ).then(res => {
//				console.log(res);
//				console.log( res.headers);
//				
//			}, res => {
//				console.log('请求失败');
//			});
		}
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
	

	.bosom_side .viscera {
		margin: 10px 18px;
	    padding-bottom: 10px;
	    background: #fff;
	    border-top: 3px solid #e7eaec;
	    height: 100%;
	    overflow-y: auto;
	    position: relative;
	}
	
	.btn{
		padding: 10px 20px;
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(0, -50%);
		background-color: #38a0f4;
		border: 1px solid #38a0f4;
		font-size: 16px;
		color: #fafafa;
	}
	
	.footer {
		position: absolute;
		bottom: 0;
		left:0;
	}
</style>