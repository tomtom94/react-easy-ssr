import baseLoadable, { LoadableComponent } from '@loadable/component'
import React from 'react'
import Loading from './Exception/Loading'

// https://github.com/gregberge/loadable-components/issues/669#issuecomment-741539840
const loadable = importer => {
  const withoutForwardRef = process.env.BROWSER ? C => props => <C {...props} /> : C => C
  return withoutForwardRef(
    baseLoadable(importer, {
      fallback: <Loading />
    })
  )
}

const Forbidden = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "Forbidden" */ './Exception/403'))
const NoMatch = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "NoMatch" */ './Exception/404'))
const ServerDown = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "ServerDown" */ './Exception/500'))

const Home = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "Home" */ './Home/index'))
const Movies = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "Movies" */ './Movies/index'))
const AboutUs = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: "AboutUs" */ './AboutUs'))

export interface Route {
  name?: string
  exact?: boolean
  path?: string | string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: LoadableComponent<any>
}

const indexRoutes: Route[] = [
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
