import { useMemo, useState } from "react";
import { Trophy, Medal, Award, Search } from "lucide-react";

import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Badge from "../../../components/ui/Badge";

import { leaderboardData } from "../../../mock/leaderboard";

const rankIcons = {
  1: <Trophy className="text-yellow-500" size={24} />,
  2: <Medal className="text-gray-400" size={24} />,
  3: <Award className="text-amber-600" size={24} />,
};

const LeaderboardPage = () => {
  const [search, setSearch] = useState("");

  const teams = useMemo(() => {
    const keyword = search.toLowerCase();

    return leaderboardData.filter(
      (team) =>
        team.teamName.toLowerCase().includes(keyword) ||
        team.hackathon.toLowerCase().includes(keyword)
    );
  }, [search]);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Leaderboard
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Final rankings of evaluated hackathon projects.
        </p>
      </div>

      {/* Search */}

      <div className="max-w-md">
        <Input
          placeholder="Search by team or hackathon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Rankings */}

      <div className="space-y-4">
        {teams.map((team) => (
          <Card
            key={team.id}
            className="flex items-center justify-between p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-10">
                {rankIcons[team.rank] ?? (
                  <span className="font-bold">
                    #{team.rank}
                  </span>
                )}
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  {team.teamName}
                </h2>

                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {team.hackathon}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Badge variant="success">
                {team.score}/100
              </Badge>

              <span className="text-sm text-zinc-500">
                {team.members} Members
              </span>
            </div>
          </Card>
        ))}
      </div>

      {teams.length === 0 && (
        <Card className="p-10 text-center">
          <Search
            size={42}
            className="mx-auto mb-4 text-zinc-400"
          />

          <h2 className="text-xl font-semibold">
            No Results Found
          </h2>

          <p className="text-zinc-500 mt-2">
            Try another search term.
          </p>
        </Card>
      )}
    </div>
  );
};

export default LeaderboardPage;