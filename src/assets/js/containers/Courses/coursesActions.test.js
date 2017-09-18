import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock'; // Para mockar chamadas HTTP
import configureMockStore from 'redux-mock-store';

import * as courseActions from './CoursesActions';
import * as appTypes from '../../App/AppConstants';
import * as types from './CoursesConstants';

// Testando uma ação assíncrona
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = { id: 'clean-code', title: 'Clean Code' };
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course,
      };

      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Aqui está um exemplo de chamada para nock.
    // Não precisamos porque estamos usando uma API simulada na pasta 'api'

    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      { type: appTypes.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: { courses: [{ id: 'clean-code', title: 'Clean Code' }] },
      },
    ];

    const store = mockStore({ courses: [] }, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(appTypes.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
