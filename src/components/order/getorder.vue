<template>
    <div class="tmp">
        <header class="nav">
			<div class="title">获取订单中，请稍后</div>
		</header>
       <div class="content">
           <a href="javascript:;" id="fail_tip" @click="goBack">采集失败</a>
       </div>
    </div>
</template>
<script>

import {Indicator} from 'mint-ui';

export default {
    data() {
        return {
            projectName: 'OrderHub',
            loginName: ''
        }
    }, 
    created() {

        //显示加载中图标
        Indicator.open({
            spinnerType: 'fading-circle',
         });
         this.loginName = this.$route.query.loginName;
         let accountId = this.$route.params.accountId,
             packageId = this.$route.query.packageId;

         //发送请求    
         this.$http.post(this.$myConfig.host + '/api/v1/h5/job', {
            packageId: packageId,
            accountId: accountId,
            projectName: this.projectName,
            tag:'yh',
            }, { emulateJSON: true}
        ).then(res => {
           //成功的回调
           let jobId = res.body.param.id;
           console.log(jobId);
           let timer = setInterval( () => {

                this.$http.get(this.$myConfig.host + '/api/v1/h5/task?jobId=' + jobId 
                ).then( res => {
                    //console.log(res);
                    //当状态code 为0 时需要跳转到订单链接的页面，同时关闭加载中图示
                    if( res.body.code == 0 ){
                     
                        switch (res.body.param.status) {
                            case 'INITIATED': 
                                //如果initiated,就不跳转也页面
                                break;
                            case 'FINISHED': 
                                //如果FINISHED,就跳转页面，同时关闭加载中图示
                                Indicator.close();
                                this.$router.push('/account/orderDetails?loginName=' + this.loginName );
                                clearInterval(timer);
                                break;
                            default:
                                //如果不是以上两种情况，就跳转页面，同时关闭加载中图示
                                Indicator.close();
                                document.getElementById('fail_tip').style.display ="block";
                                clearInterval(timer);
                                break;
                        }
                         
                    }
                },res=> {
                    console.log('failed')
                });
           }, 5000);
            //失败的回调  
        },res => {
            console.log('获取订单失败！');
      });        
    }
}
</script>
<style scoped>
.nav{
    height: 50px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.nav>.title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
.content{
    width: 100%;
    /*height: 100%;*/
    text-align: center;
    padding-top: 50%;
}
#fail_tip{
    display: none;
}

</style>