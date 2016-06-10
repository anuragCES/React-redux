/**
 * Created by anuragsharma on 6/4/16.
 */
// Cover the functions not available with ES5
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from './Routes.js';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCoursesSuccess} from './actions/courseAction';
import {loadAuthors} from './actions/authorAction';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import {incrementAsync} from './sagas/actionSagas';
import * as ActionTypes from './actions/actionTypes';

// We dont need to initialze store because we are providing default value to each reducer
// check out the courseReducer for more reference
const store = configureStore();

const action = type => store.dispatch({type})
console.log("init");
store.dispatch(action(ActionTypes.LOAD_COURSES_SUCCESS));
//store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
    </Provider>,
    document.getElementById('app')
);
