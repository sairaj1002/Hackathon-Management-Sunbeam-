import {
  Trophy,
  Users,
  FolderGit2,
  ClipboardCheck,
} from "lucide-react";

import WelcomeCard from "../components/WelcomeCard";
import StatCard from "../components/StatCard";
import QuickActions from "../components/QuickActions";
import RecentHackathons from "../components/RecentHackathons";
import ActivityFeed from "../components/ActivityFeed";

import {
  dashboardStats,
  recentHackathons,
  statistics
} from "../../../mock/dashboard";

const statIcons = {
  Hackathons: Trophy,
  Teams: Users,
  Submissions: FolderGit2,
  "Pending Reviews": ClipboardCheck,
};

const DashboardPage = () => {
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

      {/* Quick Actions */}

      <QuickActions />

      {/* Dashboard Content */}

      <section className="grid gap-6 xl:grid-cols-2">
        <RecentHackathons />

        <ActivityFeed />
      </section>
    </div>
  );
};

export default DashboardPage;