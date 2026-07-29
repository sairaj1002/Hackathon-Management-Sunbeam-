import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ActionCard from "./ActionCard";
import DashboardSection from "./DashboardSection";

import { quickActions } from "../../../mock/quickActions";
import useAuth from "../../../hooks/useAuth";

const QuickActions = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const availableActions = quickActions.filter((action) =>
    !action.roles?.length || action.roles.includes(user?.role)
  );

  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  if (!availableActions.length) {
    return (
      <DashboardSection title="Quick Actions">
        <div className="rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-700">
          <p className="text-zinc-500 dark:text-zinc-400">
            No quick actions available.
          </p>
        </div>
      </DashboardSection>
    );
  }

  return (
    <DashboardSection title="Quick Actions">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {availableActions.map((action) => (
          <ActionCard
            key={action.id}
            title={action.title}
            description={action.description}
            icon={action.icon}
            onClick={() => handleNavigation(action.path)}
          />
        ))}
      </div>
    </DashboardSection>
  );
};

export default QuickActions;
