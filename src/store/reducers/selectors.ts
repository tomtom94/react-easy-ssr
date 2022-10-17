import { ReduxState } from '../rootReducer'

export const moviesLoadable = (state: ReduxState) => !state.app.movies.error && state.app.movies.data.length === 0

export const moviesCleanable = (state: ReduxState) => state.app.movies.error && state.app.movies.error.isBrowser
