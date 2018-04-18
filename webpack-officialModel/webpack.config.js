const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); //生成或处理index.html文件
const clearWebpackPlugin = require('clean-webpack-plugin'); //清理构建文件夹
const uglifyJSPlugin = require('uglifyjs-webpack-plugin'); //优化打包，移除未引用函数。
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: ['babel-polyfill','./src/index.js']
    // another: './src/another-module.js'
  },
  output: {
    filename: 'js/[name]-bundle.js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/' //publicPath 会在服务器脚本用到，确保文件资源能够在 http://localhost:??? 下正确访问
  },
  devtool: 'inline-source-map', //为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能
  devServer: {  //在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
    contentBase: './dist',
    hot: true
  },
  // module: {
  //   rules: [{
  //     test: /\.js$/,
  //     use: [
  //       {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['latest']
  //         }
  //       }
  //     ],
  //     exclude: path.resolve(__dirname, "./node_modules"),
      
  //   }, ]
  // },
  plugins: [
    new clearWebpackPlugin(['dist']),
    // new uglifyJSPlugin(),
    new htmlWebpackPlugin({
      //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
      template: 'index.html', //自动生成HTML文件的名字
      //  filename:'index-[hash].html',  //引入打包后的js的script标签所在的位置,这里表示放在head标签中
      //  inject:'head',  //可以向模板传递参数，然后应用于自动生成的html,(模板需要获取参数)
      title: '黄金亮你好帅啊', //任何的参数都是可以传递的
      date: new Date()
    }),
    // new webpack.optimize.SplitChunksPlugin({
    //   cacheGroups: { // 这里开始设置缓存的 chunks
    //     default: {
    //       minChunks: 2,
    //       priority: -20, // 缓存组优先级
    //       reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
    //     },
    //     //打包重复出现的代码
    //     vendor: {
    //       name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
    //       chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
    //       minChunks: 2,  // 最小 chunk ，默认1
    //       maxAsyncRequests: 1, // 最大异步请求数， 默认1
    //       maxInitialRequests: 5, // 最大初始化请求数，默认1
    //       minSize: 0 // 这个示例太小，不能创建commons块。
    //     },
    //     //打包第三方类库
    //     commons: {
    //       name: "commons",
    //       chunks: "initial",
    //       minChunks: Infinity
    //     }
    //   }
    // }),
    new webpack.NamedModulesPlugin(), //NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin()
  ]
}