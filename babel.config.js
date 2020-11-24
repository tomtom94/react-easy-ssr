module.exports = api => {
  api.cache(true)

  const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']

  const plugins = [
    '@loadable/babel-plugin',
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
    'react-hot-loader/babel'
  ]

  return {
    presets,
    plugins
  }
}
