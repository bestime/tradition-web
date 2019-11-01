const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{
      from: __dirname + '/public/',
      to: __dirname + '/dist/',
      ignore: ['*.html']
    }]),
    new HtmlWebpackPlugin({
      title: 'Production',
      filename: 'index.html', 
      inject: 'body',
      static: './',
      template: 'public/index.html', //本地自定义模板
    }),
    new UglifyJSPlugin({
      uglifyOptions: {         
        ie8: true,
        ecma: 5,
        warnings: false,
        compress: true,
        output: {
          beautify: false,
          comments: true
        }
      }
    })
  ]
  
});