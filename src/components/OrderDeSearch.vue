<template>
	<div>
		<div class="searchbox" >
			<ul class="clearfix">
				<li>
					<label for="">单据编号</label>
					<input type="text" value="" placeholder="" />
				</li>
				<li>
					<label for="">门店编码</label>
					<input type="text" value="" placeholder="" />
				</li>
			</ul>
				
		</div>
	</div>
</template>

<script>
		export default {
		name: 'Search',
		components: {
		},
		data() {
			return {

			}
		},
//		props: ['title'],
		methods: {
		},
		created(){
			
		}
	}
	
</script>

<style scoped>
	.searchbox {
		padding: 10px 18px;
    	border-bottom: 1px solid #e7eaec;
    	box-sizing: border-box;
    	width: 100%;
	}
	.clearfix {
		zoom: 1; 
	}
	.clearfix:before, .clearfix:after{
		content: ""; 
		display: block; 
		height: 0; 
		clear: both; 
		visibility: hidden; 
	}
	
	.searchbox li {
		float: left;
		line-height: 28px;
		margin-right: 30px;
	}
	
	.searchbox label {
    	padding-right: 10px;
    	
	}
	.searchbox input{
		margin-right: 15px;
		background-color: #F4F6F9;
		border: 1px solid #e9e9e9;
		height: 28px;
		width: 100px;
		box-sizing: border-box;
	}

	.searchbox  input:focus{
		border-color: #54abd9;
		transition-duration: 0.5s;
	}
	
	input::-webkit-inner-spin-button {
		display: none;
	}

</style>