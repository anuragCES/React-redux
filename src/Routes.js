import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/HomePage';
import About from './components/about/AboutPage';
import Courses from './components/courses/CoursePage';
import ManageCourse from './components/courses/ManageCoursePage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Courses} />
        <Route path="about" component={About} />
        <Route path="/" component={Courses} />
        <Route path="course" component={ManageCourse} />
        <Route path="courses" component={Courses} />
        <Route path="course/:id" component={ManageCourse} />
    </Route>
);