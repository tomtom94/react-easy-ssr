import { createBrowserHistory, createMemoryHistory, History } from 'history'
import { applyMiddleware, legacy_createStore, PreloadedState } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'
import window from 'global/window'

import createRootReducer, { ReduxState } from './rootReducer'

export const createHistory = (initialEntries = ['/']) => {
  if (process.env.BROWSER) {
    const history = window.browserHistory || createBrowserHistory()
    if (process.env.NODE_ENV === 'development' && !window.browserHistory) {
      window.browserHistory = history
    }
    return history
  }
  return createMemoryHistory({ initialEntries })
}

export default function configureStore(preloadedState: Partial<PreloadedState<ReduxState>>, history: History) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares: any[] = []
  middlewares.push(sagaMiddleware)

  if (process.env.BROWSER && process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  const store: any = legacy_createStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(...middlewares, routerMiddleware(history))
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer(history))
    })
  }

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
