const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const { paths } = require('../scripts/utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    server: [paths.srcServer]
  },
  output: {
    path: paths.serverBuild,
    filename: 'index.js',
    publicPath: paths.publicPath,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: require('./loaders.server.js'),
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'false',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL)
    })
  ],
  externals: [nodeExternals()],
  stats: 'minimal'
}
