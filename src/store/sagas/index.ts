import { take, put, call, fork, select, delay, all, takeEvery, takeLatest, PutEffect, CallEffect } from 'redux-saga/effects'
import { Saga, SagaIterator } from 'redux-saga'

import { moviesLoadable, moviesCleanable } from '../reducers/selectors'

import * as moviesApi from '../services/moviesApi'

import * as actions from '../actions'
import { ActionDispatcher } from '../actions'

// each entity defines 3 creators { request, success, failure }
const { movies } = actions

function* fetchEntity(
  entity: ActionDispatcher,
  apiFn: () => Promise<{ response?: any; error?: { status: any; message: any } }>,
  body: unknown
) {
  yield put(entity.request(body))
  const { response, error } = yield call(apiFn, body)
  if (response) yield put(entity.success(body, response))
  else yield put(entity.failure(body, error))
}

// yeah! we can also bind Generators
export const moviesFetch: (
  body: unknown
) => Generator<PutEffect<any> | CallEffect<unknown>, void, { response: any; error: any }> = fetchEntity.bind(null, movies, moviesApi.movies)

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
