import { combineReducers } from 'redux'

import * as ActionTypes from '../actions'

interface MoviesState {
  isLoading: boolean
  data: any[]
  error?: { message: string; status: number; isBrowser: boolean }
}

const INITIAL_STATE_MOVIES: MoviesState = {
  isLoading: true,
  data: []
}

const movies = (state = INITIAL_STATE_MOVIES, action) => {
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
      let data = []
      if (action.body.dispatchKind === 'GET_MOVIES') {
        data = action.response.results
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
        error: { message: action.error.message, status: action.error.status, isBrowser: process.env.BROWSER }
      }
    case ActionTypes.CLEAR_MOVIES:
      delete copyState.error
      return {
        ...state
      }
    default:
      return state
  }
}

/** *************************************************************************** */
/** ***************************** REDUCERS ************************************ */
/** *************************************************************************** */

export interface AppState {
  movies: MoviesState
}

export default combineReducers<AppState>({
  movies
})
