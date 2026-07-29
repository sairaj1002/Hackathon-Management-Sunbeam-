import { useEffect, useState } from "react";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

const defaultValues = {
  projectTitle: "",
  description: "",
  githubUrl: "",
  demoUrl: "",
  documentUrl: "",
};

const SubmissionForm = ({
  initialData = defaultValues,
  loading = false,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(defaultValues);

  useEffect(() => {
    setFormData({
      ...defaultValues,
      ...initialData,
    });
  }, [initialData]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit?.(formData);
  };

  return (
    <Card className="p-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <h2 className="text-xl font-semibold">
          Project Submission
        </h2>

        <Input
          label="Project Title"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={handleChange}
          required
        />

        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <Input
          label="GitHub Repository"
          name="githubUrl"
          value={formData.githubUrl}
          onChange={handleChange}
          placeholder="https://github.com/..."
          required
        />

        <Input
          label="Live Demo"
          name="demoUrl"
          value={formData.demoUrl}
          onChange={handleChange}
          placeholder="https://..."
        />

        <Input
          label="Documentation"
          name="documentUrl"
          value={formData.documentUrl}
          onChange={handleChange}
          placeholder="Drive / PDF Link"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Submit Project
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SubmissionForm;