import { combineReducers } from 'redux';
import courses from './pages/Courses/CoursesReducer';
import authors from './pages/ManageCourses/ManageCoursesReducer';
import ajaxCallsInProgress from './App/AppReducer';

// Those reducer names must be the same from the initialState file
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
});

export default rootReducer;
