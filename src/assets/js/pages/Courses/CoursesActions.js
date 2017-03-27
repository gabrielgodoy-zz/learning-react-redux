import * as types from './CoursesConstants';
import CourseApi from '../../../../api/mockCourseApi';

export function createCourse(course) { // eslint-disable-line
  return {
    type: types.CREATE_COURSE,
    course,
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
  };
}

export function loadCourses() {
  return function(dispatch) { // eslint-disable-line
    return CourseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch((error) => {
      throw error;
    });
  };
}
