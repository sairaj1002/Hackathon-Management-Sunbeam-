import { useEffect, useState } from "react";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

const defaultValues = {
  title: "",
  description: "",
  mode: "Online",
  status: "OPEN",
  startDate: "",
  endDate: "",
  maxTeamSize: "",
  maxMembers: "",
};

const HackathonForm = ({
  mode = "create",
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

    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      alert("End date cannot be before the start date.");
      return;
    }

    onSubmit?.(formData);

    if (mode === "create") {
      setFormData(defaultValues);
    }
  };

  return (
    <Card className="p-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Basic Information */}

        <Input
          label="Hackathon Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter hackathon title"
          required
        />

        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter hackathon description"
          required
        />

        {/* Mode & Status */}

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Mode
            </label>

            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              <option value="OPEN">Registration Open</option>
              <option value="ONGOING">Ongoing</option>
              <option value="COMPLETED">Completed</option>
              <option value="CLOSED">Registration Closed</option>
            </select>
          </div>
        </div>

        {/* Dates */}

        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Start Date"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />

          <Input
            label="End Date"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Team Configuration */}

        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Maximum Team Size"
            type="number"
            name="maxTeamSize"
            value={formData.maxTeamSize}
            onChange={handleChange}
            min={1}
            required
          />

          <Input
            label="Maximum Members"
            type="number"
            name="maxMembers"
            value={formData.maxMembers}
            onChange={handleChange}
            min={1}
            required
          />
        </div>

        {/* Actions */}

        <div className="flex justify-end">
          <Button
            type="submit"
            loading={loading}
            disabled={loading}
          >
            {mode === "create"
              ? "Create Hackathon"
              : "Update Hackathon"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default HackathonForm;