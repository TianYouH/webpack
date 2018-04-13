const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist')
  }
}  