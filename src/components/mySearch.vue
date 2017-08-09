<template>
	<div>
		<div class="searchbox" >
			<table id="stab">
				<tbody>
					<tr>
						<td><label >经销商名称<font color="red"></font></label></td>
						<td style="padding-right:15px">

							<select  ptitle="网站名称" >
								<!--动态获取的 options: [{name:test,value:60927 },{name: '', value: }]-->
								<!--<option v-for="option in options1"> {{option.name}} </option>-->
								<option></option>

								<option value="60927_test">test</option>
								<option value="60927_北京华联">北京华联</option>
								<option value="60927_步步高">步步高</option>
								<option value="60927_大润发">大润发</option>
								<option value="60927_华润万家">华润万家</option>
								<option value="60927_家乐福">家乐福</option>
								<option value="60927_京东母婴">京东母婴</option>
								<option value="60927_京东卫品">京东卫品</option>
								<option value="60927_京东新通路">京东新通路</option>
								<option value="60927_京东纸品">京东纸品</option>
								<option value="60927_麦德龙">麦德龙</option>
								<option value="60927_人人乐">人人乐</option>
								<option value="60927_苏宁母婴">苏宁母婴</option>
								<option value="60927_苏宁卫品">苏宁卫品</option>
								<option value="60927_苏宁纸品">苏宁纸品</option>
								<option value="60927_天猫">天猫</option>
								<option value="60927_武商">武商</option>
								<option value="60927_物美">物美</option>
								<option value="60927_新华都">新华都</option>
								<option value="60927_一号店">一号店</option>
								<option value="60927_永辉">永辉</option>
								<option value="60927_永辉供零在线">永辉供零在线</option>
								<option value="60927_中百">中百</option>
							</select>

						</td>
						<td><label >客户端账号<font color="red"></font></label></td>
						<td >

							<select  ptitle="客户端账号" >
								<option></option>

							</select>

						</td>
						<td><label lang="pf_45bec0c2_3">接口回传状态<font color="red"></font></label></td>
						<td >

							<input type="text" name="pf_45bec0c2_3" value="" title="" ptitle="接口回传状态" >

						</td>
						<td><label lang="pm_1010_74_6">开始日期<font color="red"></font></label></td>
						<td >
							 <input type="date" value="2017-08-02" />
							<!--<input type="text" name="pm_1010_74_6" value="2017-07-31" class="select_but" onfocus="WdatePicker({'lang':'zh-cn'})" onchange="checkDate(this)" readonly="" ptitle="开始日期" style="width:100px">-->

						</td>
						<td><label lang="pm_1010_74_6_e">结束日期<font color="red"></font></label></td>
						<td >
							<input type="date" value="2017-08-03" />
							<!--<input type="text" name="pm_1010_74_6_e" value="2017-08-02" class="select_but"  readonly="" ptitle="结束日期" >-->

						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.searchbox {
		padding: 10px 18px;
    	border-bottom: 1px solid #e7eaec;
    	box-sizing: border-box;
    	/*white-space: nowrap;
    	position: relative;*/
    	width: 100%;
	}
	.searchbox table,tbody,tr {
		display: block;
	}
	
	
	.searchbox table td {
		line-height: 28px;
	}
	
	.searchbox table td:nth-child(2n + 1) {
    	padding-right: 10px;
    	
	}
	.searchbox table  select{
		background-color: #F4F6F9;
		border: 1px solid #e9e9e9;
		height: 28px;
		width: 100px;
	}
	.searchbox table td:nth-child(2n) {
    	padding-right: 15px;
    	
	}
	.searchbox table td:nth-child(2n) input{
    	border: 1px solid #e9e9e9;
    	height: 28px;
    	width: 100px;
    	box-sizing: border-box;
	}
	.searchbox table td:nth-child(2n) input:focus{
		border-color: #54abd9;
		transition-duration: 0.5s;
	}
	
	input::-webkit-inner-spin-button {
		display: none;
	}

</style>