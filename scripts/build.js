const webpack = require('webpack')
const rimraf = require('rimraf')
const webpackConfig = require('../webpack')('production')
const os = require('os')

const { compilerPromise, paths, compilation } = require('./utils')

const build = async () => {
  rimraf.sync(paths.dist)

  const [clientConfig, serverConfig] = webpackConfig
  const multiCompiler = webpack([clientConfig, serverConfig])

  const clientCompiler = multiCompiler.compilers.find(compiler => compiler.name === 'client')
  const serverCompiler = multiCompiler.compilers.find(compiler => compiler.name === 'server')

  const clientPromise = compilerPromise('client', clientCompiler)
  const serverPromise = compilerPromise('server', serverCompiler)

  serverCompiler.run((err, stats) => compilation(err, stats, serverConfig.stats))
  clientCompiler.run((err, stats) => compilation(err, stats, clientConfig.stats))

  try {
    // You don't need a Promise.all() here, just try to understand why this is high level, if you understand this you understand all about webpack
    // Just a tip, we launched ourself the compilations making 2 webpack.run() just above, we are just tapping the end of theses 2 processes
    await clientPromise
    await serverPromise
    console.log('Webpack compilation client and server done !')
  } catch (error) {
    console.log(error.message)
  }
}

build()
