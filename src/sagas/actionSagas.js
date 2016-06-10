import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import courseApi from './../api/mockCourseApi';
import * as ActionTypes from './../actions/actionTypes';
import * as action from './../actions/courseAction';
// Test Sagas
export function* helloSaga() {
  console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log("interm 2");
  const coursesData = yield call(courseApi.getAllCourses);
  console.log("2");
  console.log(coursesData);
  return {type: ActionTypes.LOAD_COURSES, coursesData};
  //take({type: ActionTypes.LOAD_COURSES_SUCCESS, coursesData});
  //return {type: ActionTypes.LOAD_COURSES_SUCCESS, coursesData};
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  console.log("1");
  yield* takeEvery(ActionTypes.LOAD_COURSES_SUCCESS, incrementAsync);
}
