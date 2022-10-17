import { take, put, call, fork, select, all, PutEffect, CallEffect } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import { moviesLoadable, moviesCleanable } from '../reducers/selectors'

import * as moviesApi from '../services/moviesApi'

import * as actions from '../actions'
import { ActionDispatcher, ActionDispatcherResponse } from '../actions'
import { CallApiResponse } from '../services/callApi'

// each entity defines 3 creators { request, success, failure }
const { movies } = actions

function* fetchEntity(
  entity: ActionDispatcher,
  apiFn: () => Promise<CallApiResponse>,
  body: unknown
): Generator<PutEffect<ActionDispatcherResponse> | CallEffect<CallApiResponse>, void, CallApiResponse> {
  yield put(entity.request(body))
  // eslint-disable-next-line no-unused-vars
  const { response, error } = yield call<(body: unknown) => Promise<CallApiResponse>>(apiFn, body)
  if (response) yield put(entity.success(body, response))
  else if (error) yield put(entity.failure(body, error))
}

// yeah! we can also bind Generators
export const moviesFetch = fetchEntity.bind(null, movies, moviesApi.movies)

/** *************************************************************************** */
/** ******************************* SAGAS ************************************* */
/** *************************************************************************** */

function* getMovies(dispatchKind: string): SagaIterator {
  const cleanable = yield select(moviesCleanable)
  if (cleanable) {
    yield put(actions.clearMovies())
  }
  const loadable = yield select(moviesLoadable)
  if (loadable) {
    yield call(moviesFetch, { dispatchKind })
  }
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

function* watchMovies(): SagaIterator {
  while (true) {
    const { dispatchKind } = yield take(actions.TRIGGER_MOVIES)
    if (dispatchKind === 'GET_MOVIES') {
      yield call(getMovies, dispatchKind)
    }
  }
}

export default function* root(): SagaIterator {
  yield all([
    fork(watchMovies)
    // You use one saga watcher per redux reducer (for example)
    // fork(watchAccount),
    // fork(watchTheaters),
    // fork(watchOthers1),
    // fork(watchOthers2),
    // fork(watchOthers3),
    // fork(watchOthers4)
  ])
}
