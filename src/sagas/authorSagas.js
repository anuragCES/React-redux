import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import authorApi from './../api/mockAuthorApi';
import * as ActionTypes from './../actions/actionTypes';

export function* loadAuthors() {
  const authors = yield call(authorApi.getAllAuthors);
  yield put({type: ActionTypes.LOAD_AUTHORS, authors});
}

export function* watchAuthors() {
  yield* takeEvery(ActionTypes.LOAD_AUTHOR_SUCCESS, loadAuthors);
}
