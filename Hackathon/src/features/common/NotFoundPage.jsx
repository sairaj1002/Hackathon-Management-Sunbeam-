import { SearchX } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import ROUTES from "../../constants/routes";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="max-w-lg p-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <SearchX
            size={42}
            className="text-red-600"
          />
        </div>

        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8">
          <Link to={ROUTES.DASHBOARD}>
            <Button>
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFoundPage;