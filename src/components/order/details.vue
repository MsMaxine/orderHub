<template>
    <div class="tmpl">
        <header class="nav">
			<div class="title">订单如下</div>
		</header>
        <div class="content">
            <a :href="'http://acstatics.zhid58.com/'+ this.loginName +'.pdf'" class="link" target="_blank" >订单链接</a>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            loginName: '',
        }
    }, 
    created() {
        this.loginName = this.$route.query.loginName;
    },
}
</script>
<style scoped>
.nav{
    height: 50px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.nav>.title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
.content{
    width: 100%;
    height: 100%;
}
.content .link{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 14px;
}
</style>