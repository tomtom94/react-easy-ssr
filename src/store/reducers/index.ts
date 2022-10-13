import { combineReducers } from 'redux'
import { CallApiResponse, ErrorCallApiResponse, SuccessCallApiResponse } from '../services/callApi'

import * as ActionTypes from '../actions'

interface ActionDispatch {
  type: string
  body: { dispatchKind?: string }
  response?: SuccessCallApiResponse
  error?: ErrorCallApiResponse
}

interface MainState {
  language: undefined | string | string[]
  timezone: undefined | string
  userAgent: undefined | any
  hostname: undefined | string
}

const INITIAL_STATE_MAIN: MainState = {
  language: undefined,
  timezone: undefined,
  userAgent: undefined,
  hostname: undefined
}

const main = (state = INITIAL_STATE_MAIN, action: ActionDispatch) => {
  const copyState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    default:
      return copyState
  }
}

interface MoviesState {
  isLoading: boolean
  data: unknown[]
  error?: ErrorCallApiResponse & { isBrowser: boolean }
}

const INITIAL_STATE_MOVIES: MoviesState = {
  isLoading: true,
  data: []
}

const movies = (state = INITIAL_STATE_MOVIES, action: ActionDispatch) => {
  const copyState = JSON.parse(JSON.stringify(state)) // Avoid JS mutation
  switch (action.type) {
    case ActionTypes.MOVIES.REQUEST:
      delete copyState.error
      return {
        ...copyState,
        isLoading: true
      }
    case ActionTypes.MOVIES.SUCCESS:
      delete copyState.error
      let data: unknown = []
      if (action.body.dispatchKind === 'GET_MOVIES') {
        data = action.response?.results
      }
      return {
        ...copyState,
        isLoading: false,
        data
      }
    case ActionTypes.MOVIES.FAILURE:
      return {
        ...copyState,
        isLoading: false,
        error: { message: action.error?.message, status: action.error?.status, isBrowser: process.env.BROWSER }
      }
    case ActionTypes.CLEAR_MOVIES:
      delete copyState.error
      return {
        ...copyState
      }
    default:
      return copyState
  }
}

/** *************************************************************************** */
/** ***************************** REDUCERS ************************************ */
/** *************************************************************************** */

export interface AppState {
  main: MainState
  movies: MoviesState
}

export default combineReducers<AppState>({
  main,
  movies
})
