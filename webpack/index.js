require('dotenv').config()

module.exports = (env) => {
  if (typeof env !== 'undefined' && env === 'development') {
    return [require('./webpack.client.dev'), require('./webpack.server.dev')]
  }
  return [require('./webpack.client.prod'), require('./webpack.server.prod')]
}
