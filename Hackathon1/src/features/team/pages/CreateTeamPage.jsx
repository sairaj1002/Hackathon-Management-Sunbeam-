import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import TeamForm from "../components/TeamForm";

const CreateTeamPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (team) => {
    try {
      setLoading(true);

      /*
      const response =
        await teamService.createTeam(team);

      navigate(`/teams/${response.data.id}`);
      */

      console.log(team);

      toast.success("Team created successfully.");

      navigate("/teams");
    } catch (error) {
      console.error(error);

      toast.error("Unable to create team.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Create Team
        </h1>

        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Create a new team for a hackathon.
        </p>

      </div>

      <TeamForm
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default CreateTeamPage;