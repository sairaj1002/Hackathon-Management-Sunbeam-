import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import SubmissionForm from "../components/SubmissionForm";

const SubmissionPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (submission) => {
    try {
      setLoading(true);

      /*
      await submissionService.createSubmission(submission);
      */

      console.log(submission);

      toast.success("Project submitted successfully.");
      navigate("/submissions/my");
    } catch (error) {
      console.error(error);

      toast.error("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Project Submission
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Submit your hackathon project for evaluation.
        </p>
      </div>

      <SubmissionForm
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SubmissionPage;
