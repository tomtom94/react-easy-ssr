export const moviesLoadable = state => state.app.movies.data.length === 0
export const moviesCleanable = state => Object.prototype.hasOwnProperty.call(state.app.movies, 'error')
