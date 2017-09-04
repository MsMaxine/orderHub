<template>
	<div class="footer">
		<footer role="contentinfo">
			<div class="container">
				<div class="row">
					<div class="col-md-2 col-sm-6 col-xs-6 footer-item first-footer-item">
						<h3 class="footer-title">产品服务</h3>
						<ul class="footer-list">
							<li>
								<a href="winDMS.php" class="footer-link">winDMS</a>
							</li>
							<li>
								<a href="winKA.php" class="footer-link">winKA</a>
							</li>
							<li>
								<a href="winSFA.php" class="footer-link">winSFA</a>
							</li>
							<li>
								<a href="winPMM.php" class="footer-link">winPMM</a>
							</li>
							<li>
								<a href="winCRM.php" class="footer-link">winCRM</a>
							</li>
							<li>
								<a href="winBI.php" class="footer-link">winBI</a>
							</li>
						</ul>
					</div>
					<div class="col-md-2 col-sm-6 col-xs-6 footer-item">
						<h3 class="footer-title">合作服务</h3>
						<ul class="footer-list">
							<li>
								<a href="case.php" class="footer-link">成功案例</a>
							</li>
						</ul>
					</div>
					<div class="col-md-4 col-sm-12 col-xs-12 footer-item footer-item-contact">
						<h2 class="footer-phone">400-687-0099</h2>
						<h3 class="footer-time">赢销通客服热线</h3>
						<p><span class="glyphicon glyphicon-map-marker" aria-hidden="true"> </span>&nbsp;&nbsp;北京市海淀区西小口路66号中关村东升科技园B-1-3层 </p>
						<p><span class="glyphicon glyphicon-envelope" aria-hidden="true"> </span>&nbsp;&nbsp;info@winchannel.net</p>
					</div>
					<div class="col-md-2 col-sm-6 col-xs-6 footer-item">
						<h3 class="footer-title">关注我们</h3>
						<ul class="footer-list">
							<li>
								<a href="http://www.weibo.com/winchannel" class="footer-link">新浪微博</a>
							</li>
							<li>
								<a href="javascript:;" class="footer-link">微信公众号</a>
							</li>
							<li><img src="img/code.png"></li>
						</ul>
					</div>
					<div class="col-md-2 col-sm-6 col-xs-6 footer-item last-footer-item">
						<h3 class="footer-title">关于我们</h3>
						<ul class="footer-list">
							<li>
								<a href="about.php" class="footer-link">赢销通概况</a>
							</li>
							<li>
								<a href="international.php" class="footer-link">国际化进程</a>
							</li>
							<li>
								<a href="branch.php" class="footer-link">分支机构</a>
							</li>
							<li>
								<a href="news.php" class="footer-link">赢销通新闻</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		<footer role="page-bottom">
		    <div class="container">
		        <div class="row">
		            <div class="col-sm-12">
		                <a href="contact.php">联系我们</a>|<a href="privacy.php">隐私条款</a>|<a href="law.php">法律条款</a>|<a href="index.php">赢销通软件技术(北京)有限公司</a><a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证 05010100</a><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020796" target="_blank">京公网安备 11010802020796号</a>
		            </div>
		        </div>
		    </div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Footer',
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
footer[role="contentinfo"] {
    padding-top: 50px;
    padding-bottom: 10px;
    font-size: 12px;
    background-color: #504f5a;
    color: #acabb7;
   
}
@media (min-width: 1200px)
.container {
    width: 1170px;
}
.container {
    /*margin-right: auto;
    margin-left: auto;*/
    padding-left: 15px;
    padding-right: 15px;
     text-align: center;
}
.footer-title {
    color: #fff;
    font-size: 14px;
    line-height: 34px;
    margin: 0;
}
footer>.container>.row>.footer-item:first-child {
    border-right: 1px dashed #afaeb8;
}
footer>.container>.row>.footer-item:last-child {
    border-left: 1px dashed #afaeb8;
}

footer>.container>.row>.footer-item {
    min-height: 198px;
    padding: 0 45px;
    margin-bottom: 40px;
    z-index: 1;
}
@media (min-width: 992px)
.col-md-2 {
    width: 16.66666667%;
}

@media (min-width: 992px)
.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11 {
    float: left;
}
footer>.container>.row>.footer-item>.footer-list>li>.footer-link {
    font-size: 12px;
    line-height: 26px;
}
footer[role="contentinfo"] a {
     color: #acabb7; 
}
footer[role="contentinfo"] a:focus, footer[role="contentinfo"] a:hover, footer[role="contentinfo"] a:active {
    color: #fff;
}
footer>.container>.row>.footer-item-contact {
    z-index: 0;
    padding: 0 30px;
}
@media (min-width: 992px)
.col-md-4 {
    width: 33.33333333%;
}
.footer-phone {
    font-size: 26px;
    line-height: 46px;
    margin: 0;
    padding-top: 20px;
    text-align: center;
}
.footer-item>.footer-time {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 40px;
    text-align: center;
}

footer>.container>.row>.footer-item>p {
    line-height: 26px;
}
@media (max-width: 991px)
footer>.container>.row>.footer-item>p {
    text-align: center;
}
p {
	text-align: left;
    margin: 0 0 10px;
}


footer[role="page-bottom"] {
    background-color: #42414c;
    padding: 36px 0;
    color: #a8a8b5;
}
footer[role="page-bottom"]>.container>.row>div>a {
    color: #a8a8b5;
    line-height: 22px;
    margin: 0 10px;
}

.col-sm-12 {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

</style>