import { combineReducers } from 'redux';
import courses from './containers/Courses/CoursesReducer';
import authors from './containers/ManageCourses/ManageCoursesReducer';
import ajaxCallsInProgress from './App/AppReducer';

// Os nomes dos reducers devem ser os mesmos do arquivo initialState
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
});

export default rootReducer;
