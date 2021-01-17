export default {
   dva:{},
   antd:{},

   routes:[{
      path:'/',
      component:'../layouts'
      ,
      routes:[{
         path:'/MyTable',
         component:'./MyTable'
      },
      {
         path:'/user/add',
         component:'./user/UserAdd'
      },
      {
         path:'/user/list',
         component:'./user/UserList'
      }
   ]
   }]
};