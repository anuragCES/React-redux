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
    // Course will be return with the key as course as it is ES6 - Short Hand Property Name
    return function(dispatch){
        dispatch(ajaxCallBegin());
        return courseApi.saveCourse(course).then( course => {
            course.id? dispatch(updateCourseSuccess(course))
            : dispatch(createCourseSuccess(course));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
}

export function loadCoursesSuccess(courses){
    "use strict";
    return {type: ActionTypes.LOAD_COURSES_SUCCESS, courses};
}

// Thunk API call
export function loadCourses(){
    "use strict";
    return function(dispatch){
        dispatch(ajaxCallBegin());
        return courseApi.getAllCourses().then( courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteCourseSuccess(courses){
    "use strict";
    return {type: ActionTypes.DELETE_COURSE_SUCCESS, courses};
}

// Thunk API call
export function deleteCourse(courseId){
    "use strict";
    return function(dispatch){
        dispatch(ajaxCallBegin());
        return courseApi.deleteCourse(courseId).then(courses=> {
            console.log(courses);
            dispatch(deleteCourseSuccess(courses));
        }).catch(error => {
            throw(error);
        });
        // return courseApi.getAllCourses().then( courses => {
        //     dispatch(loadCoursesSuccess(courses));
        // }).catch(error => {
        //     throw(error);
        // });
    };
}