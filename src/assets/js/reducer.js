import { combineReducers } from 'redux';
import courses from './pages/Courses/CoursesReducer';

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
