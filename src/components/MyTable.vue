<template>
  <div class="my-tab">
  	 <div class="vuetable-pagination ui basic segment grid" >
      <vuetable-pagination-info ref="paginationInfo"
  			info-template="找到 {total} 条记录，显示 {from} 到 {to} "
  			no-data-template="没有找到记录."
      ></vuetable-pagination-info>
      <!--:css= "pagCss"-->
      <vuetable-pagination ref="pagination"
      	:on-each-side = "onEachSide"
        @vuetable-pagination:change-page="onChangePage"
       
      ></vuetable-pagination>
    </div>
    <!--:css= "css.tabCss"   
    	:load-on-start="loadOnStart"
    -->
    <vuetable ref="vuetable"
    	:css= "tabCss"
    	no-data-template="" 
      :api-url="apiUrl"
      :api-mode="apiMode"
      :fields="fields"
      pagination-path=""
      :per-page="perPage"
      :data="data"
      :load-on-start="loadOnStart"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:row-clicked="onRowClicked"
    ></vuetable>
   
  </div>
</template>

<script>

import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';

import Vue from 'vue';
// import CustomActions from './CustomActions';
// Vue.component('custom-actions', CustomActions);

export default {
	name: 'MyTable',
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
   props: {
    apiUrl: {
      type: String,
//    required: true
    },
    apiMode:{
    	type: Boolean,
    	default: true
    },
    data:{
    	type: Object,
    	default() {
        return {}
      }
    },
    dataTotal:{
    	type: Number,
    	defalut(){
    		return 0
    	}
    },
    fields: {
      type: Array,
      required: true
    },
    sortOrder: {
      type: Array,
      default() {
        return []
      }
    },
    appendParams: {
      type: Object,
      default() {
        return {}
      }
    },
    detailRowComponent: {
      type: String
    },
    loadOnStart:{
    	type: Boolean,
    	default: true
    }
  },
  data () {
    return {
//    fields: FieldDefs,
			msg: '',
      perPage: 40,
      onEachSide: 1, 
      tabCss: {
      	tableClass:  'ui selectable celled table',
      	tableWrapper: "center",  //啥作用？
			  loadingClass: 'loading',//background:url("../asset/loading.gif")
			  ascendingIcon: 'blue chevron up icon',
			  descendingIcon: 'blue chevron down icon',
			  detailRowClass: 'vuetable-detail-row',
			  handleIcon: 'grey sidebar icon',
      },
      pagCss: {
      	wrapperClass: 'ui left floated pagination menu',
			  activeClass: 'active large',
			  disabledClass: 'disabled',
			  pageClass: 'item',
			  linkClass: 'icon item',
			  paginationClass: 'ui bottom attached segment grid',
			  paginationInfoClass: 'left floated left aligned two wide column',
			  dropdownClass: 'ui search dropdown',
			  icons: {
			    first: 'angle double left icon',
			    prev: 'left chevron icon',
			    next: 'right chevron icon',
			    last: 'angle double right icon',
			  }
			}
		 }
  },
  methods: {
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber (value) {
      return accounting.formatNumber(value, 2)
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      return (value == null)
        ? ''
        : moment(value, 'YYYY-MM-DD').format(fmt)
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
  	onRowClicked(data,field, event){
		  console.log('clicked: ', data);
		  console.log('clicked: ', field);
		},
			
  },
  crreated() {
  
  }
}
</script>

<style scoped>
	.vuetable th {
		
	}
	
</style>