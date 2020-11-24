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

module.exports = paths
