import { RECEIVE_BOOKMARKED_BOOK } from "../actions/book_actions";

const bookmarkedBooksReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKMARKED_BOOK:
      if (state.some((book) => book.id === action.book.id)) { return state.filter(book => book.id !== action.book.id)}
      else return [action.book].concat(state);
    default:
      return state;
  }
};

export default bookmarkedBooksReducer;
