import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import app, { AppState } from './reducers/index'

export interface ReduxState {
  app: AppState
  router: RouterState
}

export default (history: History) =>
  combineReducers<ReduxState>({
    app,
    router: connectRouter(history)
  })
