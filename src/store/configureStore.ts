import { createBrowserHistory, createMemoryHistory, History } from 'history'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware, { END, SagaMiddleware } from 'redux-saga'

import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'

import createRootReducer from './rootReducer'
import { AppState } from './reducers'

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

export default function configureStore(preloadedState: { app: Partial<AppState> }, history: History) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares: any[] = []
  middlewares.push(sagaMiddleware)

  if (process.env.BROWSER && process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  const store: any = createStore(createRootReducer(history), preloadedState, applyMiddleware(...middlewares, routerMiddleware(history)))

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer(history))
    })
  }

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
