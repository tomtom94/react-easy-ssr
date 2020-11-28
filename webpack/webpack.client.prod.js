const path = require('path')
const webpack = require('webpack')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { compilerPromise, paths } = require('../scripts/utils')

module.exports = {
  name: 'client',
  mode: 'production',
  target: 'web',
  entry: {
    bundle: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcClient]
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: 'bundle-[hash].js',
    publicPath: paths.publicPath
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: require('./loaders.client.js'),
  plugins: [
    new LoadablePlugin(),
    new ManifestPlugin({
      seed: {
        name: 'mywebsite',
        short_name: 'mywebsite',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
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
  stats: 'minimal'
}
