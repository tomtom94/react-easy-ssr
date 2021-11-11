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

const compilerListener = (name, compiler) => {
  return new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      console.log(`Compiling ${name} please wait...`)
    })

    compiler.hooks.failed.tap(name, error => {
      reject(error)
    })
    compiler.hooks.done.tap(name, stats => {
      if (!stats.hasErrors()) {
        resolve()
      }
      if (stats.hasErrors()) {
        stats.compilation.errors.forEach(error => {
          reject(error)
        })
      }
      if (stats.hasWarnings()) {
        stats.compilation.warnings.forEach(warning => {
          console.warn(warning)
        })
      }
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
}

module.exports = {
  compilerListener,
  paths,
  compilation
}
