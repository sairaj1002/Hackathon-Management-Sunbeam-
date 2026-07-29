import {
  CheckCircle2,
  ClipboardCheck,
  Clock3,
} from "lucide-react";

import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

const ICONS = {
  EVALUATION_COMPLETED: CheckCircle2,
  PROJECT_ASSIGNED: ClipboardCheck,
  SCORE_UPDATED: Clock3,
};

const BADGE_VARIANTS = {
  EVALUATION_COMPLETED: "success",
  PROJECT_ASSIGNED: "info",
  SCORE_UPDATED: "warning",
};

const JudgeActivityFeed = ({ activities = [] }) => {
  return (
    <Card className="p-6">

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Your latest judging activities.
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="py-10 text-center text-zinc-500 dark:text-zinc-400">
          No recent activity found.
        </div>
      ) : (
        <div className="space-y-5">

          {activities.map((activity) => {
            const Icon =
              ICONS[activity.type] ?? ClipboardCheck;

            return (
              <div
                key={activity.id}
                className="flex gap-4 border-b border-zinc-200 pb-5 last:border-none dark:border-zinc-700"
              >

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Icon
                    size={20}
                    className="text-blue-600 dark:text-blue-300"
                  />
                </div>

                <div className="flex-1">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {activity.title}
                    </h3>

                    <Badge
                      variant={
                        BADGE_VARIANTS[
                          activity.type
                        ] ?? "secondary"
                      }
                    >
                      {activity.type
                        .replaceAll("_", " ")}
                    </Badge>

                  </div>

                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {activity.description}
                  </p>

                  <p className="mt-3 text-xs text-zinc-400">
                    {activity.date}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </Card>
  );
};

export default JudgeActivityFeed;