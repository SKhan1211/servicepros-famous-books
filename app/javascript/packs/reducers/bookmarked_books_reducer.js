import { RECEIVE_BOOKMARKED_BOOK, RECEIVE_BOOK } from "../actions/book_actions";

const bookmarkedBooksReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKMARKED_BOOK:
      if (state.some((book) => book.id === action.book.id)) { return state.filter(book => book.id !== action.book.id)}
      else return state.concat([action.book]).reverse()
    default:
      return state;
  }
};

export default bookmarkedBooksReducer;
