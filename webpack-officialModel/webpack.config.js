const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin'); //生成或处理index.html文件
var clearWebpackPlugin = require('clean-webpack-plugin'); //清理构建文件夹

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: 'js/[name]-bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new clearWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
      template: 'index.html',  //自动生成HTML文件的名字
      //  filename:'index-[hash].html',  //引入打包后的js的script标签所在的位置,这里表示放在head标签中
      //  inject:'head',  //可以向模板传递参数，然后应用于自动生成的html,(模板需要获取参数)
      title: '黄金亮你好帅啊',  //任何的参数都是可以传递的
      date: new Date()
    })
  ]
}