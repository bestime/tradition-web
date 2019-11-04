const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('../webpack.config.js');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cusConf = require('../html.config.prod')

module.exports = merge(config, {
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{
      from: './public/',
      to: './',
      ignore: ['*.html']
    }]),
    new HtmlWebpackPlugin({
      title: '生产环境',
      filename: 'index.html', 
      inject: 'body',
      template: 'public/index.html', //本地自定义模板
      hash: true,
      // minify: { // 压缩HTML文件
      //   removeComments: false, // 移除HTML中的注释
      //   collapseWhitespace: false, // 删除空白符与换行符
      //   minifyCSS: false// 压缩内联css
      // },
      ...cusConf
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