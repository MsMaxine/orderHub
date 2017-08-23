<template>
	<div class="register">
		<div  class="register_box">
			<div class="main">
				<h4 >注册</h4>
		
				<div  class="form_box" >
					
					<label>
						<input type="text"  placeholder="手机号" name="phoneNumber">
					</label>
					<label>
						<input type="text"  placeholder="验证码" name="code" class="code">
						<img src="../assets/code.png"/>
					</label>
					<a herf="javascript:;" class="btn1" @click="">发送手机验证码</a>
					<label>
						<input type="text"  placeholder="手机验证码" name="phoneCode">
					</label>
					<label>
						<input type="text"  placeholder="昵称" name="user">
					</label>
					<label>
						<input type="password" placeholder="密码" name="password">
					</label>
					<label>
						<input type="checkbox" class="checkbox" name="checkbox">我已阅读并同意<a class="termsOfService" href="#">《服务条款》</a>
					</label>
					<a herf="javascript:;" class="btn2" @click="signIn">注册</a>
				</div>
				<ul class="instructor clearfix">
					<li>已有账号？现在去 <a href="javascript:;" @click="logIn">登录</a></li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>

	export default {
        name: 'Register',
        data() {
			return {
				
			}
        },
        methods: {
        	sendOut() {
        		this.$router.push('/');
        	},
        	signIn() {
        		sessionStorage.setItem('STORAGE_TOKEN',111);
        		this.$router.push('/');
        	},
        	logIn() {
        		this.$router.push('login');
        	}
        }

	}
</script>

<style scoped>
	.register{
		font-size: 13px;
    	color: #393939;
    	height: 100%;
	}
	.register_box {
		width: 375px;
		/*height: 252px;*/
		box-sizing: border-box;
		padding: 6px;
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, 0);
		background: #f7f7f7;
	}
	
	.main {
		padding: 16px 36px;
	}
	.register_box h4 {
		font-size:19px;
		color: #478fca;
		font-weight: 400;
		line-height: 28px;
	    margin-bottom: 16px;
	    margin-top: 18px;
	    padding-bottom: 4px;
	    border-bottom: 1px solid #d5e3ef;
	   
	}
	.form_box  {
		border: 0 none;
		padding: 0;
	}
	.form_box label {
		display: block;
		margin-bottom: 11px;
		font-size: 14px;
	    line-height: 20px;
	}
	.form_box input {
		padding: 4px 6px;
		width: 100%;
		color: #858585;
		border: 1px solid #d5d5d5;
		line-height: 32px;
    	height: 32px;
	}
	.form_box input:focus {
		border-color:#38a0f4;
	}
	
	.form_box .code{
		width: 62%;
		margin-right: 7px;
	}
	
	.form_box .btn1 {
		width:100%;
	    display: block;
	    text-align: center;
	    border: 1px solid #ccc;
	    background-color: white;
	    padding: 7px 0;
	    font-size: 14px;
	    margin-bottom: 11px;
	}
	.form_box .btn1:hover {
    	border-color: #38a0f4;
    	color: black;
	}
	
	
	.form_box .btn2 {
		width:100%;
	    display: block;
	    text-align: center;
	    border: 4px solid #38a0f4;
	    background-color: #38a0f4;
	    padding: 5px 0;
	    font-size: 14px;
	    color: #fff;
	   
	}
	.form_box .btn2:hover {
    	border-color: #2185D0;
	}
	
	.form_box .checkbox{
		width: 6%;
		margin-right: 5px;
		/*opacity: 0;*/
	}
	
	.form_box .termsOfService:hover{
		text-decoration: underline;
	}
		
	.instructor {
		margin: 24px 0;
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