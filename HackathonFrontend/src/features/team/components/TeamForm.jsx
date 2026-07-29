import {
  useEffect,
  useState,
} from "react";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

const defaultValues = {
  teamName: "",
  description: "",
  maxMembers: 4,
};

const TeamForm = ({
  initialData = defaultValues,
  loading = false,
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState(defaultValues);

  useEffect(() => {
    setFormData({
      ...defaultValues,
      ...initialData,
    });
  }, [initialData]);

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(formData);
  };

  return (
    <Card className="p-6">

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <h2 className="text-xl font-semibold">
          Team Information
        </h2>

        <Input
          label="Team Name"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          required
        />

        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <Input
          label="Maximum Members"
          name="maxMembers"
          type="number"
          min={2}
          max={6}
          value={formData.maxMembers}
          onChange={handleChange}
        />

        <div className="flex justify-end">

          <Button
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Save Team
          </Button>

        </div>

      </form>

    </Card>
  );
};

export default TeamForm;