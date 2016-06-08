import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactTestUtil from 'react-addons-test-utils';
import * as courseActions from './../actions/courseAction';
import courseReducer from './courseReducer';

describe('Course Reducer', () => {

    it('should add when new course is passed CREATE_COURSE_SUCCESS', () => {
        "use strict";
        const initState = [
            {
                id: 'A',
                title: 'ATitle'
            },
            {
                id: 'B',
                title: 'BTitle'
            }
        ];

        const newCourse = {
            id: 'C',
            title: 'CTitle'
        };

        const action = courseActions.createCourseSuccess(newCourse);

        const newState = courseReducer(initState, action);

        expect(newState.length).toEqual(3);
    });

    it('should update when new course is passed UPDATE_COURSE_SUCCESS', () => {
        "use strict";
        const initState = [
            {
                id: 'A',
                title: 'ATitle'
            },
            {
                id: 'B',
                title: 'BTitle'
            }
        ];

        const updateCourse = {
            id: 'B',
            title: 'BnewTitle'
        };

        const action = courseActions.updateCourseSuccess(updateCourse);
        const newState = courseReducer(initState, action);
        const updatedCourse = newState.find(a => a.id == updateCourse.id);
        const untouchedCourse = newState.find(a => a.id != updateCourse.id);

        expect(updatedCourse.title).toEqual('BnewTitle');
        expect(untouchedCourse.title).toEqual('ATitle');
    });
});