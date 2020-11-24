import React from 'react'
import loadable from '@loadable/component'
import Loading from './Exception/Loading'

// Loadable-component isn't compatible with typescript yet
// See this issue https://github.com/smooth-code/loadable-components/issues/458

const Forbidden = loadable(() => import(/* webpackChunkName: "Forbidden" */ './Exception/403'))
const NoMatch = loadable(() => import(/* webpackChunkName: "NoMatch" */ './Exception/404'))
const ServerDown = loadable(() => import(/* webpackChunkName: "ServerDown" */ './Exception/500'))

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './Home/index'), { fallback: <Loading /> })
const Movies = loadable(() => import(/* webpackChunkName: "Movies" */ './Movies/index'), { fallback: <Loading /> })
const AboutUs = loadable(() => import(/* webpackChunkName: "AboutUs" */ './AboutUs'), { fallback: <Loading /> })

const indexRoutes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    path: '/movies',
    component: Movies
  },
  {
    path: '/about-us',
    component: AboutUs
  },
  { name: 'NoMatch', component: NoMatch }
]

export default indexRoutes
