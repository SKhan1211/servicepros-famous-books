import { connect } from "react-redux";

import SideBar from "./sidebar";

const mapStateToProps = (state) => ({
  newReleases: state.entities.newReleases,
});

export default connect(mapStateToProps)(SideBar);
