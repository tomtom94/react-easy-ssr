const webpack = require('webpack')
const rimraf = require('rimraf')
const webpackConfig = require('../webpack')('production')

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

  // wait until client and server is compiled
  try {
    await serverPromise
    await clientPromise
    console.log('Webpack compilation client and server done !')
  } catch (error) {
    console.log(error.message)
  }
}

build()
