import { combineReducers } from "redux";

import books from "./book_reducer";
import newReleases from './new_releases_reducer';
import showBook from './book_show_reducer';
import bookmarkedBooks from './bookmarked_books_reducer';
import purchasedBooks from './purchased_books_reducer';

export default combineReducers({
  books,
  newReleases,
  showBook,
  bookmarkedBooks,
  purchasedBooks
});
