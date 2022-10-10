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

const action = <T = { body?: unknown; error?: unknown }>(type: string, payload?: T) => {
  return { type, ...payload }
}

export interface ActionDispatcher {
  request: (body: unknown) => { type: string } & { body: unknown }
  success: (body: unknown, response: unknown) => { type: string } & { body: unknown; response: unknown }
  failure: (body: unknown, error: unknown) => { type: string } & { body: unknown; error: unknown }
}

export const movies: ActionDispatcher = {
  request: body => action(MOVIES[REQUEST], { body }),
  success: (body, response) => action(MOVIES[SUCCESS], { body, response }),
  failure: (body, error) => action(MOVIES[FAILURE], { body, error })
}

export const triggerMovies = (dispatchKind: 'GET_MOVIES') => action(TRIGGER_MOVIES, { dispatchKind })
export const clearMovies = () => action(CLEAR_MOVIES)
