import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import courseApi from './../api/mockCourseApi';
import * as ActionTypes from './../actions/actionTypes';

// Our worker Saga: will perform the async task
export function* loadCourses() {
  const courses = yield call(courseApi.getAllCourses);
  yield put({type: ActionTypes.LOAD_COURSES, courses});
}

// Our watcher Saga: spawn a new task on each action
export function* watchLoadCourses() {
  yield* takeEvery(ActionTypes.LOAD_COURSES_SUCCESS, loadCourses);
}

export function* addCourse(course){
  const data = yield call(courseApi.saveCourse, course);
  console.log(data);
}

export function* createCourse(course) {
  yield take(ActionTypes.CREATE_COURSE, addCourse(course));
}
