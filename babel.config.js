function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web')
}
module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV)
  const web = api.caller(isWebTarget)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: web ? 'defaults' : { node: process.versions.node }, // https://babeljs.io/docs/en/options#targets
        useBuiltIns: web ? 'usage' : false, // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        ...(web && { corejs: { version: '3.25', proposals: false } }), // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        shippedProposals: web,
        debug: false // https://babeljs.io/docs/en/babel-preset-env#debug
      }
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development' // https://babeljs.io/docs/en/babel-preset-react/#development
      }
    ],
    '@babel/preset-typescript'
  ]

  const plugins = ['react-hot-loader/babel', '@loadable/babel-plugin']

  return {
    presets,
    plugins
  }
}
