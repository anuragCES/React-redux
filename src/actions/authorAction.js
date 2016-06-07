import * as ActionTypes from './actionTypes';
import authorApi from './../api/mockAuthorApi';
import {ajaxCallBegin} from './ajaxCallActions';

export function loadAuthorSuccess(authors){
    "use strict";
    return {type: ActionTypes.LOAD_AUTHOR_SUCCESS, authors};
}

// Thunk API call
export function loadAuthors(){
    "use strict";
    return function(dispatch){
        dispatch(ajaxCallBegin());
        return authorApi.getAllAuthors().then( authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}