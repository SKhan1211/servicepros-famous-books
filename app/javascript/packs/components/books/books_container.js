import { connect } from "react-redux";
import Books from "./books";

const mapStateToProps = (state, _ownProps) => ({
  books: state.entities.books,
});

export default connect(mapStateToProps)(Books);
