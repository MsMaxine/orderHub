<template>
  <div class="my-tab">
  	 <div class="vuetable-pagination ui basic segment grid">
      <vuetable-pagination-info ref="paginationInfo"
  			info-template="找到 {total} 条记录，显示 {from} 到 {to} "
  			no-data-template="没有找到记录."
      ></vuetable-pagination-info>
      <!--:css= "pagCss"-->
      <vuetable-pagination ref="pagination"
      	:on-each-side = "eachNo"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
    <!---->
    <vuetable ref="vuetable"
    	:css= "tabCss"
    	no-data-template="" 
      :api-url="apiUrl"
      :fields="fields"
      pagination-path=""
      :per-page="perPage"
      @vuetable:pagination-data="onPaginationData"
    ></vuetable>
   
  </div>
</template>

<script>

import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';

import Vue from 'vue';
import CustomActions from './CustomActions';


Vue.component('custom-actions', CustomActions);

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
      required: true
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
    }
  },
  data () {
    return {
//    fields: FieldDefs,
      perPage: 20,
      eachNo: 1, //改变页数导航显示的页面（ 2 *eachNo + 1）
      tabCss: {
      	tableClass:  'ui  selectable celled table',
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
    }
  }
}
</script>

<style scoped>
	.vuetable th {
		
	}
	
</style>