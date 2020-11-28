const webpack = require('webpack')
const nodemon = require('nodemon')
const rimraf = require('rimraf')
const path = require('path')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack')('development')
const cors = require('cors')

const { compilerPromise, paths } = require('./utils')

const PORT = 3001

const app = express()

const start = async () => {
  rimraf.sync(paths.dist)

  const [clientConfig, serverConfig] = webpackConfig
  clientConfig.entry.bundle = [`webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`, ...clientConfig.entry.bundle]

  clientConfig.output.hotUpdateMainFilename = 'updates/[hash].hot-update.json'
  clientConfig.output.hotUpdateChunkFilename = 'updates/[id].[hash].hot-update.js'

  const multiCompiler = webpack([clientConfig, serverConfig])

  const clientCompiler = multiCompiler.compilers.find(compiler => compiler.name === 'client')
  const serverCompiler = multiCompiler.compilers.find(compiler => compiler.name === 'server')

  const clientPromise = compilerPromise('client', clientCompiler)
  const serverPromise = compilerPromise('server', serverCompiler)

  const watchOptions = {
    ignored: /node_modules/,
    stats: clientConfig.stats
  }

  app.use(cors())

  app.use(
    webpackDevMiddleware(clientCompiler, {
      logLevel: 'warn',
      publicPath: clientConfig.output.publicPath,
      stats: clientConfig.stats,
      watchOptions
    })
  )

  app.use(webpackHotMiddleware(clientCompiler))

  app.listen(PORT, err => {
    if (err) console.log(err)
    else console.log(`Hot dev server middleware port : ${PORT} 🌎`)
  })

  serverCompiler.watch(watchOptions, (error, stats) => {
    if (!error && !stats.hasErrors()) {
      console.log(stats.toString(serverConfig.stats))
      return
    }

    if (error) {
      console.log(error)
    }

    if (stats.hasErrors()) {
      const info = stats.toJson()
      const errors = info.errors[0].split('\n')
      console.log(errors[0])
      console.log(errors[1])
      console.log(errors[2])
    }
  })

  // wait until client and server is compiled
  try {
    await serverPromise
    await clientPromise
  } catch (error) {
    console.log(error.message)
  }

  const script = nodemon({
    script: `${paths.serverBuild}/server.js`,
    ignore: ['src', 'webpack', 'scripts', 'dist/client'],
    delay: 200
  })

  script.on('restart', () => {
    console.log('Server side app has been restarted')
  })

  script.on('quit', () => {
    console.log('Process ended')
    process.exit()
  })

  script.on('error', () => {
    console.log('An error occured. Exiting')
    process.exit(1)
  })
}

start()
