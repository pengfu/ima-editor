const { join } = require('path')
const appPath = join(__dirname, '../app')
const generateCssLoader = require('./generateCssLoader')
const { eslint } = require('../config')
const loaders = [
  {
    test: /\.jsx?$/,
    include: [appPath],
    use: [
      {
        loader: 'happypack/loader?id=jsx'
      }
    ]
  },
  {
    test: /\.tsx?$/,
    use: [{ loader: 'awesome-typescript-loader' }]
  },
  generateCssLoader({
    include: [appPath],
    exclude: [join(appPath, 'style')],
    happyId: 'css_modules_post'
  }),
  generateCssLoader({
    include: [join(appPath, 'style')],
    happyId: 'css_post'
  }),
  generateCssLoader({
    include: /node_modules/,
    happyId: 'css'
  }),
  // generateCssLoader({
  //     include: [
  //         /node_modules/,
  //         path.join(appPath, 'style')
  //     ],
  //     happyId: 'less',
  //     test:/\.less$/
  // }),
  {
    test: /\.(png|jpe?g|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: '[hash:5].[name].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }
    ]
  }
]
if (eslint) {
  loaders.push({
    test: /\.jsx?$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [join(__dirname, '../app')]
  })
}
module.exports = loaders
