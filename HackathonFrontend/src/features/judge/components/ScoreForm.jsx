import { useEffect, useMemo, useState } from "react";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

const defaultValues = {
  innovation: 0,
  technicalImplementation: 0,
  uiUx: 0,
  presentation: 0,
  scalability: 0,
  comments: "",
};

const MAX_SCORE = 20;

const ScoreForm = ({
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

  const totalScore = useMemo(() => {
    return (
      Number(formData.innovation) +
      Number(formData.technicalImplementation) +
      Number(formData.uiUx) +
      Number(formData.presentation) +
      Number(formData.scalability)
    );
  }, [formData]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    let newValue = value;

    if (target.type === "number") {
      newValue = Math.max(
        0,
        Math.min(MAX_SCORE, Number(value))
      );
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit?.({
      ...formData,
      totalScore,
    });
  };

  return (
    <Card className="p-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Evaluate Submission
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Innovation"
            type="number"
            name="innovation"
            min={0}
            max={20}
            value={formData.innovation}
            onChange={handleChange}
            required
          />

          <Input
            label="Technical Implementation"
            type="number"
            name="technicalImplementation"
            min={0}
            max={20}
            value={formData.technicalImplementation}
            onChange={handleChange}
            required
          />

          <Input
            label="UI / UX"
            type="number"
            name="uiUx"
            min={0}
            max={20}
            value={formData.uiUx}
            onChange={handleChange}
            required
          />

          <Input
            label="Presentation"
            type="number"
            name="presentation"
            min={0}
            max={20}
            value={formData.presentation}
            onChange={handleChange}
            required
          />

          <Input
            label="Scalability"
            type="number"
            name="scalability"
            min={0}
            max={20}
            value={formData.scalability}
            onChange={handleChange}
            required
          />
        </div>

        <Input
          label="Comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Write your evaluation..."
        />

        <Card className="bg-zinc-50 p-4 dark:bg-zinc-800">
          <div className="flex items-center justify-between">
            <span className="font-medium">
              Total Score
            </span>

            <span className="text-2xl font-bold text-blue-600">
              {totalScore} / 100
            </span>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Submit Evaluation
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ScoreForm;