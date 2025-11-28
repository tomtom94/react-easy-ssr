import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { mainSlice } from './features/mainSlice'
import { moviesApiSlice } from './features/moviesApiSlice'

const rootReducer = combineSlices(mainSlice, moviesApiSlice)
export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(moviesApiSlice.middleware)
    },
    preloadedState
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>
