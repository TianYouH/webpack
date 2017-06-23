import Vue from 'vue'
import Router from 'vue-router'

import Excell from '@/components/Excell'

import Vedio from '@/components/Vedio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Excell',
      name: 'Excell',
      component: Excell
    },
    {
      path: '/',
      name: 'Vedio',
      component: Vedio
    }
  ]
})
