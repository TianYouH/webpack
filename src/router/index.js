import Vue from 'vue'
import Router from 'vue-router'

import Excell from '@/views/Excell'

import Video from '@/views/Video'

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
      name: 'Video',
      component: Video
    }
  ]
})
