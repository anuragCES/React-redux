import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    // Short Hand propety name
    courses,
    authors
});

export default rootReducer;