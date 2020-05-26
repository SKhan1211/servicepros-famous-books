import { combineReducers } from "redux";

import books from "./book_reducer";
import newReleases from './new_releases_reducer';
import showBook from './book_show_reducer';

export default combineReducers({
  books,
  newReleases,
  showBook
});
