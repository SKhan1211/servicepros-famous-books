import { connect } from "react-redux";
import { fetchBook, receiveBookmarkedBook, receivePurchasedBook } from '../../actions/book_actions';

import BookPage from "./book_page";

const mapStateToProps = (state, ownProps) => ({
  book: ownProps.match.params.title,
  bookmarkedBooks: state.entities.bookmarkedBooks,
  purchasedBooks: state.entities.purchasedBooks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (bookTitle) => dispatch(fetchBook(bookTitle)),
  receiveBookmarkedBook: (book) => dispatch(receiveBookmarkedBook(book)),
  receivePurchasedBook: (book) => dispatch(receivePurchasedBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
