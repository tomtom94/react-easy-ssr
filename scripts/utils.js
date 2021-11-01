const path = require('path')
const fs = require('fs')
const os = require('os')

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
        return resolve(console.log(`Successfully compiled ${name}`))
      }
      stats.compilation.errors.forEach(error => {
        console.log(error)
      })
      return reject(new Error(`Failed to compile ${name}`))
    })
  })
}

const compilation = (err, stats, format) => {
  if (!err && !stats.hasErrors()) {
    console.log(stats.toString(format))
    return
  }
  if (err) {
    console.error(err)
  }
  if (stats.hasErrors()) {
    const json = stats.toJson()
    console.error(json.errors.join(os.EOL))
  }
}

module.exports = {
  compilerPromise,
  paths,
  compilation
}
