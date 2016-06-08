import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactTestUtil from 'react-addons-test-utils';
import * as courseActions from './courseAction';
import * as ActionTypes from './actionTypes';
import thunks from 'redux-thunk';
import configureMockStore from 'redux-mock-store';


describe('Course Actions', () => {
    describe('createCourseSuccess', () => {

        it('should create CREATE_COURSE_SUCCESS', ()=> {
            const inputCourse = {
                id: 'test',
                title: 'testTitle'
            };

            const expectedAction = {
                type: ActionTypes.CREATE_COURSE_SUCCESS,
                course: inputCourse
            };

            const action = courseActions.createCourseSuccess(inputCourse);

            expect(action).toEqual(expectedAction);
        });
    });

});

const middleware = [thunks];
const mockStore = configureMockStore(middleware);

describe('Async Thunks', () => {
    //it('should load the courses and begin ajax call', (done) => {
    //    "use strict";
    //
    //    // Test Data
    //    const expectedActions = [
    //        {type: ActionTypes.BEGIN_AJAX_CALL},
    //        {type: ActionTypes.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'A', title: 'ATtile'}]}}
    //    ]
    //
    //    const store = mockStore({courses: []}, expectedActions);
    //    console.log(store.getActions());
    //    store.dispatch(courseActions.loadCourses()).then(() => {
    //        const actions = state.getActions();
    //        console.log(actions);
    //        //expect(actions[0].type).toEqual(ActionTypes.BEGIN_AJAX_CALL);
    //        //expect(actions[1].type).toEqual(ActionTypes.LOAD_COURSES_SUCCESS);
    //        done();
    //    });
    //});
});
