import { combineReducers } from 'redux'

import * as ActionTypes from '../actions'

interface MoviesState {
  isLoading: boolean
  data: any[]
  error?: { message: string; status: number }
}

const INITIAL_STATE_MOVIES: MoviesState = {
  isLoading: true,
  data: []
}

const movies = (state = INITIAL_STATE_MOVIES, action) => {
  const copyData = JSON.parse(JSON.stringify(state)) // Avoid JS mutation
  switch (action.type) {
    case ActionTypes.MOVIES.REQUEST:
      return {
        ...copyData,
        isLoading: true
      }
    case ActionTypes.MOVIES.SUCCESS:
      delete copyData.error
      let data = []
      if (action.body.page === 'get') {
        data = action.response.results
      }
      return {
        ...copyData,
        isLoading: false,
        data
      }
    case ActionTypes.MOVIES.FAILURE:
      return {
        ...copyData,
        isLoading: false,
        error: { message: action.error.message, status: action.error.status }
      }
    case ActionTypes.CLEAR_MOVIES:
      delete copyData.error
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
