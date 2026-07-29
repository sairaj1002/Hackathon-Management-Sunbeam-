import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import Input from "../../../components/ui/Input";

import HackathonCard from "../components/HackathonCard";

import { hackathons } from "../../../mock/hackathons";

const MyHackathonsPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  /*
    Later replace this with:

    const myHackathons = await hackathonService.getMyHackathons();
  */

  const myHackathons = hackathons;

  const filteredHackathons = useMemo(() => {
    return myHackathons.filter((hackathon) =>
      hackathon.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          My Hackathons
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          View and manage hackathons created by you.
        </p>
      </div>

      <div className="max-w-md">
        <Input
          placeholder="Search my hackathons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredHackathons.length > 0 ? (
        <div className="grid gap-6">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              hackathon={hackathon}
              onViewDetails={() =>
                navigate(`/hackathons/${hackathon.id}`)
              }
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-12 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <Search
            size={48}
            className="mx-auto mb-4 text-zinc-400"
          />

          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            No Hackathons Found
          </h2>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            You haven't created any hackathons yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyHackathonsPage;