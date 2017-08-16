<template>
	<div>
		<!--搜索框-->
		<search></search>
		<!--表格orderFields
			:load-on-start=false表示初始不加载表格数据-->
		<div class="vuetable-wrapper">    
			<!--:api-mode="false"  :data="localData"
	      	:data-path="data"   访问本地json文件的方法../static/LocalData.json-->
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
		        :fields="fields"
		        pagination-path=""
		        :per-page="perPage"
		        @vuetable:pagination-data="onPaginationData"
		        @vuetable:row-clicked="onRowClicked"
		        @vuetable:loading="onLoading"
		        @vuetable:loaded="onLoaded"
		  	    :load-on-start="loadOnStart"
		    ></vuetable>
		</div>	
		<!--采集按钮-->
		<button class="btn" @click="showModal" v-if="false">开始采集</button>
				
		<!--  模态框-->
		<modal-child :msg="myModal" @close="closeModal">
			<!--<h3 slot="header">网站列表信息</h3>-->
			<div slot="body">
				<!--网站列表 -->
				<web-list ></web-list>
				<!--登录页面-->
				<login v-if="false"></login>
				
			</div>
			<div slot="footer">
				<button class="modal_btn" @click="closeModal">关闭</button><!--将myModal的值传给绑定的属性msg--><!--close监听子组件触发的事件-->
			</div>
		</modal-child>
				
	</div>
</template>

<script>
	import Vuetable from 'vuetable-2/src/components/Vuetable';
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
	import Search from './Search';
	import OrderFieldDefs from './OrderFieldDefs.js'; //fieldDefs
	import ModalChild from './ModalChild'; //模态框组件
	import WebList from './WebList';
	import Login from './Login';
	import axios from 'axios';
	
	export default {
        name: 'OrderList' ,
		components: {
		 	Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo,
		    Search,
			ModalChild,
			WebList,
			Login
			
		},
//		props:['loadOnStart'],
        data() {
        	return {
        		apiUrl: 'https://vuetable.ratiw.net/api/users',
        		fields: OrderFieldDefs,
        		loading: false,
        		perPage: 40,
      			onEachSide: 1, //又不起作用了
				myModal:false,
				isLog: false,
				loadOnStart: false,
      			css: {
      				tabCss: {
				      	tableClass:  'ui selectable celled table',
				    },

      			}
        	}
        
        },
		methods: {
		    onLoading(){
				this.loading = true;
				console.log('loading....');
			},
			onLoaded() {
				this.loading = false;
//				console.log('loaded!');
			},
			onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      console.log(page);
		      this.$refs.vuetable.changePage(page);//changePage在apiMode=true才起作用
		      
		    },
			onRowClicked(data,field, event){
			  console.log('111', data);
			  console.log('111 ', field);
			},
			showModal() {
		        this.myModal = !this.myModal;
		    },
		    closeModal() {//定义close的事件函数
//		    	this.$on('close');
		        this.myModal = false;
		    },
		},
		created () {
			
			
			if( window.sessionStorage.getItem('STORAGE_TOKEN') ){
				this.loadOnStart = true;
			}
			let that = this;
			let apiUrl = that.apiUrl;
			console.log('api',apiUrl)
			axios.get(apiUrl).then(function(res) {
				that.loading = false;
				that.localData = res.data;
				that.dataCount = res.data.total;
			    console.log(res.data);
			    console.log(that.dataCount);
			  
			}).catch(function(error){
				console.log(error);
			});
		},

	}
</script>

<style scoped>
	/*采集按钮*/
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
	/*模态框样式*/
	.modal_btn {
		background-color: #38a0f4;
		border: 1px solid #38a0f4;
		color: #fff;
	}
	
	.vuetable-wrapper {
	    position: relative;
	    opacity: 1;
	}
	/*loader样式*/
	.loader {
	    /*background: url('../assets/loading.gif') no-repeat bottom center;*/
	    width: 200px;
	    height: 50px;
	    font-size: 1em;
	    text-align: center;
	    margin-left: -100px;
	    /*letter-spacing: 4px;*/  
	    color: #ddd;
	    position: absolute;
	    top: 160px;
	    left: 50%;
	    border: 1px solid #ddd;
	    padding: 4px 20px;
    	background: #fff;
	}
</style>