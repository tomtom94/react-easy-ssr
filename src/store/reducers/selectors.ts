/**
 * Do we allow to fetch the data ?
 */
export const moviesLoadable = state => !state.app.movies.error && state.app.movies.data.length === 0

/**
 * Do we allow to clean the data ?
 */
export const moviesCleanable = state => state.app.movies.error && state.app.movies.error.isBrowser
