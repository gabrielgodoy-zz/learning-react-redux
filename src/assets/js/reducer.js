import { combineReducers } from 'redux';
import courses from './pages/Courses/reducer';

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
