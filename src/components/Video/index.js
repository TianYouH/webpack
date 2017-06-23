import myVideo from './Video.vue'
myVideo.install = function (Vue) {
  Vue.component(myVideo.name, myVideo)
}
export default myVideo
