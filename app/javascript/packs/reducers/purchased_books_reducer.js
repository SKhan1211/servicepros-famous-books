import { RECEIVE_PURCHASED_BOOK } from "../actions/book_actions";

const purchasedBooksReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PURCHASED_BOOK:
      return [action.book].concat(state);
    default:
      return state;
  }
};

export default purchasedBooksReducer;
