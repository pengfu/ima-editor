const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { prodSourceMap, publicPath } = require('../config')
const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html',
    showErrors: true,
    inject: 'body',
    hash: false,
    favicon: 'assets/imgs/logo.png',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      chunksSortMode: 'dependency'
    },
    chunks: ['app', 'vendor', 'manifest']
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    minimize: true,
    compress: {
      warnings: false,
      drop_console: true,
      unused: true
    }
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new ExtractTextPlugin({
    filename: 'index.[contenthash:8].min.css',
    allChunks: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    filename: '[name].[chunkhash:8].min.js',
    minChunks: Infinity
  }),

  new webpack.ProgressPlugin((percentage, msg, current, active, modulepath) => {
    if (process.stdout.isTTY && percentage < 1) {
      process.stdout.cursorTo(0)
      modulepath = modulepath
        ? ' …' + modulepath.substr(modulepath.length - 30)
        : ''
      current = current ? ' ' + current : ''
      active = active ? ' ' + active : ''
      process.stdout.write(
        (percentage * 100).toFixed(0) +
          '% ' +
          msg +
          current +
          active +
          modulepath +
          ' '
      )
      process.stdout.clearLine(1)
    } else if (percentage === 1) {
      process.stdout.write('\n')
      console.log('100% 编译完成，等待部署...')
    }
  })
]
module.exports = merge(webpackConfig, {
  devtool: prodSourceMap ? '#source-map' : false,
  output: {
    publicPath
  },
  plugins
})
