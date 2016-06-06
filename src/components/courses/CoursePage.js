import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from './../../actions/courseAction';
import CourseList from './CourseList';

class CoursePage extends React.Component {

    constructor(props, context){
        "use strict";
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.loadCreateCoursePage = this.loadCreateCoursePage.bind(this);
    }

    loadCreateCoursePage(event){
        browserHistory.push('/course');
    }

    render() {
        return (
            <div>
                <h1>Meeting Minutes</h1>
                <input type="button" className="btn btn-primary"
                    onClick={this.loadCreateCoursePage} value="Add MOM"/>
                <CourseList courses={this.props.courses}/>
            </div>
        );
    }
}

CoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.object.isRequired
};

function mapStatetoProps(state, ownProps){
    "use strict";
    return {
        // state.courses is returned from the course reducer -- key courses is defined their
        // courses is this.props.courses
        courses: state.courses
    };
}

// dispatch - is passed by connect function
function mapDispatchToProps(dispatch){
    "use strict";
    //return {
    //    // Arrow function () = {} can be used without () too
    //    createCourse: course => dispatch(courseAction.createCourse(course))
    // };
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

// Alternate way
//const configureConnect = connect(mapStatetoProps)
//export configureConnect(CoursePage);

export default connect(mapStatetoProps, mapDispatchToProps)(CoursePage);