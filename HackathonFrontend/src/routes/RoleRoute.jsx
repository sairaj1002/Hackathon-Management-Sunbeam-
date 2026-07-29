import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import ROUTES from "../constants/routes";

const RoleRoute = ({ allowedRoles = [] }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

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
    return <Outlet />;
  }

  // User has permission
  if (allowedRoles.includes(user.role)) {
    return <Outlet />;
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
