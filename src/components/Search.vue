<template>
	<div>
		<div class="searchbox" >
			<ul class="clearfix">
				<li>
					<label for="">网站名称</label>
					<select id="">
						<option v-for="item in webOptions" value="">{{item.name}}</option>
					</select>
				</li>
				<li>
					<label for="">账号</label>
					<select name="" id="">
						<option v-for="option in webOptions" value="option.value">{{option.name}}</option>
					</select>
				</li>
				<li>
					<label for="">开始时间</label>
					<input type="date" value="2017-08-07" />
				</li>
				<li>
					<label for="">结束时间</label>
					<input type="date" value="2017-08-07" />
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
				webOptions: [
				{
					value: 0,
					name:''	
				},
				{
					value: 1,
					name:'test'	
				},
				{
					value: 2,
					name:'北京华联'	
				},
				{
					value: 3,
					name:'步步高'	
				},
				{
					value: 4,
					name:'大润发'	
				},
				{
					value: 5,
					name:'华润万家'	
				},
				{
					value: 6,
					name:'家乐福'	
				},
				{
					value: 7,
					name:'京东母婴'	
				}
				]
			}
		},
//		props: ['title'],
		methods: {
			login() {
				this.$router.push("login");
			},
			showSettingsModal() {
				
			}
			
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
	.searchbox select,input{
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