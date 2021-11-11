const webpack = require('webpack')
const rimraf = require('rimraf')
const webpackConfig = require('../webpack')('production')

const { compilerListener, paths, compilation } = require('./utils')

const build = async () => {
  try {
    rimraf.sync(paths.dist)

    const [clientConfig, serverConfig] = webpackConfig
    const multiCompiler = webpack([clientConfig, serverConfig])

    const clientCompiler = multiCompiler.compilers.find(compiler => compiler.name === 'client')
    const serverCompiler = multiCompiler.compilers.find(compiler => compiler.name === 'server')

    serverCompiler.run((err, stats) => compilation(err, stats, serverConfig.stats))
    clientCompiler.run((err, stats) => compilation(err, stats, clientConfig.stats))

    await Promise.all([compilerListener('client', clientCompiler), compilerListener('server', serverCompiler)])

    console.log('Webpack compilation client and server done !')
  } catch (error) {
    console.error(error)
  }
}

build()
