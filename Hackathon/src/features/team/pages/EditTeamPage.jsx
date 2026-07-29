import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import Card from "../../../components/ui/Card";
import TeamForm from "../components/TeamForm";

import { teams } from "../../../mock/teams";

const EditTeamPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const team = useMemo(
    () =>
      teams.find(
        (item) => String(item.id) === id
      ),
    [id]
  );

  const handleSubmit = async (updatedTeam) => {
    try {
      setLoading(true);

      /*
      await teamService.updateTeam(
          id,
          updatedTeam
      );
      */

      console.log(updatedTeam);

      toast.success("Team updated successfully.");

      navigate(`/teams/${id}`);
    } catch (error) {
      console.error(error);

      toast.error("Unable to update team.");
    } finally {
      setLoading(false);
    }
  };

  if (!team) {
    return (
      <Card className="p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Team Not Found
        </h2>

        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          The requested team does not exist.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Edit Team
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Update your team information.
        </p>
      </div>

      {/* Form */}

      <TeamForm
        initialData={team}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditTeamPage;