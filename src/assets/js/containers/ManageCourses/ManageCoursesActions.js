import AuthorAPI from '../../../../api/mockAuthorApi';
import * as types from './ManageCoursesConstants';
import { beginAjaxCall } from '../../App/AppActions';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    AuthorAPI.getAllAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors)))
      .catch((error) => {
        throw (error);
      });
  };
}
