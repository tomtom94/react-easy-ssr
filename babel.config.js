function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web')
}
module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV)
  const web = api.caller(isWebTarget)

  const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']

  const plugins = [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
    'react-hot-loader/babel',
    '@loadable/babel-plugin'
  ]
  if (web) {
    plugins.push('@babel/plugin-syntax-dynamic-import')
  }
  return {
    presets,
    plugins
  }
}
