import * as types from './CoursesConstants';

export default function coursesReducer(state = [], action) {
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
      // Simply returns objects from API
      return action.courses;

    default:
      return state;
  }
}
