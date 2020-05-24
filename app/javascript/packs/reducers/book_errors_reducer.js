import {
  RECEIVE_BOOK_ERRORS,
  RECEIVE_BOOKS
} from "../actions/book_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK_ERRORS:
      return action.errors;
    case RECEIVE_BOOKS:
      return [];
    default:
      return state;
  }
};
