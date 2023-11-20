import { combineReducers } from 'redux'
import { ErrorCallApiResponse, SuccessCallApiResponse } from '../services/callApi'

import * as ActionTypes from '../actions'

interface ActionDispatch {
  type: string
  body: { dispatchKind?: string }
  response: SuccessCallApiResponse
  error: ErrorCallApiResponse
}

interface MainState {
  language: null | string | string[]
  timezone: null | string
  userAgent: null | unknown
  hostname: null | string
}

export const INITIAL_STATE_MAIN: MainState = {
  language: null,
  timezone: null,
  userAgent: null,
  hostname: null
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
  data: { id: string; poster_path: string; title: string; overview: string; release_date: string }[]
  error?: ErrorCallApiResponse & { isBrowser: boolean }
}

export const INITIAL_STATE_MOVIES: MoviesState = {
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
      return {
        ...copyState,
        isLoading: false,
        ...(action.body.dispatchKind === 'GET_MOVIES' && { data: action.response.results })
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
