<template>
  <div id='excell'>
    <button type="button" class="btn btn-primary" @click='show=!show'>打开模态窗</button>
    <object type="application/x-shockwave-flash" style="outline:none;" data="http://cdn.abowman.com/widgets/hamster/hamster.swf" width="230" height="225"><param name="movie" value="http://cdn.abowman.com/widgets/hamster/hamster.swf"><param name="AllowScriptAccess" value="always"><param name="wmode" value="opaque"></object>
    <el-dialog v-model='show' title='视屏'>
      <video src=""></video>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'excell',
  data () {
    return {
      show: false
    }
  }
}
</script>
<style>
</style>
