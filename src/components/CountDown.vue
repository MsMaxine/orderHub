<template>
     <div>
     	<el-button href="javascript:;" :disabled="disabled" class="btn" >{{time | change}}</el-button>
        <!--<button href="javascript:;" :disabled="disabled" class="btn">{{time | change}}</button>-->
     </div>
</template>

<script>
	let flag = false;
    export default {
        data () {
            return {
                time : '获取验证码',
                disabled: false
            }
        },
        props : {
            start : {
                type : Boolean,
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
            countDown () {
                this.time = 60;
               	this.disabled = true;//禁用按钮
                let timer = setInterval(()=>{
                    this.time --;
                    
                    if(this.time == 0){
                        this.$emit('countDown');
                        this.time = '获取验证码';
                        this.disabled = false;//倒计时结束后启用按钮
                        flag = true;
                        clearInterval(timer);
                    }
                },1000)
            }
        },
        filters : {
            change (value) {
               if(!value) return ""
               if(!isNaN(value)){
//                 if(flag == true){
                       return `${value}S 后重新获取`;
//                 }
//                 return value+'S'
               }else{
                   return value;
               }
            }
        }

    }
</script>
<style scoped>
	.btn {
		border:0 none;
		/*background:#4db3ff;*/
		outline: none;
		width: 100%;
		height: 100%;
	}
</style>