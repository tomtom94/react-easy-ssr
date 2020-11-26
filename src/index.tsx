import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { hot } from 'react-hot-loader/root'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Provider } from 'react-redux'
import { loadableReady } from '@loadable/component'
import { JssProvider, SheetsRegistry, createGenerateId, jss } from 'react-jss'

import window from 'global/window'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import configureStore, { createHistory } from './store/configureStore'
import App from './App'
import rootSaga from './store/sagas'

const preloadedState = window.__PRELOADED_STATE__

const history = createHistory()

const store = configureStore(preloadedState, history)
store.runSaga(rootSaga)

jss.use(vendorPrefixer())

const HotApp = hot(App)

const Main = () => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    const fontAwesomeCssStyles = document.querySelector('#fontawesome-server-side')
    if (fontAwesomeCssStyles) {
      fontAwesomeCssStyles.parentNode.removeChild(fontAwesomeCssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <JssProvider jss={jss} classNamePrefix="app-">
            <HotApp />
          </JssProvider>
        </HelmetProvider>
      </ConnectedRouter>
    </Provider>
  )
}

const clientApp = () => {
  if (
    process.env.NODE_ENV === 'development' ||
    (process.env.NODE_ENV === 'production' &&
      (window.location.hostname === 'www.mywebsite.com' ||
        window.location.hostname === 'mywebsite.com' ||
        window.location.hostname === 'react-easy-ssr.herokuapp.com' ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '192.168.0.20'))
  ) {
    loadableReady(() => {
      ReactDOM.hydrate(<Main />, document.querySelector('#root'))
    })
  } else {
    // We don't want Google Cache to use our bundles JS and make whatever he wants with it
    console.error('Forbidden hostname')
  }
}

clientApp()
