import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer, { apiSlices } from './reducers'
import loggerMiddleware from './features/logger'

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: RootState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([
        ...apiSlices.map((apiSlice) => apiSlice.middleware),
        ...(process.env.NODE_ENV === 'development' ? [loggerMiddleware] : [])
      ])
    },
    preloadedState
  })

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>
