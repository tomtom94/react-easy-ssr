/**
 * Do we allow to fetch the data ?
 */
export const moviesLoadable = state =>
  !Object.prototype.hasOwnProperty.call(state.app.movies, 'error') && state.app.movies.data.length === 0

/**
 * Do we allow to clean the data ?
 */
export const moviesCleanable = state =>
  Object.prototype.hasOwnProperty.call(state.app.movies, 'error') &&
  (state.app.movies.error.isBrowser || state.app.movies.data.length === 0)
