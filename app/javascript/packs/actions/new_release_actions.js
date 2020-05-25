export const RECEIVE_NEW_RELEASES = "RECEIVE_NEW_RELEASES";

const receiveNewReleases = (newBooks) => ({
  type: RECEIVE_NEW_RELEASES,
  newBooks
});