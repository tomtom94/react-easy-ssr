const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const { compilerPromise, paths } = require('../scripts/utils')

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  entry: {
    server: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcServer]
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
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'false'
    })
  ],
  externals: [nodeExternals()],
  stats: 'minimal'
}
