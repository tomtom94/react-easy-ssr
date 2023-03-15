import { applyMiddleware, legacy_createStore, PreloadedState } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import { createLogger } from 'redux-logger'

import createRootReducer, { ReduxState } from './rootReducer'

export default function configureStore(preloadedState: Partial<PreloadedState<ReduxState>>) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares: any[] = []
  middlewares.push(sagaMiddleware)

  if (process.env.BROWSER && process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  const store: any = legacy_createStore(createRootReducer(), preloadedState, applyMiddleware(...middlewares))

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer())
    })
  }

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
