<template>
  <div id='video'>
    <video-player class='test' ref='videoPlayer' :options='playerOptions'></video-player>
    <button type='button' @click='guanBi'>关闭</button>
    <button type='button' @click='show'>显示</button>
  </div>
</template>
<script>
  export default {
    name: 'my-video',
    data () {
      return {
        playerOptions: {
          sources: [
              {
                  withCredentials: false,
                  type: "rtmp/mp4",
                  src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks'
              }
          ],
          controlBar: {
              timeDivider: false,
              durationDisplay: false,
              volumeMenuButton: {
                  inline: false,
                  vertical: true
              }
          },
          flash: {
              swf: "/static/swf/video-js.swf"
          },
          poster:"",
          autoplay: true,
          pleload: false,
          language: "zh-CN",
          live: true,
          height: 300,
          fluid: true,
          techOrder: ["html5","flash"]
        }
      }
    },
    props: {
      video: {
        type: Object,
      },
      isClose: {
        type: Object,
        close: {
          type: Boolean
        }
      }
    },
    mounted () {
      console.log(this.close)
    },
    computed: {
      player(){
        return this.$refs.videoPlayer.player;
      }
    },
    methods: {
      guanBi () {
        console.log()
        this.isClose.close = !this.isClose.close
        // console.log('关闭');
        // console.log(this.player);
        // this.player.paused()
        // this.player.pause()
        // this.player.reset()
        // this.player.errorDisplay = false
        // this.player.hide()
        // console.log(this.player)
        // this.player.clearTimeout()


      },
      show () {
        this.player.show()
      }
    },
    watch: {
     close: function (val, oldVal) {
      }
    }
  }
</script>
