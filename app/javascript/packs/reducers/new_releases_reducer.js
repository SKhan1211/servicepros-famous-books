import { RECEIVE_NEW_RELEASES } from "../actions/new_release_actions";

const newReleasesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_RELEASES:
      return { newReleases: action.books };
    default:
      return state;
  }
};

export default newReleasesReducer


