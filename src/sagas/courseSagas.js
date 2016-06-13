import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import courseApi from './../api/mockCourseApi';
import * as ActionTypes from './../actions/actionTypes';
import {browserHistory} from 'react-router';

// Our worker Saga: will perform the async task
export function* loadCourses() {
  const courses = yield call(courseApi.getAllCourses);
  yield put({type: ActionTypes.LOAD_COURSES, courses});
}

// Our watcher Saga: spawn a new task on each action
export function* watchLoadCourses() {
  yield* takeEvery(ActionTypes.LOAD_COURSES_SUCCESS, loadCourses);
}

function* fetchUser(action) {
   try {
      const course = yield call(courseApi.saveCourse, action.course);     
      action.course.id? 
      yield put({type: ActionTypes.UPDATE_COURSE_SUCCESS, course}):
      yield put({type: ActionTypes.CREATE_COURSE_SUCCESS, course});
      browserHistory.push('/courses');
   } catch (e) { 
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

export function* mySaga() {
  yield* takeEvery(ActionTypes.CREATE_COURSE, fetchUser);
}
