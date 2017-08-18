<template>
	<div class="bosom_one">
		<div class="top_nav">
			<div class="nav">
				<p class="title">云订单 </p>
				<ul class="menuList avator">
					<li ><a href="javascript:;" ><img src="../assets/avator.png" alt="" /></a></li>
					<li ><a href="javascript:;" @click="logout">注销</a></li>
				</ul>
			</div>
			<div class="header">
				<ul class="menuList">
					<li ><a href="javascript:;" @click="check">查询</a></li>
					<li ><a href="javascript:;" >下载</a></li>
					<li ><a href="javascript:;" @click="back">返回</a></li>
					
				</ul>
			</div>
		</div>
	
		<div class="bosom_side" >
			<!--订单详情列表-->
			<div class="viscera" >
			<!--搜索框-->
			<order-search ></order-search>
			<div class="vuetable-wrapper">    
		      	<div class="loader" v-if="loading">
		      		LOADING 
		      		<img src="../assets/loading.gif" alt="" />
		      	</div>
				<div class="vuetable-pagination ui basic segment grid" >
				    <vuetable-pagination-info ref="paginationInfo"
				  		info-template="找到 {total} 条记录，显示 {from} 到 {to} "
				  		no-data-template="没有找到记录."
				    ></vuetable-pagination-info>
				      <!--:css= "pagCss"-->
				    <vuetable-pagination ref="pagination"
				      	:on-each-side="onEachSide"
				        @vuetable-pagination:change-page="onChangePage"
				    ></vuetable-pagination>
			    </div>
	
			    <vuetable ref="vuetable"
			    	:css="css.tabCss"
			    	wrapper-class="vuetable-wrapper"
			        no-data-template="" 
			        :api-url="apiUrl"
			        :http-options="httpOptions"
			        :append-params="appendParams"
			        :fields="fields"
			        pagination-path=""
			        :per-page="perPage"
			        @vuetable:pagination-data="onPaginationData"
			        @vuetable:loading="onLoading"
			        @vuetable:loaded="onLoaded"

			    ></vuetable>
				</div>
		</div>
		
	</div>
	<my-footer class="footer"></my-footer>
	</div>
</template>

<script>
	import Vue from 'vue';
	import MyFooter from './MyFooter';
	
	import Vuetable from 'vuetable-2/src/components/Vuetable';
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
	import OrderSearch from './OrderDeSearch';
	import OrderDetailField from './OrderDetailField.js'; //fieldDefs
	
	export default {
		name: 'OrderDetail',
		components: {
		    MyFooter,
		    Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo,
		    OrderSearch,
		},
		data() {
			return {
				apiUrl: 'https://vuetable.ratiw.net/api/users',
        		fields: OrderDetailField,
        		loading: false,
        		perPage: 40,
      			onEachSide: 1, 
				myModal:false,
				isLog: false,
      			css: {
      				tabCss: {
				      	tableClass:  'ui selectable celled table',
				    },

      			},
      			httpOptions: {
//    				headers: {'X-Requested-With': 'XMLHttpRequest'},
//					method: 'post',
      			},
//    			appendParams:{ 
//    				id: '', 
//    			},
				filterColumn1: '',
                filterColumn2: '',

			}
		},
		computed: {
//			 apiUrl() {
//              return `/foo/bar/${this.dataSourceId}`;
//          },
            appendParams() {
                return {
                	order_code:this.filterColumn1,
  					store_code:'1235'
                }
            },
        },
		methods: {
			logout(){
				window.sessionStorage.removeItem('STORAGE_TOKEN' );
				this.$router.push("user/login");
			},
			 onLoading(){
				this.loading = true;
			},
			onLoaded() {
				this.loading = false;
			},
			onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page);//changePage在apiMode=true才起作用
		    },
		    back(){//返回按钮
		    	this.$router.go(-1);
		    },
		    check(){ //查询按钮
		    	this.$refs.vuetable.reload(); 
		    },
		  

		},
		created() {
			
			let vm = this;
//			console.log(vm, this)
//			this.$root.Bus.$on('getId', function(value) { //接受订单页传递过来的id
//				let that = this;
//				console.log('value',value);
//				that.filterColumn1 = value;
//				console.log(that.filterColumn1 ); 
////				that.$refs.vuetable.refresh();
//			});
			console.log('组件被创建');
			this.$root.Bus.$on('getId', value => { //接受订单页传递过来的id，   该事件为啥时而触发，时而不触发？？
				console.log('触发了getId'); 
				console.log('value',value);
				this.filterColumn1 = value;
				console.log(this.filterColumn1); 
				console.log(this);
//				this.$refs.vuetable.reload();
//				let vm2 = this;
//				console.log(vm === vm2); //true
//				this.$refs.vuetable==undefined因为this指向的是div.bosom_on,应该找到只包含搜索框和table的div
			});
//			axios.post(this.apiUrl,this.httpOptions).then(function(res){
//				
//			}).catch(function(err){
//				
//			});
		},
//		beforeDestroy() {
//			this.$root.Bus.$off('getId');
//		},
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
	.menuList li:nth-child(3){
		background-color: #fafafa;
		border: 1px solid #cdd6e1;
	}
	.menuList li a {
		text-decoration: none;
		color: #fff;
	}
	.menuList li:nth-child(3) a{
		color: #515151;
	}
	.menuList li:nth-child(3):hover{
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
	
	/*loader样式*/
	.vuetable-wrapper {
	    position: relative;
	    opacity: 1;
	}
	.loader {
	    /*background: url('../assets/loading.gif') no-repeat bottom center;*/
	    width: 200px;
	    height: 50px;
	    font-size: 1em;
	    text-align: center;
	    margin-left: -100px;
	    color: #ddd;
	    position: absolute;
	    top: 50px;
	    left: 50%;
	    border: 1px solid #ddd;
	    padding: 4px 20px;
    	background: #fff;
	}
	
</style>