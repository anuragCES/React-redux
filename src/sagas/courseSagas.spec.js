import test from 'tape';
import { loadCourses, createCourse } from './courseSagas';
import { put, call } from 'redux-saga/effects';
import * as ActionTypes from './../actions/actionTypes';
import courseApi from './../api/mockCourseApi';

test('Courses Saga', (assert) => {

    const gen = loadCourses();
    const courses = [1];

    const course = {
      course: {
        id: 'A',
        title: 'ATitle'
      }
    };

   let genCreateCourse = createCourse(course);

    assert.deepEqual(
      gen.next().value,
      call(courseApi.getAllCourses),
      'Should load courses using the API'  
    );

    assert.deepEqual(
      gen.next(courses).value,
      put({type: ActionTypes.LOAD_COURSES, courses}),
      'Should dispatch LOAD_COURSES_COMPLETED'
    );

    assert.deepEqual(
      genCreateCourse.next(course).value,
      call(courseApi.saveCourse, course.course),
      'Should Create a new Meeting minute'
    );

    assert.end();
});

