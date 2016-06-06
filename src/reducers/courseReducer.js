import * as ActionTypes from './../actions/actionTypes';
import InitialState from './initialState';

export default function courseReducer(state = InitialState.courses, action = []){
    "use strict";

    switch (action.type){
        case ActionTypes.CREATE_COURSE_SUCCESS: {
            // Violating immutability of redux
            //state.course = action.course;
            //return state;

            // Spread operator helps object assign method to create new object instance of the state
            // this is to consider immutability of the state in redux.
            return [...state, Object.assign({}, action.course)];
        }

        case ActionTypes.UPDATE_COURSE_SUCCESS: {
            return [...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)];
        }

        case ActionTypes.LOAD_COURSES_SUCCESS: {
            return action.courses;
        }

        default :
            return state;
    }
}