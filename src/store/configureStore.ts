import createSagaMiddleware, { END } from 'redux-saga'
import { configureStore, PreloadedState, Middleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createRootReducer, { ReduxState } from './rootReducer'

export default (preloadedState: Partial<PreloadedState<ReduxState>>) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares: Middleware[] = [sagaMiddleware]

  if (process.env.BROWSER && process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  const store = configureStore({
    reducer: createRootReducer(),
    middleware: middlewares,
    devTools: process.env.BROWSER && process.env.NODE_ENV === 'development',
    preloadedState
  })

  if (process.env.BROWSER && process.env.NODE_ENV === 'development' && module.hot) {
    // https://redux.js.org/usage/configuring-your-store#hot-reloading
    module.hot.accept('./rootReducer', () => store.replaceReducer(createRootReducer()))
  }

  return { store, runSaga: sagaMiddleware.run, close: () => store.dispatch(END) }
}
