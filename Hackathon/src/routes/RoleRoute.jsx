import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import ROUTES from "../constants/routes";

const RoleRoute = ({ children, allowedRoles = [] }) => {
  const { user } = useAuth();

  // No authenticated user
  if (!user) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        replace
      />
    );
  }

  // No role restriction
  if (allowedRoles.length === 0) {
    return children;
  }

  // User has permission
  if (allowedRoles.includes(user.role)) {
    return children;
  }

  // User is authenticated but not authorized
  return (
    <Navigate
      to={ROUTES.DASHBOARD}
      replace
    />
  );
};

export default RoleRoute;