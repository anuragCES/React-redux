import * as ActionTypes from './../actions/actionTypes';
import InitialState from './initialState';

export default function authorReducer(state = InitialState.authors, action = []){
    "use strict";

    switch (action.type){

        case ActionTypes.LOAD_AUTHORS: {
            return action.authors;
        }

        default :
            return state;
    }
}
