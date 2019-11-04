const merge = require('webpack-merge');
const config = require('../webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cusConf = require('../html.config.dev')

// 获取IP
function getIP () {
	var interfaces = require('os').networkInterfaces();　　
  for (var devName in interfaces) {　　　　
    var iface = interfaces[devName];　　　　　　
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }　　
  }
}

module.exports = merge(config, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    host: `${getIP()}`,
    port: '1314'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: '开发环境',
      filename: 'index.html', 
      inject: 'body',
      template: 'public/index.html', //本地自定义模板
      hash: true,
      ...cusConf
    })
  ]
});