import { combineReducers } from 'redux'
import app, { AppState } from './reducers/index'

export interface ReduxState {
  app: AppState
}

export default () =>
  combineReducers<ReduxState>({
    app
  })
