<template>
	<div class="bosom_one">
		<div class="nav">
			<ul class="menuList">
				<li ><a @click="login">登录</a></li>
				<!--<li ><a href="#" @click="logout" >注销</a></li>-->
			</ul>
		</div>
		<div class="header">
			<h4 class="title">订单数据回传</h4>
			<ul class="menuList">
				<li v-for="item in menuList"><a href="#" >{{item}}</a></li>
			</ul>
		</div>
		<div class="bosom_side">
			<div class="viscera">
				<search></search>
				<!--<my-vuetable class="tab"></my-vuetable>-->
				<my-table ></my-table>
			</div>
	
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	
//	import MyVuetable from './MyVuetable';
	import MyTable from './MyTable';
	import Search from './Search';
	import MyFooter from './MyFooter';
	
	export default {
		name: 'Home',
		components: {
//		    MyVuetable,
		    MyTable,
		    Search,
		    MyFooter
		},
		data() {
			return {
				menuList: ['合并打印', '下载', '回传','关闭','查询','发送', '个性化', '帮助']
			}
		},
		props: ['title'],
		methods: {
			login() {
				this.$router.push("login");
			},
			
		}
	}
</script>

<style scoped> 
	.nav {
		height: 50px;
		background: url('../assets/HeadRightImg2.jpg');
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
		font-size: 12px;
		color: #515151;
		padding: 7px 0 0 8px;
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
	.menuList li:nth-child(4){
		background-color: #fafafa;
		border: 1px solid #cdd6e1;
	}
	.menuList li a {
		text-decoration: none;
		color: #fff;
	}
	.menuList li:nth-child(4) a{
		color: #515151;
	}
	.menuList li:nth-child(4):hover{
		background-color: #e9e9e9;
    	border-color: #cdd6e1;
	}
	
	.bosom_side {
		
	}
	.bosom_side .viscera {
		margin: 10px 18px;
	    padding-bottom: 10px;
	    background: #fff;
	    border-top: 3px solid #e7eaec;
	    height: 816px;
	    overflow-y: auto;
	    /*overflow-x: hidden;*/
	   /*overflow: auto;*/
	}
	
	.tab {
		margin-top: 5px;
		vertical-align: middle;
		padding: 0 18px;
		box-sizing: border-box;
	}
</style>