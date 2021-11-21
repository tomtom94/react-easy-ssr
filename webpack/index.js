module.exports = env => {
  process.env.BACKEND_BASE_URL = 'https://api.themoviedb.org'
  if (typeof env !== 'undefined' && env === 'development') {
    process.env.NODE_ENV = 'development'
    return [require('./webpack.client.dev'), require('./webpack.server.dev')]
  }
  process.env.NODE_ENV = 'production'
  return [require('./webpack.client.prod'), require('./webpack.server.prod')]
}
