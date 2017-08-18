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
				<!-- :load-on-start="loadOnStart"-->
		    <vuetable ref="vuetable"
		    	:css="css.tabCss"
		    	wrapper-class="vuetable-wrapper"
		        no-data-template="" 
		        :api-url="apiUrl"
		        :fields="fields"
		        pagination-path=""
		        :per-page="perPage"
		        @vuetable:pagination-data="onPaginationData"
		        @vuetable:row-dblclicked="onRowClicked"
		        @vuetable:cell-clicked="onCellClicked"
		        @vuetable:loading="onLoading"
		        @vuetable:loaded="onLoaded"
		  	    :load-on-start="false"
		    ></vuetable>
		</div>	
		<!--采集按钮-->
		<button class="btn" @click="showModal" v-if="loadOnStart" v-show="!Next">开始采集</button>
				
		<!--  模态框-->
		<modal-child :msg="myModal" >=-
			<div slot="body">
				<!--网站列表 -->
				<web-list @isSwitch="isSwitch" v-show="!isNext"></web-list>
				<!--登录页面-->
				<web-login v-show="isNext" @close="close"></web-login>
			</div>
			
			<div slot="footer">
				<!--v-show="!isNext"-->
				<button class="modal_btn" @click="closeModal" >关闭</button><!--将myModal的值传给绑定的属性msg--><!--close监听子组件触发的事件-->
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
	import WebLogin from './WebLogin';
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
			WebLogin
		},
//		props:['loadOnStart'],
        data() {
        	return {
        		apiUrl: 'https://vuetable.ratiw.net/api/users',
        		fields: OrderFieldDefs,
        		isLog: false,
				loadOnStart: false,
        		loading: false,
        		perPage: 40,
      			onEachSide: 1, //又不起作用了
				myModal:false,
      			css: {
      				tabCss: {
				      	tableClass:  'ui selectable celled table',
				    },
      			},
      			isNext: false,
        	}
        },
		methods: {
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
			onRowClicked(data,field, event){ //点击每行触发的事件
//				console.log('111', data);
//				console.log('111 ', field);
				console.log('111 ', data.id);
				
				this.$root.Bus.$emit('getId', data.id);//与订单详情通信（兄弟组件），把id传递给订单详情组件
				
			    this.$router.push('order/' + data.id);
				
			},
			onCellClicked(data,field,event){  //点击某列触发
				console.log('cellClick ', field);
				console.log('cellClick ', field.title);
				if( field.title == "订单编号") {
					console.log('No.',this);
				}else{
					return false;
				}
			},
			showModal() {
		        this.myModal = !this.myModal;
		    },
		    closeModal() {//定义close的事件函数
		        this.myModal = false;
		    },
		    isSwitch() {
		    	this.isNext = !this.isNext;
		    },
		    close() {  //模态框里点击开始采集按钮，关闭模态框同时切换到任务列表
		    	this.myModal = false;
		        this.$emit('QH'); //触发父组件中的切换按钮事件
		    }
		  
		},
//		watch: {
//			isNext:{
//				handler(v){
//					console.log('watch--isNext',v);//isNext == true
//				}
//			}
//		},
		created () {

			if( window.sessionStorage.getItem('STORAGE_TOKEN') ){
				this.loadOnStart = true;
				this.$on('isSwitch');
				this.$on('close');
			}
			
			
			let that = this;
			let apiUrl = that.apiUrl;

			axios.get(apiUrl).then(function(res) {
//				that.loading = false;
				that.localData = res.data;
				that.dataCount = res.data.total;
//			    console.log(res.data);
//			    console.log(that.dataCount);
			  
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
	    top: 50px;
	    left: 50%;
	    border: 1px solid #ddd;
	    padding: 4px 20px;
    	background: #fff;
	}
</style>