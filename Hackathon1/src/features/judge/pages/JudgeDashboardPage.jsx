import {
  ClipboardCheck,
  Clock3,
  Star,
  FolderGit2,
} from "lucide-react";

import WelcomeCard from "../../dashboard/components/WelcomeCard";
import StatCard from "../../dashboard/components/StatCard";

import AssignedProjectCard from "../components/AssignedProjectCard";
import JudgeActivityFeed from "../components/JudgeActivityFeed";

import { useNavigate } from "react-router-dom";
import { judgeDashboardData , judgeActivities} from "../../../mock/judges";


const statIcons = {
  "Assigned Projects": FolderGit2,
  "Pending Reviews": Clock3,
  "Completed Reviews": ClipboardCheck,
  "Average Score": Star,
};

const JudgeDashboardPage = () => {
  const {
    statistics,
    assignedProjects,
    recentActivities,
  } = judgeDashboardData;

  const navigate = useNavigate();

  const handleEvaluate = (project) => {
      navigate(`/judge/projects/${project.id}/score`);
  };

  return (
    <div className="space-y-8">
      {/* Welcome */}

      <WelcomeCard />

      {/* Statistics */}

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            value={item.value}
            variant={item.variant}
            icon={statIcons[item.title]}
          />
        ))}
      </section>

      {/* Main Content */}

      <section className="grid gap-6 xl:grid-cols-2">
        {/* Assigned Projects */}

        <div className="space-y-5">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Assigned Projects
          </h2>

          {assignedProjects.map((project) => (
            <AssignedProjectCard
                project={project}
                onEvaluate={handleEvaluate}
            />
          ))}
        </div>

        {/* Activity */}

        <JudgeActivityFeed
            activities={judgeActivities}
        />
      </section>
    </div>
  );
};

export default JudgeDashboardPage;