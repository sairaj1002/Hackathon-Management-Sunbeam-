import { Sparkles } from "lucide-react";

import useAuth from "../../../hooks/useAuth";

const WelcomeCard = () => {
  const { user } = useAuth();

  const firstName =
    user?.fullName?.split(" ")[0] ??
    user?.name?.split(" ")[0] ??
    "Developer";

  return (
    <section
      className="
        rounded-xl
        border
        bg-white
        p-6
        shadow-sm
        dark:border-gray-700
        dark:bg-gray-800
      "
    >
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            👋 Welcome, {firstName}
          </h1>

          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Ready for your next hackathon? Explore competitions, manage your
            teams, and track your submissions from one place.
          </p>
        </div>

        <div
          className="
            hidden
            h-16
            w-16
            items-center
            justify-center
            rounded-xl
            bg-blue-100
            text-blue-600
            dark:bg-blue-900/30
            dark:text-blue-400
            md:flex
          "
        >
          <Sparkles size={30} />
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;