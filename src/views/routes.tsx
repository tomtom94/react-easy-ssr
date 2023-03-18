import loadable, { LoadableComponent } from '@loadable/component'
import React from 'react'
import Loading from './Exception/Loading'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const Forbidden = loadable(() => import(/* webpackChunkName: "Forbidden" */ './Exception/403'), { fallback: <Loading /> })
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const ServerDown = loadable(() => import(/* webpackChunkName: "ServerDown" */ './Exception/500'), { fallback: <Loading /> })
const NoMatch = loadable(() => import(/* webpackChunkName: "NoMatch" */ './Exception/404'), { fallback: <Loading /> })

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './Home/index'), { fallback: <Loading /> })
const Movies = loadable(() => import(/* webpackChunkName: "Movies" */ './Movies/index'), { fallback: <Loading /> })
const AboutUs = loadable(() => import(/* webpackChunkName: "AboutUs" */ './AboutUs'), { fallback: <Loading /> })

export interface Route {
  caseSensitive?: boolean
  path?: string | undefined
  Component: LoadableComponent<Record<string, unknown>>
}

const indexRoutes: Route[] = [
  {
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
  {
    path: '*',
    Component: NoMatch
  }
]

export default indexRoutes
