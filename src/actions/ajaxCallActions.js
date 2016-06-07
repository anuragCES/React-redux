import * as ActionTypes from './actionTypes';

export function ajaxCallBegin(){
    "use strict";
    return {type: ActionTypes.BEGIN_AJAX_CALL};
}

export function ajaxCallError(){
    "use strict";
    return {type: ActionTypes.AJAX_CALL_ERROR};
}