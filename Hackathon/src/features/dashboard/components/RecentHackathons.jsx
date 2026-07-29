import DashboardSection from "./DashboardSection";
import HackathonCard from "./HackathonCard";
import Loader from "../../../components/ui/Loader";

import { hackathons as recentHackathons } from "../../../mock/hackathons";

const RecentHackathons = ({
  hackathons = recentHackathons,
  loading = false,
  onHackathonClick,
}) => {
  if (loading) {
    return (
      <DashboardSection title="Recent Hackathons">
        <div className="flex justify-center py-8">
          <Loader />
        </div>
      </DashboardSection>
    );
  }

  if (!hackathons.length) {
    return (
      <DashboardSection title="Recent Hackathons">
        <div className="rounded-xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
          <p className="text-zinc-500 dark:text-zinc-400">
            No recent hackathons available.
          </p>
        </div>
      </DashboardSection>
    );
  }

  return (
    <DashboardSection title="Recent Hackathons">
      <div className="space-y-4">
        {hackathons.map((hackathon) => (
          <HackathonCard
            key={hackathon.id}
            {...hackathon}
            onClick={
              onHackathonClick
                ? () => onHackathonClick(hackathon)
                : undefined
            }
          />
        ))}
      </div>
    </DashboardSection>
  );
};

export default RecentHackathons;