import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'news' }
    },
    {
      path: '/aktuality',
      name: 'news',
      component: News
    }
  ]
})
