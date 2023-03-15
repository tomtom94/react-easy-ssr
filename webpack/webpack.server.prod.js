const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const { paths } = require('../scripts/utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    server: [paths.srcServer]
  },
  output: {
    path: paths.serverBuild,
    filename: 'index.js',
    publicPath: process.env.STATIC_FILES_URL ? `${process.env.STATIC_FILES_URL}${paths.publicPath}` : `${paths.publicPath}`,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: require('./loaders.server.js'),
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'false',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL),
      'process.env.STATIC_FILES_URL': JSON.stringify(process.env.STATIC_FILES_URL) // just used in src/server/renderFullPage.ts
    })
  ],
  externals: [nodeExternals()],
  stats: 'normal'
}
