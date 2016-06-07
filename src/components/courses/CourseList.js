import React, {PropTypes} from 'react';
import CourseRow from './CourseRow';

const CourseList = ({courses}) => {
    "use strict";
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Project</th>
                </tr>
            </thead>
            <tbody>
            {courses.map(course =>
                <CourseRow key={course.id} course={course}/>
            )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.object.isRequired
};

export default CourseList;