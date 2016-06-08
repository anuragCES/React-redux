import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from './../reducers/index';
import initialState from './../reducers/initialState';
import * as courseActions from './../actions/courseAction';

describe('Store', () => {
    "use strict";
   it('should handle creating courses', () => {

        const store = createStore(rootReducer, initialState);
        const course = {
            title: "ATEST"
        };

       const action = courseActions.createCourseSuccess(course);
       store.dispatch(action);

       const actual = store.getState().courses[0];
       const expected = {
           title: "ATEST"
       };

       expect(actual).toEqual(expected);

   });
});