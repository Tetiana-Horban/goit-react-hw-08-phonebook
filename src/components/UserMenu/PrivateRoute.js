const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { authSelectors } = require('redux/auth');

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <> {isLoggedIn ? children : <Navigate to="/register" />}</>;
};
export default PrivateRoute;
