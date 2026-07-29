import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import ROUTES from "../../constants/routes";

const ComingSoonPage = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <Card className="max-w-lg p-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <Clock3
            size={42}
            className="text-blue-600"
          />
        </div>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Coming Soon
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          This feature is currently under development and will be available in a
          future update.
        </p>

        <div className="mt-8">
          <Link to={ROUTES.DASHBOARD}>
            <Button>
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ComingSoonPage;