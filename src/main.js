// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'
// import videojs from './video/index'
// import videojs from 'video.js'
// import 'video.js/dist/video-js.css'
// import 'video.js/dist/lang/zh-CN'
import VueVideoPlayer from 'vue-video-player'
import myVideo from './components/Video'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueVideoPlayer)
Vue.use(myVideo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
