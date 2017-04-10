import * as types from './AppConstants';

export function beginAjaxCall() {
  return {
    type: types.BEGIN_AJAX_CALL,
  };
}

export function ajaxCallError() {
  return {
    type: types.AJAX_CALL_ERROR,
  };
}
