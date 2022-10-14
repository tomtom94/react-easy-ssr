import baseLoadable, { DefaultComponent, LoadableComponent } from '@loadable/component'
import React, { ReactNode } from 'react'
import { RouteComponentProps } from 'react-router'
import Loading from './Exception/Loading'

// https://github.com/gregberge/loadable-components/issues/669#issuecomment-741539840
const loadable = (importer: () => Promise<DefaultComponent<{ routeComponent: RouteComponentProps }>>) => {
  const withoutForwardRef = process.env.BROWSER
    ? (C: LoadableComponent<{ routeComponent: RouteComponentProps }>) => (props: { routeComponent: RouteComponentProps }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading, react/jsx-indent
        <C {...props} />
      )
    : (C: LoadableComponent<{ routeComponent: RouteComponentProps }>) => (props: { routeComponent: RouteComponentProps }) => (
        // eslint-disable-next-line react/jsx-indent
        <C routeComponent={props.routeComponent} />
      )

  return withoutForwardRef(
    baseLoadable(importer, {
      fallback: <Loading />
    })
  )
}

const Forbidden = loadable(() => import(/* webpackChunkName: "Forbidden" */ './Exception/403'))
const NoMatch = loadable(() => import(/* webpackChunkName: "NoMatch" */ './Exception/404'))
const ServerDown = loadable(() => import(/* webpackChunkName: "ServerDown" */ './Exception/500'))

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './Home/index'))
const Movies = loadable(() => import(/* webpackChunkName: "Movies" */ './Movies/index'))
const AboutUs = loadable(() => import(/* webpackChunkName: "AboutUs" */ './AboutUs'))

export interface Route {
  name?: string
  exact?: boolean
  path?: string | string[]
  Component: (props: { routeComponent: RouteComponentProps }) => JSX.Element
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
