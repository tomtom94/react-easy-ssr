import { take, put, call, fork, select, delay, all, takeEvery, takeLatest } from 'redux-saga/effects'
import { Saga, SagaIterator } from 'redux-saga'

import { moviesLoadable, moviesCleanable } from '../reducers/selectors'

import * as moviesApi from '../services/moviesApi'

import * as actions from '../actions'

// each entity defines 3 creators { request, success, failure }
const { movies } = actions

function* fetchEntity(entity, apiFn, body) {
  yield put(entity.request(body))
  const { response, error } = yield call(apiFn, body)
  if (response) yield put(entity.success(body, response))
  else yield put(entity.failure(body, error))
}

// yeah! we can also bind Generators
export const moviesFetch: Saga = fetchEntity.bind(null, movies, moviesApi.movies)

/** *************************************************************************** */
/** ******************************* SAGAS ************************************* */
/** *************************************************************************** */

function* getMovies(page): SagaIterator {
  const cleanable = yield select(moviesCleanable)
  if (cleanable) {
    yield put(actions.clearMovies())
  }
  const loadable = yield select(moviesLoadable)
  if (loadable) {
    yield call(moviesFetch, { page })
  }
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

function* watchMovies(): SagaIterator {
  while (true) {
    const { page } = yield take(actions.TRIGGER_MOVIES)
    if (page === 'get') {
      yield call(getMovies, page)
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchMovies)])
}
