import { connect } from "react-redux";
import queryString from "query-string";

import Books from "./books";

const mapStateToProps = (state, ownProps) => ({
  books: state.entities.purchasedBooks,
  path: queryString.parse(ownProps.location.search).sort || "alphabetical",
  title: "My Collection",
});

export default connect(mapStateToProps)(Books);
