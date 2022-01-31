const getLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const fetchCurrent = state => state.auth.fetchingCurrentUser;

const authSelectors = {
  getLoggedIn,
  getUsername,
  fetchCurrent,
};
export default authSelectors;