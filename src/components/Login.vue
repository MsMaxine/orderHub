<template>
	<div class="login">
		<div  class="login-box">
			<div class="main">
				<h4 >登录</h4>
		
				<form  class="form-box" action="" method="">
					<fieldset>
						<label>
							<!--<span class="block input-icon input-icon-right">-->
							<input type="text"  placeholder="账户名" name="user">
							<i class="icon-user"></i>
							<!--</span>-->
						</label>
						<label>
							<input type="password" placeholder="密码" name="password">
						</label>
						<button class="btn" @click="signIn"><i class="icon-key"></i>登录</button>
	
					</fieldset>
				</form>
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
        		this.$router.push('/');
        	}
        }

	}
</script>

<style scoped>
	.login{
		font-size: 13px;
    	color: #393939;
    	height: 100%;
	}
	.login-box {
		width: 375px;
		height: 252px;
		box-sizing: border-box;
		padding: 6px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		
	}
	
	.main {
		padding: 16px 36px;
		background: #f7f7f7;
	}
	.login-box h4 {
		font-size:19px;
		color: #478fca;
		font-weight: 400;
		line-height: 28px;
	    margin-bottom: 16px;
	    margin-top: 18px;
	    padding-bottom: 4px;
	    border-bottom: 1px solid #d5e3ef;
	   
	}
	.form-box fieldset {
		border: 0 none;
		padding: 0;
	}
	.form-box label {
		display: block;
		margin-bottom: 11px;
		font-size: 14px;
	    line-height: 20px;
	}
	.form-box input {
		padding: 4px 6px;
		width: 100%;
		color: #858585;
		border: 1px solid #d5d5d5;
		line-height: 32px;
    	height: 32px;
	}
	
	.form-box .btn {
		float: right;
		box-sizing: border-box;
	    border: 4px solid #38a0f4;
	    background-color: #38a0f4;
	    padding: 5px 30px;
	    font-size: 14px;
	    color: #fff;
	    margin: 12px 0;
	}
	.form-box .btn:hover {
		/*background-color: #1690f3;*/
    	border-color: #2185D0;
	}
</style>