<template>
	<div class="header">
		<a href="javascript:;" class="title">Order Hub</a>
		<span class="top_menu"> 
			<i class="el-icon-search"></i>
			<div class="site_switch">
				<img src="../assets/earth.png" alt="" class="earth"/>
				<span>中国站&nbsp</span>
				<i class="el-icon-arrow-down"></i>
				<i class="el-icon-arrow-up" ></i>
				<ul class="dropdown">
		          <li class="current"><a href="javascript:;" target="_blank">中国站</a></li>
		           <li choice="INTL" lang="en"><a href="https://www.alibabacloud.com/en" target="_blank">International&nbsp;-&nbsp;English</a></li> 
		           <li choice="INTL" lang="zh"><a href="https://www.alibabacloud.com/zh" target="_blank">International&nbsp;-&nbsp;简体中文</a></li> 
		           <li choice="JP"><a href="https://jp.alibabacloud.com" target="_blank">日本サイト</a></li>
		        </ul>
			</div>
		</span>
	</div>
</template>

<script>

	export default {
        name: 'Header' ,
		components: {
			
		},
        data() {
			return {
				
			}
        },
		methods: {
			
		}

	}
</script>

<style scoped>
.header{
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid hsla(0,0%,100%,.15);
	background-color: #000;
	color: #fff;
	padding: 0 100px 0 20px;
}
.header .title{
	font-size: 20px;
	font-weight: 500;
	color: #fff;
}
.top_menu{
	float: right;
	font-size:14px;
}
.site_switch{
	float: right;
	margin: 0 8px;
	position: relative;
}
.site_switch i{
	position: absolute;
	left: 70px;
    top: 12px;
}
.el-icon-arrow-up{
	display: none;
}
.site_switch:hover .el-icon-arrow-up{
	display:block;
}
.site_switch:hover .el-icon-arrow-down{
	display:none;
}
.site_switch:hover .dropdown{
	display: block;
}
.earth{
	width: 16px;
	height: 16px;
	vertical-align: middle;
}
.site_switch .dropdown{
	display: none;
    position: absolute;
    left: 0;
    top: 40px;
    background-color: #272b2f;
    width: 176px;
    z-index: 998;
    padding: 10px;
    cursor: default;
}
.site_switch .dropdown a{
	color:#fff;
}
</style>