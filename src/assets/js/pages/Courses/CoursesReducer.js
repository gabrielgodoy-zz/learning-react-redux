export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      // Return new instance of the state array,
      // Create a deep copy of state without mutating the original state
      // with spread operator and Object assign
      return [
        ...state,
        Object.assign({}, action.course),
      ];

    default:
      return state;
  }
}
