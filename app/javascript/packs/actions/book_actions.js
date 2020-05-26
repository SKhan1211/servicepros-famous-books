export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

import * as APIUtil from '../util/books_api_util';

const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors,
});

export const fetchBook = (bookTitle) => dispatch => (
  APIUtil.fetchBook(bookTitle).then(book => (
    dispatch(receiveBook(book))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);