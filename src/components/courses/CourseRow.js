import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseRow = ({course, deleteProject}) => {
    "use strict";
    return (
        <tr>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>
                <input 
                    type="button" 
                    name={course.id}
                    className="btn btn-primary"
                    onClick={deleteProject}
                    value="Delete"/>
            </td>
        </tr>
    );
};

CourseRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseRow;