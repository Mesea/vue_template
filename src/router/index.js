import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

 const routers=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      // 重定向 如果是/ 显示info页
      redirect: "info",
      children:[
        {
          path:"info",
          name: 'info',
          component: resolve => require(['@/components/main/info'], resolve)
        },
        {
          path:"news",
          name: 'news',
          component: resolve => require(['@/components/main/news'], resolve),
        },
        {
          path:"test",
          name: 'test',
          component: resolve => require(['@/components/main/test'], resolve)
        }
      ]
    }
  ]
})

export default routers
