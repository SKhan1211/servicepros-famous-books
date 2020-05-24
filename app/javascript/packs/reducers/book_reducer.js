import {
  RECEIVE_BOOKS,
} from "../actions/book_actions";

const bookReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { books: action.books };
    default:
      return state;
  }
};

export default bookReducer;
