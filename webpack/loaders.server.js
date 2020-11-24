const path = require('path')
const paths = require('../scripts/paths')

module.exports = {
  rules: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'css-loader',
          options: { onlyLocals: true }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|ico)$/,
      exclude: [path.join(paths.src, '/assets/images/icons/')],
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 150000,
            outputPath: 'assets/images',
            name: '[name].[ext]',
            emitFile: false
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|ico)$/,
      include: [path.join(paths.src, '/assets/images/icons/')],
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images/icons',
            name: '[name].[ext]',
            emitFile: false
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts',
            mimetype: 'application/font-woff',
            name: '[name].[ext]',
            emitFile: false
          }
        }
      ]
    },
    {
      test: /\.svg$/,
      use: [
        '@svgr/webpack',
        {
          loader: 'url-loader',
          options: {
            limit: 150000,
            outputPath: 'assets/images',
            name: '[name].[ext]',
            emitFile: false
          }
        }
      ]
    }
  ]
}
