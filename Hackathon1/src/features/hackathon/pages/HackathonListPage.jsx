import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search } from "lucide-react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

import HackathonCard from "../components/HackathonCard";

import { hackathons } from "../../../mock/hackathons";

const HackathonListPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((hackathon) =>
      hackathon.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleCreateHackathon = () => {
    navigate("/hackathons/create");
  };

  const handleViewDetails = (hackathon) => {
    navigate(`/hackathons/${hackathon.id}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Hackathons
          </h1>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Browse and manage all hackathons.
          </p>
        </div>

        <Button onClick={handleCreateHackathon}>
          <Plus size={18} />
          Create Hackathon
        </Button>
      </div>

      {/* Search */}

      <div className="max-w-md">
        <Input
          placeholder="Search hackathons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* List */}

      {filteredHackathons.length > 0 ? (
        <div className="grid gap-6">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              hackathon={hackathon}
              onViewDetails={handleViewDetails}
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
            Try searching with a different keyword.
          </p>
        </div>
      )}
    </div>
  );
};

export default HackathonListPage;