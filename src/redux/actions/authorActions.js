import * as types from "./actionTypes";
import * as authorsAPI from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    return authorsAPI
        .getAuthors()
        .then((authors) => {
          dispatch(loadAuthorsSuccess(authors));
        })
        .catch((error) => {
          throw error;
        });
  };
}
