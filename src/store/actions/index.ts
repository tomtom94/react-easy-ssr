import { CallApiResponse, ErrorCallApiResponse, SuccessCallApiResponse } from '../services/callApi'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const createRequestTypes = (base: string): { [key: string]: string } =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {} as Record<string, string>)

export const MOVIES = createRequestTypes('MOVIES')

export const TRIGGER_MOVIES = 'TRIGGER_MOVIES'
export const CLEAR_MOVIES = 'CLEAR_MOVIES'

const action = (
  type: string,
  payload?: { dispatchKind?: string; body?: unknown; response?: SuccessCallApiResponse; error?: ErrorCallApiResponse }
) => ({
  type,
  ...payload
})

type ActionDispatcherResponse = { type: string; body?: unknown } & CallApiResponse
export interface ActionDispatcher {
  request: (body: unknown) => ActionDispatcherResponse
  success: (body: unknown, response: SuccessCallApiResponse) => ActionDispatcherResponse
  failure: (body: unknown, error: ErrorCallApiResponse) => ActionDispatcherResponse
}

export const movies: ActionDispatcher = {
  request: body => action(MOVIES[REQUEST], { body }),
  success: (body, response) => action(MOVIES[SUCCESS], { body, response }),
  failure: (body, error) => action(MOVIES[FAILURE], { body, error })
}

export const triggerMovies = (dispatchKind: 'GET_MOVIES') => action(TRIGGER_MOVIES, { dispatchKind })
export const clearMovies = () => action(CLEAR_MOVIES)
