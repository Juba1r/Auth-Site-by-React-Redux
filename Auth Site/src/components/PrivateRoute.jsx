import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = localStorage.getItem("authToken");

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

// PropTypes validation
PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired, // Validate 'element' as a React component
};

export default PrivateRoute;
