<template>
    <div class="login-wrap">
        <div class="ms-login">
        	<div class="ms-title">注册</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" >
                <el-form-item prop="phoneNo">
                    <el-input v-model="ruleForm.phoneNo" placeholder="手机号" ></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="ruleForm.code" placeholder="验证码" class="code" ></el-input>
                    <img :src="ruleForm.captchaSrc" class="captcha" @click="refresh"/>
                </el-form-item>
                <el-form-item prop="SMS">
                    <el-input v-model="ruleForm.SMS" placeholder="短信验证码" class="sms"></el-input>
                    <el-button  class="phone_captcha" :disabled="disabled" :start="start" @click="sendSMS('ruleForm')">{{time | change}}</el-button>
                </el-form-item>
                
                <!--<count-down class="btn1" :start="start" @countDown ="start=false" @click.native="sendSMS('ruleForm')" ></count-down>-->
                
                <el-form-item prop="nick">
                    <el-input v-model="ruleForm.nick" placeholder="昵称" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" ></el-input>
                </el-form-item>
                 <el-form-item prop="repassword">
                    <el-input type="password" placeholder="确认密码" v-model="ruleForm.repassword" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                 <el-form-item prop="checked">
                    <el-checkbox v-model="ruleForm.checked" >我已阅读并同意<a class="termsOfService" href="http://www.zaih.com/help/agreement/" target="_blank">《服务条款》</a></el-checkbox>
                </el-form-item>
                
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                </div>
               
            </el-form>
            <ul class="instructor clearfix">
				<li>已有账号？现在去 <a href="javascript:;" @click="logIn">登录</a></li>
			</ul>
        </div>
    </div>
</template>

