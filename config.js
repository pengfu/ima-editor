const path = require('path')
let localConfig
try {
  localConfig = require('./local.config')
} catch (e) {
  localConfig = {}
}
/**
 * --------这个文件不要改动-----------这个文件不要改动------------这个文件不要改动----------------
 */
/*
 如果需要改配置的话，自己在
 根目录下新建一个local.config.js，
 来覆盖此文件中的配置,local.config.js中配置的写法和此文件中的
 配置一样，仅仅只是用来覆盖而已,但它是被git忽视的，不会上传
 */
module.exports = Object.assign(
  {
    entrys: {
      app: path.join(__dirname, '/app/')
    },
    outputPath: path.join(__dirname, '/dist/'),
    publicPath: './',
    eslint: false,
    port: 3003,
    prodSourceMap: false,
    proxyTable: {
      '/index.php': 'https://dev.haicaoyun.com'
    }
  },
  localConfig
)
/**
 * --------这个文件不要改动-----------这个文件不要改动------------这个文件不要改动----------------
 */
