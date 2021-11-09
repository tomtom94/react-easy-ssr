import loadable from '@loadable/component'
import Loading from './Exception/Loading'

const Forbidden = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "Forbidden" */ './Exception/403'))
const NoMatch = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "NoMatch" */ './Exception/404'))
const ServerDown = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "ServerDown" */ './Exception/500'))

const Home = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "Home" */ './Home/index'), { fallback: Loading })
const Movies = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "Movies" */ './Movies/index'), { fallback: Loading })
const AboutUs = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "AboutUs" */ './AboutUs'), { fallback: Loading })

const indexRoutes = [
  {
    exact: true,
    path: '/',
    Component: Home
  },
  {
    path: '/movies',
    Component: Movies
  },
  {
    path: '/about-us',
    Component: AboutUs
  },
  { name: 'NoMatch', Component: NoMatch }
]

export default indexRoutes
