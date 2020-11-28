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
    compiler.hooks.done.tap(name, stats => {
      if (!stats.hasErrors()) {
        return resolve(console.log(`Successfully compiled ${name}`))
      }
      return reject(new Error(`Failed to compile ${name}`))
    })
  })
}

module.exports = {
  compilerPromise,
  paths
}
