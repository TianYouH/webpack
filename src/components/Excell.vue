<template>
  <div class="hello">
    <div>
      <input type="file" id='file' multiple>
      <button type="button" @click="upload">上传</button>
      <button type="button" @click="dowload">下载</button>
    </div>
  </div>
</template>

<script>
import jQuery from 'jquery'

function downFile (blob, fileName) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, fileName)
  } else {
    var link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    window.open(link.href)
    // link.download = fileName
    // link.click()
    // URL.revokeObjectURL(link.href)
  }
}

export default {
  name: 'excell',
  data () {
    return {
      data: {
        file: {}
      }
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      jQuery('.hello').append('<h1>黄金亮你太衰啊</h1>')
    },
    upload () {
      this.file = document.getElementById('file').files
      console.log(this.file)
      console.log('文件上传')
    },
    dowload () {
      console.log('下载按钮被点击')
      // let blob = new Blob([this.file], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
      let blob = new Blob([this.file], {type: 'application/vnd.ms-excel;charset=utf-8'})
      downFile(blob, 'xxx')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
