import * as actionTypes from './../actions/actionTypes';
import InitialState from './initialState';

// Returns wheather action type ends with success or not
function actionTypeEndsWithSuccess(action) {
    return action.substr(action.length - 8) == '_SUCCESS';
}

export default function ajaxCallReducer(state = InitialState.numOfAjaxCallInProgress, action = []){
    "use strict";
    if(action.type == actionTypes.BEGIN_AJAX_CALL){
        return state + 1;
    }
    // This case will help us to remove loading indicator out of the screen
    else if(action.type == actionTypes.AJAX_CALL_ERROR || 
        actionTypeEndsWithSuccess(action.type)){
        return state - 1;
    }

    return state;
}