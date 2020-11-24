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
  compilerPromise
}
