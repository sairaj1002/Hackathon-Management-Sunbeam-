import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import HackathonForm from "../components/HackathonForm";

const CreateHackathonPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleCreate = async (formData) => {
    try {
      setLoading(true);

      // await hackathonService.createHackathon(formData);

      console.log(formData);

      toast.success("Hackathon created successfully.");

      navigate("/hackathons");
    } catch (error) {
      console.error(error);

      toast.error("Failed to create hackathon.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Create Hackathon
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Fill in the information below to create a new hackathon.
        </p>
      </div>

      <HackathonForm
        mode="create"
        loading={loading}
        onSubmit={handleCreate}
      />
    </div>
  );
};

export default CreateHackathonPage;