const paths = require('./paths')
const fs = require('fs')
const cp = require('child_process')

const start = () => {
  process.env.NODE_ENV = 'production'
  const app = `${paths.serverBuild}/server.js`
  try {
    if (fs.existsSync(app)) {
      cp.fork(`${app}`)
    } else {
      console.log(`Please run "npm run build" before`)
    }
  } catch (error) {
    console.log(error.message)
  }
}

start()
