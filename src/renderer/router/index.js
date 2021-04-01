import Vue from 'vue'
import Router from 'vue-router'
import mainLayout from "@/layout/mainLayout"

Vue.use(Router)

export default new Router({
  linkActiveClass:"router-active",
  routes: [
    {
      path: '/',
      name: '',
      redirect: "/home",
      component: mainLayout,
      children:[
        {
          path: "home",
          component: require('@/view/Home').default
        },
        {
          path: "/singer",
          component: require('@/view/Singer').default
        },
        {
          path: "/video",
          component: require('@/view/Video').default
        },
        {
          path: "/ranking",
          component: require('@/view/Ranking').default
        },
        {
          path: "/friend",
          component: require('@/view/Friend').default
        },
      ]
    }
  ]
})
