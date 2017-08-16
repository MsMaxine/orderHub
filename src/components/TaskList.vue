<template>
	<div>
		<!--搜索框-->
		<search></search>
		<div class="vuetable-wrapper">    
		<!--:api-mode="false" :loadOnStart = "false" :data="localData"
	      			:data-path="data"
	      			访问本地json文件的方法../static/LocalData.json-->
	      	<div class="loader" v-if="loading">
	      		LOADING
	      		<img src="../assets/loading.gif" alt="" />
	      	</div>
	      		<!--wrapper-class="vuetable-wrapper"
	      		@vuetable:loaded="onLoaded"
	      		-->
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
		      @vuetable:load-success="onLoadSuccess"
		  
		    ></vuetable>
		</div>	
	</div>
</template>

<script>
	import MyTable from './MyTable';
	import Search from './Search';
	import TaskFieldDefs from './TaskFieldDefs.js'; //fieldDefs
	
	import Vuetable from 'vuetable-2/src/components/Vuetable';
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
	
	export default {
        name: 'TestList' ,
		components: {
		    Search,
		    Vuetable,
		    VuetablePagination,
		    VuetablePaginationInfo
			
		},
        data() {
        	return {
        		apiUrl: 'https://vuetable.ratiw.net/api/users',
        		fields: TaskFieldDefs,
        		loading: false,
        		perPage: 40,
      			onEachSide: 1, //又不起作用了
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
				console.log('loading....')
			},
			onLoadSuccess() {
				this.loading = false;
				console.log('loaded!')
			},
			onPaginationData (paginationData) {
		      this.$refs.pagination.setPaginationData(paginationData)
		      this.$refs.paginationInfo.setPaginationData(paginationData)
		    },
		    onChangePage (page) {
		      this.$refs.vuetable.changePage(page)
		    },
			onRowClicked(data,field, event){
			  console.log('333', data);
			  console.log('333 ', field);
			},
			
			
		},
	

	}
</script>

<style scoped>
	/*loading style*/
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