import { RECEIVE_BOOK } from "../actions/book_actions";

const bookShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK:
      return { book: action.book };
    default:
      return state;
  }
};

export default bookShowReducer;
