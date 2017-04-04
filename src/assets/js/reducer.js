import { combineReducers } from 'redux';
import courses from './pages/Courses/CoursesReducer';
import authors from './pages/ManageCourses/ManageCoursesReducer';

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
