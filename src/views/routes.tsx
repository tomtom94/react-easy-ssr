import loadable, { LoadableComponent } from '@loadable/component'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import Loading from './Exception/Loading'

// https://github.com/gregberge/loadable-components/issues/669#issuecomment-741539840
// const loadable = (importer: () => Promise<DefaultComponent<{ routeComponent: RouteComponentProps }>>) => {
//   const withoutForwardRef = process.env.BROWSER
//     ? (C: LoadableComponent<{ routeComponent: RouteComponentProps }>) => (props: { routeComponent: RouteComponentProps }) => (
//         // eslint-disable-next-line react/jsx-props-no-spreading, react/jsx-indent
//         <C {...props} />
//       )
//     : (C: LoadableComponent<{ routeComponent: RouteComponentProps }>) => (props: { routeComponent: RouteComponentProps }) => (
//         // eslint-disable-next-line react/jsx-indent
//         <C routeComponent={props.routeComponent} />
//       )

//   return withoutForwardRef(
//     baseLoadable(importer, {
//       fallback: <Loading />
//     })
//   )
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const Forbidden = loadable(() => import(/* webpackChunkName: "Forbidden" */ './Exception/403'), { fallback: <Loading /> })
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const ServerDown = loadable(() => import(/* webpackChunkName: "ServerDown" */ './Exception/500'), { fallback: <Loading /> })
const NoMatch = loadable(() => import(/* webpackChunkName: "NoMatch" */ './Exception/404'), { fallback: <Loading /> })

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './Home/index'), { fallback: <Loading /> })
const Movies = loadable(() => import(/* webpackChunkName: "Movies" */ './Movies/index'), { fallback: <Loading /> })
const AboutUs = loadable(() => import(/* webpackChunkName: "AboutUs" */ './AboutUs'), { fallback: <Loading /> })

export interface Route {
  name?: string
  exact?: boolean
  path?: string | string[]
  Component: LoadableComponent<{ routeComponent: RouteComponentProps }>
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
