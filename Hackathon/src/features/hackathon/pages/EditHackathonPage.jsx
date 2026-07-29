import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import Card from "../../../components/ui/Card";
import HackathonForm from "../components/HackathonForm";

import { hackathons } from "../../../mock/hackathons";

const EditHackathonPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const hackathon = useMemo(
    () => hackathons.find((item) => String(item.id) === id),
    [id]
  );

  const handleUpdate = async (formData) => {
    try {
      setLoading(true);

      // await hackathonService.updateHackathon(id, formData);

      console.log(formData);

      toast.success("Hackathon updated successfully.");

      navigate(`/hackathons/${id}`);
    } catch (error) {
      console.error(error);

      toast.error("Failed to update hackathon.");
    } finally {
      setLoading(false);
    }
  };

  if (!hackathon) {
    return (
      <Card className="p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Hackathon Not Found
        </h2>

        <p className="mt-3 text-zinc-500">
          Unable to locate this hackathon.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Edit Hackathon
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Update the hackathon details.
        </p>
      </div>

      <HackathonForm
        mode="edit"
        initialData={hackathon}
        loading={loading}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditHackathonPage;