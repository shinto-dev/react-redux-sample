import * as types from "./actionTypes";
import * as authorsAPI from "../../api/authorApi";
import {apiCallError, beginApiCall} from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorsAPI
        .getAuthors()
        .then((authors) => {
          dispatch(loadAuthorsSuccess(authors));
        })
        .catch((error) => {
          dispatch(apiCallError())
          throw error;
        });
  };
}
