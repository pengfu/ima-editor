const webpack = require('webpack')
const { join } = require('path')
const config = require('../config')
const util = require('./util')
const loaders = require('./loaders')
const defineDEV = util.getDefineENV()
const happyPacks = require('./happyPack')
const isDev = util.isDev()
const nodeModulesPath = join(__dirname, '../node_modules')
const define = {
  'process.env.NODE_ENV': isDev ? '"development"' : '"production"'
}
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
Object.keys(defineDEV).forEach(function(key) {
  define[key] = defineDEV[key]
})
const baceConfig = {
  cache: true,
  entry: util.getEntrys(),
  output: {
    path: config.outputPath,
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
    filename: isDev ? '[name].min.js' : '[name].[chunkhash:8].min.js'
  },
  module: {
    noParse: [
      join(nodeModulesPath, 'classnames/index.js'),
      join(nodeModulesPath, 'whatwg-fetch/fetch.js'),
      join(nodeModulesPath, 'moment/moment.js'),
      join(nodeModulesPath, 'moment/local/zh-cn.js')
    ],
    rules: loaders
  },
  resolve: {
    modules: [
      join(__dirname, '../app'),
      'node_modules'
    ],
    extensions: ['.js', '.css', '.jsx', '.pcss', '.tsx', '.ts'],
    alias: {
      '@': join(__dirname, '../app/components'),
      '@components': join(__dirname, '../app/components'),
      '@common': join(__dirname, '../app/common'),
      '@util': join(__dirname, '../app/util'),
      '@store': join(__dirname, '../app/baseStore'),
      '@mixins': join(__dirname, '../app/components/mixins'),
      '@http': join(__dirname, '../app/fetch'),
      '@HOC': join(__dirname, '../app/HOC'),
      '@api': join(__dirname, '../app/api'),
      '@constant': join(__dirname, '../app/constant')
    }
  },
  plugins: [
    new webpack.DefinePlugin(define),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      }
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
    ...happyPacks
  ]
}
module.exports = baceConfig
