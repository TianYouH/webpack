// 生产环境(production)
const webpack = require('webpack');
const merge = require('webpack-merge');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new uglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production') //--define process.env.NODE_ENV="'production'"
    })
  ]
})