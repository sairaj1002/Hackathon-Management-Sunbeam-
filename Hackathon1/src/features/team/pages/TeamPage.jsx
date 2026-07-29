import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

import TeamCard from "../components/TeamCard";

import { teams } from "../../../mock/teams";

const TeamPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredTeams = useMemo(() => {
    const keyword = search.toLowerCase();

    return teams.filter(
      (team) =>
        team.teamName.toLowerCase().includes(keyword) ||
        team.hackathonName.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleView = (team) => {
    navigate(`/teams/${team.id}`);
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Teams
          </h1>

          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Browse all registered hackathon teams.
          </p>
        </div>

        <Button
          onClick={() => navigate("/teams/create")}
        >
          Create Team
        </Button>

      </div>

      {/* Search */}

      <div className="max-w-md">
        <Input
          placeholder="Search by team or hackathon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Teams */}

      {filteredTeams.length ? (
        <div className="grid gap-6">
          {filteredTeams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              onView={handleView}
            />
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <Search
            size={48}
            className="mx-auto mb-4 text-zinc-400"
          />

          <h2 className="text-xl font-semibold">
            No Teams Found
          </h2>

          <p className="mt-2 text-zinc-500">
            Try another search keyword.
          </p>
        </Card>
      )}

    </div>
  );
};

export default TeamPage;