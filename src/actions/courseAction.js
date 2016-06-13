import * as ActionTypes from './actionTypes';
import courseApi from './../api/mockCourseApi';
import {ajaxCallBegin, ajaxCallError} from './ajaxCallActions';

export function updateCourseSuccess(course){
    "use strict";
    return {type: ActionTypes.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course){
    "use strict";
    return {type: ActionTypes.CREATE_COURSE_SUCCESS, course};
}

// First action creator
export function saveCourse(course){
    "use strict";
    return {type: ActionTypes.CREATE_COURSE, course};
}

export function loadCoursesSuccess(courses){
    "use strict";
    return {type: ActionTypes.LOAD_COURSES, courses};
}
