<template>
    <div class="tmp">

        <!--标题-->
        <header >
            <h1 class="main_title">Order Hub</h1>
        </header>

        <!--网址分类-->
         <div class="content">
             <ul>
				 <li class="content_title">选择卖场网址</li>
             </ul>
			<ul class="table-view">
		         <li class="table-view-cell"  v-for="item in params" :key="item.website.id">
                     <!--如果是需要传递参数的与news的list设计类似 
                     路由这样用需要传参：<router-link :to="'/news/detail/' + item.id + '?title=新闻详情' ">-->
                      <router-link :to="'/site/account/' + item.website.id + '?title=' + item.website.name + '&packageId=' + item.package.id "  >
                        <div class="site" > {{ item.website.name }} </div>
                      </router-link>
                </li>
		       
			</ul>
        </div>
    </div>
</template>
<script>
import Connect from '../connet.js';
export default {
    data() {
        return {
            params:[]
        }
    }, 
    created(){
        //发起http请求
        this.$http.get(this.$myConfig.host + '/api/v1/h5/website/list/popular') //挂载的时候prototype.$myConfig
            .then(res => {
                this.params = res.body.param; //此时是一个数组
                console.log(this.params);
            }, res => {
                console.log('请求失败');
            });

      //  Connect.$emit( 'getPackageId', this.params.getPackageId );
    },
   
}
</script>
<style scoped>

/*.tmp{
    background-color: #fff;
}*/
.main_title{
    height: 134px;
    line-height: 134px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

.content li{
    list-style: none;
    height: 62px;
    line-height: 62px;
    border-bottom: 1px solid #ccc;
    text-align: center;
}
.table-view a{
    text-decoration: none;
    color: #000;

}

</style>
