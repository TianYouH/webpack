<template>
  <div id='excell'>
    <button type="button" class="btn btn-primary" @click='isClose.close=!isClose.close'>打开模态窗</button>
    <button type="button" class="btn btn-primary" @click='isClose'>改变属性测试</button>
    <object type="application/x-shockwave-flash" style="outline:none;" data="http://cdn.abowman.com/widgets/hamster/hamster.swf" width="230" height="225"><param name="movie" value="http://cdn.abowman.com/widgets/hamster/hamster.swf"><param name="AllowScriptAccess" value="always"><param name="wmode" value="opaque"></object>
    <el-dialog v-if='isClose.close' v-model='isClose.close' title='视屏'>
      <my-video ref='test' :close='isClose'></my-video>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'excell',
  data () {
    return {
      show: false,
      isClose: {
        close: false
      } 
    }
  },
  methods: {
    isClose () { 
      // console.log(this.$refs)
      // console.log(this.close)
    }
  }
}
</script>
<style>
</style>
