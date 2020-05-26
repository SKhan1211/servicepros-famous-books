import { connect } from "react-redux";

import SideBar from "./sidebar";

const mapStateToProps = (state) => ({
  newReleases: state.entities.newReleases,
  bookmarkedBooks: state.entities.bookmarkedBooks.slice(0, 3),
});

export default connect(mapStateToProps)(SideBar);
