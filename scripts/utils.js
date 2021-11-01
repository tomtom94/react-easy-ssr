const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const paths = {
  dist: resolveApp('dist'),
  publicPath: '/static/',
  clientBuild: resolveApp('dist/client'),
  serverBuild: resolveApp('dist/server'),
  srcClient: resolveApp('src/index.tsx'),
  srcServer: resolveApp('src/server/index.tsx'),
  src: resolveApp('src')
}

const compilerPromise = (name, compiler) => {
  return new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      console.log(`Compiling ${name} please wait...`)
    })

    compiler.hooks.failed.tap(name, error => {
      console.log(error)
    })
    compiler.hooks.done.tap(name, stats => {
      if (!stats.hasErrors()) {
        resolve()
      }
      stats.compilation.errors.forEach(error => {
        console.error(error)
      })
      reject(new Error(`Failed to compile ${name}`))
    })
  })
}

const compilation = (err, stats, format) => {
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error(err.details)
    }
    return
  }

  console.log(stats.toString(format))

  const info = stats.toJson(format)

  if (stats.hasErrors()) {
    info.errors.forEach(error => {
      console.error(error.message)
    })
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach(warning => {
      console.warn(warning.message)
    })
  }
}

module.exports = {
  compilerPromise,
  paths,
  compilation
}
