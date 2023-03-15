module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)
  const web = api.caller((caller) => Boolean(caller && caller.target === 'web'))

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

  const plugins = ['@loadable/babel-plugin']

  if (web && process.env.NODE_ENV === 'development') {
    plugins.push('react-refresh/babel')
  }

  return {
    presets,
    plugins
  }
}
