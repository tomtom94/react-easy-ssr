import React, { FC, useState, useEffect, useCallback, useRef, PropsWithChildren } from 'react'
import { Route, Switch, withRouter, Redirect, RouteComponentProps, Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { useTheme, ThemeProvider } from 'react-jss'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons'
import CssBaseline from './components/CssBaseline'
import defaultTheme from './assets/jss/theme'
import Footer from './components/Footer'
import Header from './components/Header'

import { ReduxState } from './store/rootReducer'
import { ActionsRedux } from './store/actions/index'
import appStyle from './assets/jss/views/appStyle'
import appleTouchIcon57 from './assets/images/icons/apple-icon-57x57.png'
import appleTouchIcon60 from './assets/images/icons/apple-icon-60x60.png'
import appleTouchIcon72 from './assets/images/icons/apple-icon-72x72.png'
import appleTouchIcon76 from './assets/images/icons/apple-icon-76x76.png'
import appleTouchIcon114 from './assets/images/icons/apple-icon-114x114.png'
import appleTouchIcon120 from './assets/images/icons/apple-icon-120x120.png'
import appleTouchIcon144 from './assets/images/icons/apple-icon-144x144.png'
import appleTouchIcon152 from './assets/images/icons/apple-icon-152x152.png'
import appleTouchIcon180 from './assets/images/icons/apple-icon-180x180.png'
import icon192 from './assets/images/icons/android-icon-192x192.png'
import icon32 from './assets/images/icons/favicon-32x32.png'
import icon96 from './assets/images/icons/favicon-96x96.png'
import icon16 from './assets/images/icons/favicon-16x16.png'
import msApplication144 from './assets/images/icons/ms-icon-144x144.png'
import routes from './views/routes'
import './assets/fonts/stylesheet.css'

library.add(faFacebook, faTwitter, faSpinner, faBars, faExclamationTriangle)

type Props = RouteComponentProps

const AppProvider: FC<Props> = props => (
  <ThemeProvider theme={defaultTheme}>
    <App {...props} />
  </ThemeProvider>
)

const App: FC<Props> = props => {
  const theme = useTheme()
  const classes: any = appStyle({ theme })

  const dispatch = useDispatch()
  const app = useSelector((state: ReduxState) => state.app)
  const { pathname, search } = useSelector((state: ReduxState) => state.router.location)

  const { ...rest } = props // Just the RouteComponentProps

  const oldPage = useRef(pathname)
  useEffect(() => {
    if (pathname !== oldPage.current) {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } catch (error) {
        // for older browser
        window.scrollTo(0, 0)
      }
      oldPage.current = pathname
    }
  }, [pathname])

  const title = 'React easy SSR'
  const description = 'Just enjoy the server side rendering'

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="robots" content="index, follow" />
        <link rel="apple-touch-icon" sizes="57x57" href={appleTouchIcon57} />
        <link rel="apple-touch-icon" sizes="60x60" href={appleTouchIcon60} />
        <link rel="apple-touch-icon" sizes="72x72" href={appleTouchIcon72} />
        <link rel="apple-touch-icon" sizes="76x76" href={appleTouchIcon76} />
        <link rel="apple-touch-icon" sizes="114x114" href={appleTouchIcon114} />
        <link rel="apple-touch-icon" sizes="120x120" href={appleTouchIcon120} />
        <link rel="apple-touch-icon" sizes="144x144" href={appleTouchIcon144} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleTouchIcon152} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon180} />
        <link rel="icon" type="image/png" sizes="192x192" href={icon192} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="96x96" href={icon96} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={msApplication144} />
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.mywebsite.com" />
      </Helmet>
      <main className={classes.app}>
        <Header {...rest} />
        <section className={classes.section}>
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact={typeof route.exact !== 'undefined' ? route.exact : false}
                path={route.path}
                key={i}
                render={({ ...routerProps }) => <route.component {...rest} {...routerProps} />}
              />
            ))}
          </Switch>
        </section>
        <Footer {...rest} />
      </main>
    </div>
  )
}

export default hot(withRouter(AppProvider))
