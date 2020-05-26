import { connect } from "react-redux";
import { fetchBook, receiveBookmarkedBook } from '../../actions/book_actions';

import BookPage from "./book_page";

const mapStateToProps = (state, ownProps) => ({
  book: ownProps.match.params.title,
  bookmarkedBooks: state.entities.bookmarkedBooks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (bookTitle) => dispatch(fetchBook(bookTitle)),
  receiveBookmarkedBook: (book) => dispatch(receiveBookmarkedBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
