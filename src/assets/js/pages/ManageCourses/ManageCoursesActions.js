import AuthorAPI from '../../../../api/mockAuthorApi';
import * as types from './ManageCoursesConstants';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return dispatch =>
    AuthorAPI.getAllAuthors()
             .then(authors => dispatch(loadAuthorsSuccess(authors)))
             .catch((error) => {
               throw (error);
             });
}
