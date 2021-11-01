const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const { paths } = require('../scripts/utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  entry: {
    server: [paths.srcServer]
  },
  output: {
    path: paths.serverBuild,
    filename: 'server.js',
    publicPath: paths.publicPath,
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
      'process.env.BROWSER': 'false'
    })
  ],
  externals: [nodeExternals()],
  stats: 'minimal'
}
