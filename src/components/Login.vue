<template>
	<div class="login">
		<div  class="login_box">
			<div class="main">
				<h4 >登录</h4>
		
				<div  class="form_box" >
					
					<label>
					<!--<span class="block input-icon input-icon-right">-->
						<input type="text"  placeholder="账户名" name="user">
							
					<!--</span>-->
					</label>
					<label>
						<input type="password" placeholder="密码" name="password">
					</label>
					<a herf="javascript:;" class="btn" @click="signIn">登录</a>
				</div>
				<ul class="instructor clearfix">
					<li><a href="javascript:;">意见反馈</a></li>
					<li><a href="javascript:;" > 注册新帐号 </a></li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>

	export default {
        name: 'Login',
        data() {
			return {
			}
        },
        methods: {
        	signIn() {
        		let token = '456';//发送请求从cookie中获取token，然后保存到sessionStrorage中
        		console.log(token);
        		window.sessionStorage.setItem('STORAGE_TOKEN', token );
        		this.$router.push('/');
        	},
//      	closeModal(){
//      		console.log('login')
//          	this.$emit('close');//在子组件中触发父组件中的close事件
//         }
       },
       

	}
</script>

<style scoped>
	.login{
		font-size: 13px;
    	color: #393939;
    	height: 100%;
	}
	.login_box {
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
	.login_box h4 {
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
	
	.form_box .btn {
		width:100%;
	    display: block;
	    text-align: center;
	    border: 4px solid #38a0f4;
	    background-color: #38a0f4;
	    padding: 5px 0;
	    font-size: 14px;
	    color: #fff;
	   
	}
	.form_box .btn:hover {
    	border-color: #2185D0;
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