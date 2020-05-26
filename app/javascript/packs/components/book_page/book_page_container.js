import { connect } from "react-redux";
import { fetchBook } from '../../actions/book_actions';

import BookPage from "./book_page";

const mapStateToProps = (state, ownProps) => ({
  book: ownProps.match.params.title
});

const mapDispatchToProps = dispatch => ({
  fetchBook: (bookTitle) => dispatch(fetchBook(bookTitle))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
