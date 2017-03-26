export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      // Return new instance of the state array,
      // and then create a deep copy
      return [
        ...state,
        Object.assign({}, action.course),
      ];

    default:
      return state;
  }
}
