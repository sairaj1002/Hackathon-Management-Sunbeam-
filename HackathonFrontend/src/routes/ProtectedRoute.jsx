import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import ROUTES from "../constants/routes";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loader while restoring authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Loading...
        </h2>
      </div>
    );
  }

  // Redirect to login if user is not authenticated
  if (!isAuthenticated) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        replace
        state={{ from: location }}
      />
    );
  }

  // User authenticated
  return <Outlet />;
};

export default ProtectedRoute;
