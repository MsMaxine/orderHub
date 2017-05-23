<template>
    <div class="tmpl">
        <header class="nav">
			<a class="back-nav"  @click="goBack"> < </a>
			<div class="title" >{{title}}</div>
		</header>
        <div class="content">	
				<form class="input-group">
					<div class="input-row">
						<input type="text" placeholder="请输入您的账号" v-model="loginName" class="userId">
					</div>
                    <div class="input-row ">
					<input type="password" class="password" placeholder="请输入您的密码" v-model="passphrase">
				    </div>
					<div class="input-row">
                            <input type="submit" class="btn" value="获取订单"  @click="getOrder">
					</div>
				</form>
                <!--<div id="err_tips" >
                    请输入账号或密码！
                </div>-->
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            title:'',
            websiteId: '',
            loginName: '',
            passphrase: '',
            projectName: 'OrderHub',
            accountId: '',
            packageId: '',
        }
    }, 
    methods: {
            goBack() {
                this.$router.go(-1); //返回上一次历史记录
            },
            getOrder() {
                //如果loginName没有填写f或者this.passphrase没有填写f，那就提示请输入账号或密码
                    
                // if( !this.loginName || !this.passphrase ) {
                //     document.getElementById('err_tips').style.display = "block";
                // }
                this.$http.post(this.$myConfig.host + '/api/v1/h5/website/account', {
                    loginName: this.loginName,
                    passphrase: this.passphrase,
                    websiteId: this.websiteId,
                    projectName: this.projectName,
                    }, { emulateJSON: true}).
                then(res => {
                    console.log(res);
                    console.log('登录成功！');
                    this.accountId = res.body.param.id;
                    this.loginName = res.body.param.loginName;
                    console.log(this.accountId);
                    //如果code为0，就跳转到下个页面
                    if( res.body.code == 0 ){
                        //让锚点值发生改变
                        this.$router.push('/account/getOrder/' + this.accountId  + '?packageId='+ this.packageId + '&loginName=' + this.loginName); 
                    }

                }, res => {
                    console.log('登录失败！');
                });
        }
    },
    created() {
       
        this.title =  this.$route.query.title;
        this.websiteId = this.$route.params.websiteId;
        this.packageId = this.$route.query.packageId;
        console.log(this.packageId )
    }
    
}
</script>
<style scoped>
.nav{
    height: 50px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.back-nav {
    position: absolute;
    top:50%;
    left: 10px;
    margin-top:-13px;
    font-size: 26px;
    font-family: "宋体";
}
.nav>.title,.input-row{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

.input-row input{
    padding-left: 20px;
    width: 100%;
    line-height: 50px;
    background-color:  rgba(0, 0,0,.8);
   
}


/*.input-row .btn{
    display: block;
    width: 100%;
    background-color:#3F80FE;
}*/

#err_tips{
    color: red;
    font-size: 12px;
    text-align: center;
    display: none;
}
.show{
    display: block;
}
</style>