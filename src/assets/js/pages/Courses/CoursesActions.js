import * as types from './CoursesConstants';
import CourseApi from '../../../../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from '../../App/AppActions';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
  };
}

export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSES_SUCCESS,
    course,
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSES_SUCCESS,
    course,
  };
}

export function loadCourses() {
  return function (dispatch) { // eslint-disable-line
    dispatch(beginAjaxCall());
    return CourseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch((error) => {
      throw error;
    });
  };
}

// Save or update a course
export function saveCourse(course) {
  return function (dispatch) {  // eslint-disable-line
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(savedCourse => // eslint-disable-line
      // If has ID you are updating a course
      savedCourse.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse)),
    ).catch((error) => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
