import initialState from '../../initialState';
import * as types from './CoursesConstants';

export default function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // Return new instance of the state array,
      // Create a deep copy of state without mutating the original state
      // with spread operator and Object assign
      return [
        ...state,
        Object.assign({}, action.course),
      ];

    case types.LOAD_COURSES_SUCCESS:
      return action.courses; // Simply returns objects from API

    default:
      return state;
  }
}
