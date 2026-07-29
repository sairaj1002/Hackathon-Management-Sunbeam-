import { useState } from "react";
import { toast } from "react-hot-toast";

import SubmissionForm from "../components/SubmissionForm";

const CreateSubmissionPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (submission) => {
    try {
      setLoading(true);

      /*
      await submissionService.createSubmission(submission);
      */

      console.log(submission);

      toast.success("Submission created successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Unable to create submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Create Submission
        </h1>

        <p className="mt-2 text-zinc-500">
          Submit your project for evaluation.
        </p>
      </div>

      <SubmissionForm
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default CreateSubmissionPage;