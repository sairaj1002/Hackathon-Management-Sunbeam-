import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import ROUTES from "../constants/routes";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Show loader while restoring authentication
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Loading...
        </h2>
      </div>
    );
  }

  // Redirect to login if user is not authenticated
  if (!user) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        replace
      />
    );
  }

  // User authenticated
  return children;
};

export default ProtectedRoute;