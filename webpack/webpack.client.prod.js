const path = require('path')
const webpack = require('webpack')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { paths } = require('../scripts/utils')

module.exports = {
  name: 'client',
  mode: 'production',
  target: 'web',
  entry: {
    bundle: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcClient]
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: 'bundle-[fullhash].js',
    publicPath: `https://react-easy-ssr-staticfiles.herokuapp.com/${paths.publicPath}`
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: require('./loaders.client.js'),
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'webpack-report.html',
      openAnalyzer: false
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'true',
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL)
    }),
    new CompressionPlugin({ algorithm: 'gzip' })
  ],
  stats: 'normal'
}
