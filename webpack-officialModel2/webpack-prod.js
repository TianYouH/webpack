const merge = require('webpack-merge');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack-common');

module.exports = (merge, {
  plugins: [
    new uglifyjsWebpackPlugin()
  ]
})