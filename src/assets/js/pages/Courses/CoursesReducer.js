import initialState from '../../initialState';
import * as types from './CoursesConstants';

export default function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses; // Simply returns objects from API

    case types.CREATE_COURSES_SUCCESS:
      return [ // State here is immutable
        // Slice of the store, array of courses
        ...state, // Creates a new array
        Object.assign({}, action.course), // Create a new copy with Object.assign
      ];

    case types.UPDATE_COURSES_SUCCESS:
      return [ // State here is immutable
        // Filter out the course that we want to update
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course), // Course being updated
      ];

    default:
      return state;
  }
}
