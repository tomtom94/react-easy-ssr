const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base: string): { [key: string]: string } {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}
export const MOVIES = createRequestTypes('MOVIES')

export const TRIGGER_MOVIES = 'TRIGGER_MOVIES'
export const CLEAR_MOVIES = 'CLEAR_MOVIES'

const action = <T = {}>(type: string, payload?: T) => {
  return { type, ...payload }
}
export const movies = {
  request: body => action(MOVIES[REQUEST], { body }),
  success: (body, response) => action(MOVIES[SUCCESS], { body, response }),
  failure: (body, error) => action(MOVIES[FAILURE], { body, error })
}

export interface ActionsRedux {
  triggerMovies?: (dispatchKind: 'GET_MOVIES') => void
  clearMovies?: () => void
}

export const triggerMovies = dispatchKind => action(TRIGGER_MOVIES, { dispatchKind })
export const clearMovies = () => action(CLEAR_MOVIES)
