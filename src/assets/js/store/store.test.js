import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducer';
import initialState from '../initialState';
import * as courseActions from '../pages/Courses/CoursesActions';

describe('Store', () => {
  it('Should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code',
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code',
    };

    expect(actual).toEqual(expected);
  });
});
