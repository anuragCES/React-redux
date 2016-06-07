import * as ActionTypes from './../actions/actionTypes';
import InitialState from './initialState';

export default function authorReducer(state = InitialState.authors, action = []){
    "use strict";

    switch (action.type){

        case ActionTypes.LOAD_AUTHOR_SUCCESS: {
            return action.authors;
        }

        default :
            return state;
    }
}