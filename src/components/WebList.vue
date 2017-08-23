<template>
	<div>
		<h3 slot="header">网站列表信息</h3>  <!--写在orderList这个父组件更好些吧，涉及到子组件给父组件传递msg-->
		<!--搜索框-->
		<div class="searchbox" >
			<ul class="clearfix">
				<li>
					<label for="">网站名称</label>
					<input type="text" placeholder="请输入网站名称" />
				</li>
			</ul>
		</div>
		<!--table-->
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
		    <!--:load-on-start="false" -->
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
		      
		    ></vuetable>
		</div>	
	</div>
</template>

<script>
	import Vuetable from 'vuetable-2/src/components/Vuetable';
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
//	import Search from './Search';
	import WebListFieldDefs from './WebListFieldDefs.js'; //fieldDefs
	
	export default {
        name: 'WebList' ,
		components: {
//		    Search,
			Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo
		},
        data() {
        	return {
        		apiUrl: 'https://vuetable.ratiw.net/api/users',
        		fields: WebListFieldDefs,
        		loading: false,
        		perPage: 40,
      			onEachSide: 1, 
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
//				console.log('webList-loading....');//应用开启后，这个就会加载
			},
			onLoaded() {
				this.loading = false;
//				console.log('webList-loaded!');
			},
			onPaginationData (paginationData) {
			    this.$refs.pagination.setPaginationData(paginationData);
			    this.$refs.paginationInfo.setPaginationData(paginationData);
		    },
		    onChangePage (page) {
		    	this.$refs.vuetable.changePage(page);
		    },
			onRowClicked(data,field, event){
				console.log('点击了weblist');
				this.$emit('isSwitch');
			},
			
		},
		created() {
			
		}

	}
</script>

<style scoped>
	.searchbox {
		padding: 10px 18px;
    	border-bottom: 1px solid #e7eaec;
    	box-sizing: border-box;
    	width: 100%;
	}
	.clearfix {
		zoom: 1; 
	}
	.clearfix:before, .clearfix:after{
		content: ""; 
		display: block; 
		height: 0; 
		clear: both; 
		visibility: hidden; 
	}
	
	.searchbox li {
		float: left;
		line-height: 28px;
		margin-right: 30px;
	}
	
	.searchbox label {
    	padding-right: 10px;
    	
	}
	.searchbox input{
		margin-right: 15px;
		background-color: #F4F6F9;
		border: 1px solid #e9e9e9;
		height: 28px;
		width: 100px;
		box-sizing: border-box;
		padding: 0 4px;
	}

	.searchbox  input:focus{
		border-color: #54abd9;
		transition-duration: 0.5s;
	}
	/* Loading Animation: */
	.vuetable-wrapper {
	    position: relative;
	    opacity: 1;
	}
	/*loader样式*/
	.loader {
	    width: 200px;
	    height: 50px;
	    font-size: 1em;
	    text-align: center;
	    color: #ddd;
	    position: absolute;
	    top: 50px;
	    left: 50%;
	    margin-left: -100px;
	    border: 1px solid #ddd;
	    padding: 4px 20px;
    	background: #fff;
	}

</style>