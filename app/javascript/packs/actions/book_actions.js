export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS";

const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors,
});

