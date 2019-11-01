const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    host: '127.0.0.1',
    port: '1314'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Production',
      filename: 'index.html', 
      inject: 'body',
      static: '/',
      template: 'public/index.html', //本地自定义模板
    })
  ]
});