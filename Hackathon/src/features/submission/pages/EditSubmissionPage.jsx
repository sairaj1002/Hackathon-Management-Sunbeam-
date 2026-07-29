import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import SubmissionForm from "../components/SubmissionForm";

import { submissions } from "../../../mock/submissions";

const EditSubmissionPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submission = useMemo(
    () =>
      submissions.find(
        (item) => String(item.id) === id
      ),
    [id]
  );

  const handleSubmit = async (updatedSubmission) => {
    try {
      setLoading(true);

      /*
      await submissionService.updateSubmission(
        id,
        updatedSubmission
      );
      */

      console.log(updatedSubmission);

      toast.success("Submission updated successfully.");

      navigate("/submissions");
    } catch (error) {
      console.error(error);

      toast.error("Unable to update submission.");
    } finally {
      setLoading(false);
    }
  };

  if (!submission) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold">
          Submission Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Edit Submission
        </h1>

        <p className="mt-2 text-zinc-500">
          Update your project details.
        </p>
      </div>

      <SubmissionForm
        initialData={submission}
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default EditSubmissionPage;