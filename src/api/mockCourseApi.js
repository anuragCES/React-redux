import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "1",
        title: "Kinnser Link - Follow up",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "anurag-sharma",
        length: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem justo, commodo vitae suscipit ac, feugiat in leo. Nullam blandit, metus dictum dictum egestas, augue enim cursus massa, non scelerisque massa ipsum non tortor. Pellentesque porttitor tortor et ipsum accumsan, id tincidunt sapien dapibus. Fusce porta erat quis augue eleifend eleifend. Integer sed eros feugiat justo hendrerit sagittis. Mauris massa lectus, sagittis ut ex eu, feugiat varius mi. Maecenas erat ante, varius et blandit in, euismod vulputate ipsum. Integer sit amet erat sit amet leo interdum sodales. Pellentesque in felis lobortis magna pharetra condimentum. In ante justo, rhoncus et libero at, maximus ultricies nulla. Nullam iaculis lectus id iaculis ultrices.",
        category: "Kinnser Link"
    },
    {
        id: "2",
        title: "Kinnser Link - Daily status update",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "sawan-kumar",
        length: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem justo, commodo vitae suscipit ac, feugiat in leo. Nullam blandit, metus dictum dictum egestas, augue enim cursus massa, non scelerisque massa ipsum non tortor. Pellentesque porttitor tortor et ipsum accumsan, id tincidunt sapien dapibus. Fusce porta erat quis augue eleifend eleifend. Integer sed eros feugiat justo hendrerit sagittis. Mauris massa lectus, sagittis ut ex eu, feugiat varius mi. Maecenas erat ante, varius et blandit in, euismod vulputate ipsum. Integer sit amet erat sit amet leo interdum sodales. Pellentesque in felis lobortis magna pharetra condimentum. In ante justo, rhoncus et libero at, maximus ultricies nulla. Nullam iaculis lectus id iaculis ultrices.",
        category: "Smart Find"
    },
    {
        id: "3",
        title: "VOWHS - Project Signoff",
        watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        authorId: "anurag-sharma",
        length: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem justo, commodo vitae suscipit ac, feugiat in leo. Nullam blandit, metus dictum dictum egestas, augue enim cursus massa, non scelerisque massa ipsum non tortor. Pellentesque porttitor tortor et ipsum accumsan, id tincidunt sapien dapibus. Fusce porta erat quis augue eleifend eleifend. Integer sed eros feugiat justo hendrerit sagittis. Mauris massa lectus, sagittis ut ex eu, feugiat varius mi. Maecenas erat ante, varius et blandit in, euismod vulputate ipsum. Integer sit amet erat sit amet leo interdum sodales. Pellentesque in felis lobortis magna pharetra condimentum. In ante justo, rhoncus et libero at, maximus ultricies nulla. Nullam iaculis lectus id iaculis ultrices.",
        category: "VOWHS"
    },
    {
        id: "4",
        title: "Reiter - Daily Status",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "sawan-kumar",
        length: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem justo, commodo vitae suscipit ac, feugiat in leo. Nullam blandit, metus dictum dictum egestas, augue enim cursus massa, non scelerisque massa ipsum non tortor. Pellentesque porttitor tortor et ipsum accumsan, id tincidunt sapien dapibus. Fusce porta erat quis augue eleifend eleifend. Integer sed eros feugiat justo hendrerit sagittis. Mauris massa lectus, sagittis ut ex eu, feugiat varius mi. Maecenas erat ante, varius et blandit in, euismod vulputate ipsum. Integer sit amet erat sit amet leo interdum sodales. Pellentesque in felis lobortis magna pharetra condimentum. In ante justo, rhoncus et libero at, maximus ultricies nulla. Nullam iaculis lectus id iaculis ultrices.",
        category: "Reiter"
    },
    {
        id: "5",
        title: "Kinnser ADL - Daily Stand up",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "prateek-sharma",
        length: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem justo, commodo vitae suscipit ac, feugiat in leo. Nullam blandit, metus dictum dictum egestas, augue enim cursus massa, non scelerisque massa ipsum non tortor. Pellentesque porttitor tortor et ipsum accumsan, id tincidunt sapien dapibus. Fusce porta erat quis augue eleifend eleifend. Integer sed eros feugiat justo hendrerit sagittis. Mauris massa lectus, sagittis ut ex eu, feugiat varius mi. Maecenas erat ante, varius et blandit in, euismod vulputate ipsum. Integer sit amet erat sit amet leo interdum sodales. Pellentesque in felis lobortis magna pharetra condimentum. In ante justo, rhoncus et libero at, maximus ultricies nulla. Nullam iaculis lectus id iaculis ultrices.",
        category: "Kinnser ADL"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.courseId == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;
