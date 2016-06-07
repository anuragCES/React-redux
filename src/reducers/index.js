import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
    // Short Hand propety name
    courses,
    authors,
    ajaxStatus
});

export default rootReducer;