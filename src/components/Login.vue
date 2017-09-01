<template>
    <div class="login-wrap">
        <div class="ms-login">
        	<div class="ms-title">登录</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="账户名" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                
            </el-form>
            <ul class="instructor clearfix">
				<li><a href="javascript:;">意见反馈</a></li>
				<li><a href="javascript:;" @click="register">注册新帐号 </a></li>
			</ul>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        sessionStorage.setItem('STORAGE_TOKEN',self.ruleForm.username);  //具体的token需要从后台获取
                        self.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register() {
            	this.$router.push("register");
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .login-wrap .ms-login .plainBr {
    	border-radius: 0px;
    }
    
   .ms-title {
   		font-size:19px;
		color: #478fca;
		font-weight: 400;
		line-height: 28px;
	    margin-bottom: 16px;
	    margin-top: 18px;
	    padding-bottom: 4px;
	    border-bottom: 1px solid #d5e3ef;
   }
    .ms-login{
        position: absolute;
        left:50%;
        top:20%;
        transform:translate(-50%, 0);
        width:380px;
        padding:10px 30px;
        background: #f7f7f7;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
    
    .instructor {
		margin: 10px 0;
	}
	.instructor li{
		float: right;
		font-size: 12px;
		margin-left: 10px;
	}
	.instructor li a{
		color: #4183C4;
	}
	.instructor li a:hover{
		text-decoration: underline;
	}
</style>