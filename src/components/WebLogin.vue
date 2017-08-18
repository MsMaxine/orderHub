<template>
    <div class="login-wrap">
        <div class="ms-login">
        	<div class="ms-title">请先登录</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入网站账号" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">开始采集</el-button>
                </div>
            </el-form>
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
                        { required: true, message: '请输入账号', trigger: 'blur' }
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
                    	console.log('开始采集');
                        //sessionStorage.setItem('TOKEN',self.ruleForm.username);  //具体的token需要从后台获取?再次登录网站是否需要？
                        self.$emit('close');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
        /*background: #f7f7f7;*/
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
		color: #225592;
	}
	.instructor li a:hover{
		text-decoration: underline;
	}
</style>