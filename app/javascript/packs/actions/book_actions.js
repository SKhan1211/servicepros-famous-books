export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const RECEIVE_BOOKMARKED_BOOK = "RECEIVE_BOOKMARKED_BOOK";
export const RECEIVE_PURCHASED_BOOK = "RECEIVE_PURCHASED_BOOK";

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

export const receiveBookmarkedBook = book => ({
  type: RECEIVE_BOOKMARKED_BOOK,
  book
})

export const receivePurchasedBook = (book) => ({
  type: RECEIVE_PURCHASED_BOOK,
  book,
});

export const fetchBook = (bookTitle) => dispatch => (
  APIUtil.fetchBook(bookTitle).then(book => (
    dispatch(receiveBook(book))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);