<script>
	
	import qs from 'qs';
	import CountDown from './CountDown.vue';
	
    export default {
    	name: 'Reg',
    	 components:{
        	CountDown,
        },
        data () {
		    var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm.password) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		    }; 
		    var validateCheck = (rule, value, callback) => {
		        if (value == "unchecked") {
		          callback(new Error('请先同意条款'));
		        } else {
		          callback();
		        }
		    }; 
		    
            return {
            	start: false,
            	time: '获取验证码',
            	disabled:false,
                ruleForm: {
                	phoneNo: '',
                	code: '',
                	captchaSrc: process.env.API_HOST + 'open/api/captcha',
                	SMS: '',
                    nick: '',
                    password: '',
                    repassword: '',
                    checked: true,
                },
                rules: {
                	phoneNo: [
                	 	{ required: true, message: '手机号不能为空', trigger: 'blur'},
                	 	{ pattern: /^1(3|4|5|7|8)[0-9]\d{8}$/ , message: '请输入正确的11位手机号', trigger: 'blur,change' }
                	],
                	code: [
                		{ required: true, message: '验证码不能为空', trigger: 'blur,change' },
                	],
                	SMS: [
                		{ required: true, message: '短信验证码', trigger: 'blur' }
                	],
                	nick: [
                		{ required: true, message: '昵称不能为空', trigger: 'blur' },
                		{ min: 2,  message: '不少于2个字符', trigger: 'blur,change' }
                	],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { min: 6,  message: '不少于6个字符', trigger: 'blur,change' }
                    ],
                    repassword: [
						{ validator: validatePass, trigger: 'blur' }
                    ],
                    checked: [
//                  	{ required: true, type: 'boolean', message: '请先同意条款' , trigger: 'change'},//有问题
//						{ required: true, validator: validateCheck, trigger: 'change' }
                    ]
                },
            }
        },
		watch : {
            start (value,oldvalue) {
                if(value == true){
                    this.countDown();
                }
            }
        },
        methods: {
            submitForm(formName) { //注册接口

            	console.log(this.ruleForm.checked);
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid ) {
                    	let data2 = qs.stringify({
                    		nick: this.ruleForm.nick,
						    phone_no: this.ruleForm.phoneNo,
						    password: this.ruleForm.password,
						    phone_captcha: this.ruleForm.SMS,
		  					captcha: this.ruleForm.code
						});
						let that = this;
						console.log('138', self.ruleForm.checked);
						if( !self.ruleForm.checked){   //如果不同意条款，则提示请先同意条款
							alert('请先同意条款');
						}else{  //同意条款之后，再发送注册请求！
							that.$axios.post(
						    process.env.API_HOST + 'open/api/user/register',
						    data2,
						    {
						    	headers: {
						        	'Content-Type': 'application/x-www-form-urlencoded',
						    	},
						    	withCredentials : true
						    }).then(function(res){
							    console.log(res.data.code);
							    alert(res.data.msg);
							    if(res.data.code == "1"){   //注册成功后跳转到首页
							    	sessionStorage.setItem('STORAGE_TOKEN',self.ruleForm.username);  //具体的token需要从后台获取
	                        		self.$router.push('/');
							    }else{  //注册不成功
							    	
							    }
							}).catch(function(err){
			        			console.log(err);
			        		});
						}
                        
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register() {
            	this.$router.push("register");
            },
            refresh() {
        		this.ruleForm.captchaSrc = process.env.API_HOST + 'open/api/captcha'+ '?rnd=' + Math.random();
        	},
			countDown () { //倒计时
				console.log()
                this.time = 60;
               	this.disabled = true;//禁用按钮
                let timer = setInterval(()=>{
                    this.time --;
                    
                    if(this.time == 0){
                    	clearInterval(timer);
                    	timer = null;
//                      this.$emit('countDown');
                        this.start = false;
                        this.time = '获取验证码';
                        this.disabled = false;//倒计时结束后启用按钮
						
                        
                    }
                },1000);
            },
        	sendSMS(formName) {
        		let data1 = qs.stringify({
				    phone_no: this.ruleForm.phoneNo,
  					captcha: this.ruleForm.code
				});
//				console.log(data1);
				
				const self = this;
                self.$refs[formName].validateField ('phoneNo', (error)=>{   //验证部分表单
                	if(!error){
                		console.log('Ok');
                		self.$refs[formName].validateField ('code', (error)=>{  //验证部分表单
		                	if(!error){
		                		console.log('Ok!!!')
		                	}else{
		                		return false;
		                	}
                		});
                	}else{
                		return false;
                	}
                	
                });
               
							
				if( this.ruleForm.phoneNo && this.ruleForm.code ){
					let that = this;
					that.$axios.post(
					    process.env.API_HOST + 'open/api/phone_captcha',
					    data1,   //请求的参数
					    {
					    	headers: {
					        	'Content-Type': 'application/x-www-form-urlencoded',
					    	},
					    	withCredentials : true
					    }
					   
					).then(function(res){
//					    console.log(res);
					    if(res.data.code === "1"){ //验证码请求成功后，btn内容显示60s倒计时
					    	that.start = true;
					    }
//					    alert(res.data.msg);
					}).catch(function(err){
	        			console.log(err);
	        		});
				}

				
        	},
        	logIn() {
        		this.$router.push('login');
        	},
        	
        },
        filters : {   //过滤器
            change (value) {    
//          	console.log('过滤器',value)
               if(!value) return ""
               if(!isNaN(value)){
                    return `${value}S 后重新获取`;
               }else{
                   return value;
               }
            }
        },
        created() {
//			console.log(process.env.API_HOST);
			console.log(this.ruleForm.checked);
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
    .captcha{
    	height: 37px;
    	float: right;
    }
    .code{
		width: 66%;
		margin-right: 6px;
	}
	.sms{
		width: 41%;
		margin-right: 6px;
	}
	.phone_captcha{
		width: 56%;
		height: 37px;
    	float: right;
	}
	
	.btn1 {
		width:100%;
	    display: block;
	    text-align: center;
	    border:1px solid #bfcbd9;
	    background-color:#fff;
	    font-size: 14px;
	    margin-bottom: 11px;
	}
	.btn1:hover {
    	border-color: #38a0f4;
    	color: black;
	}
	
	
	.btn2 {
		width:100%;
	    display: block;
	    text-align: center;
	    border: 4px solid #38a0f4;
	    background-color: #38a0f4;
	    padding: 5px 0;
	    font-size: 14px;
	    color: #fff;
	   
	}
	.btn2:hover {
    	border-color: #2185D0;
	}
	
	.checkbox{
		width: 6%;
		margin-right: 5px;
	}
	
	.termsOfService:hover{
		text-decoration: underline;
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