export default [
  
      	{
          name: 'name',   // <----序号
          title: '网站名称',
          titleClass: 'center aligned',//表头样式
          dataClass: 'center aligned' //序号样式
       },
        {
        	name:'email',
        	title: '网站账号',
        	titleClass: 'center aligned',//表头样式
            dataClass: 'center aligned' //序号样式
        },
        {
          name: 'birthdate',
          title: '创建时间',
          sortField: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
//        callback: 'formatDate|DD-MM-YYYY'
        },
        {
          name: 'nickname',
          title: '状态',
          titleClass: 'center aligned',//表头样式
          dataClass: 'center aligned' //序号样式
        },
        
      ]