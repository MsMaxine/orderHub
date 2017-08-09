export default [
      	{
          name: '__checkbox',   // <----
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
      	{
          name: 'name',   // <----sortHandleIcon
          title: '回传触发',
          dataClass: 'center aligned'
        },
      	{
          name: '__sequence',   // <----序号
          title: '预定单号',
          titleClass: 'center aligned',//表头样式
          dataClass: 'center aligned' //序号样式
        },
        
        {
          name: 'name',
          title: '接口失败原因'
         },
        {
        	name:'email',
        	title: '打印订单地址'
        },
        {
          name: 'birthdate',
          title: '订单状态',
          sortField: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
//        callback: 'formatDate|DD-MM-YYYY'
        },
        {
          name: 'nickname',
          title: '经销商编码',
          callback: 'allcap'
        },
        {
          name: 'gender',
          title: '客户端账号',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'genderLabel'
        },
        {
          name: 'salary',
          title: '单据编码',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
         {
          name: 'salary',
          title: '经销商处客户编码',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
         {
          name: 'salary',
          title: '经销商处客户名称',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '客户标准编码',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '客户标准名称',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '单据日期',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '送货日期',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '截止日期',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '工厂',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '单据状态',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '订单创建时间',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'salary',
          title: '最新接口调用日期',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
        {
          name: 'note',
          title: '备注',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        },
//      {
//        name: '__component:custom-actions',   // <----
//        title: 'Actions',
//        titleClass: 'center aligned',
//        dataClass: 'center aligned'
//      }
      ]