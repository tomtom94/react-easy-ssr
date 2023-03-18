import React, { useEffect } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { Provider } from 'react-redux'
import { loadableReady } from '@loadable/component'
import { JssProvider, jss } from 'react-jss'

import window from 'global/window'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import configureStore from './store/configureStore'
import App from './App'
import rootSaga from './store/sagas'
import { BrowserRouter } from 'react-router-dom'

const preloadedState = window.__PRELOADED_STATE__

const { store, runSaga } = configureStore(preloadedState)
runSaga(rootSaga)

jss.use(vendorPrefixer())

const Main = () => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    const fontAwesomeCssStyles = document.querySelector('#fontawesome-server-side')
    if (fontAwesomeCssStyles?.parentNode) {
      fontAwesomeCssStyles.parentNode.removeChild(fontAwesomeCssStyles)
    }
  }, [])
  return (
    <Provider store={store}>
      <HelmetProvider>
        <JssProvider jss={jss} classNamePrefix="app-">
          <App />
        </JssProvider>
      </HelmetProvider>
    </Provider>
  )
}

const clientApp = () => {
  const { hostname } = window.location
  if (
    process.env.NODE_ENV === 'development' ||
    (process.env.NODE_ENV === 'production' &&
      (hostname === 'reacteasyssrjckf9fbl-reacteasyssrfront.functions.fnc.fr-par.scw.cloud' ||
        hostname === 'localhost' ||
        hostname === '192.168.0.20'))
  ) {
    const domNode = document.querySelector('#root')
    if (domNode) {
      loadableReady(() => {
        hydrateRoot(
          domNode,
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        )
      })
    }
  } else {
    // We don't want Google Cache to use our bundles JS and make whatever he wants with it
    console.error('Forbidden hostname')
  }
}

clientApp()
