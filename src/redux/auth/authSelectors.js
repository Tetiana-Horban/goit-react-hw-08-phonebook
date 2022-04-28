const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserToken = state => state.auth.token;
const getIsLoading = state => state.auth.loading;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserToken,
  getIsLoading,
};
export default authSelectors;
