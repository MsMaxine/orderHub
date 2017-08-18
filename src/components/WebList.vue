<template>
	<div>
		<h3 slot="header">网站列表信息</h3>  <!--写在orderList这个父组件更好些吧，涉及到子组件给父组件传递msg-->
		<!--搜索框-->
		<search></search>
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

	import Search from './Search';
	import WebListFieldDefs from './WebListFieldDefs.js'; //fieldDefs
	
	export default {
        name: 'WebList' ,
		components: {
		    Search,
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
      			onEachSide: 1, //又不起作用了？
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