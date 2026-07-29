import {
  CheckCircle2,
  Clock3,
  FileText,
  Trophy,
  Users,
} from "lucide-react";

import DashboardSection from "./DashboardSection";

const ICONS = {
  TEAM_JOINED: Users,
  SUBMISSION: FileText,
  HACKATHON_CREATED: Trophy,
  REVIEW_COMPLETED: CheckCircle2,
};

const DEFAULT_ACTIVITIES = [
  {
    id: 1,
    type: "TEAM_JOINED",
    message: "You joined Team Alpha.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "SUBMISSION",
    message: "Project submitted for AI Challenge.",
    time: "Yesterday",
  },
  {
    id: 3,
    type: "REVIEW_COMPLETED",
    message: "Your submission has been reviewed.",
    time: "2 days ago",
  },
];

const ActivityFeed = ({
  activities = DEFAULT_ACTIVITIES,
}) => {
  return (
    <DashboardSection title="Recent Activity">
      <div className="rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {activities.length === 0 ? (
          <div className="p-8 text-center text-zinc-500 dark:text-zinc-400">
            No recent activity.
          </div>
        ) : (
          <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {activities.map((activity) => {
              const Icon =
                ICONS[activity.type] ?? Clock3;

              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-5"
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                      text-blue-600
                      dark:bg-blue-900/30
                      dark:text-blue-400
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-zinc-800 dark:text-zinc-100">
                      {activity.message}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </DashboardSection>
  );
};

export default ActivityFeed;