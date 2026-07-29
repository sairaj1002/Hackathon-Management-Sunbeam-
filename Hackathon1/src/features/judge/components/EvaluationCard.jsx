import {
  CalendarDays,
  FileText,
  Star,
  User,
} from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

const STATUS_VARIANTS = {
  PENDING: "warning",
  COMPLETED: "success",
};

const STATUS_LABELS = {
  PENDING: "Pending",
  COMPLETED: "Completed",
};

const EvaluationCard = ({
  evaluation,
  onEvaluate,
}) => {
  const {
    teamName,
    hackathonTitle,
    submittedBy,
    submissionDate,
    score,
    status,
  } = evaluation;

  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-md">
      <div className="space-y-5">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {teamName}
            </h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {hackathonTitle}
            </p>
          </div>

          <Badge
            variant={
              STATUS_VARIANTS[status] ??
              "secondary"
            }
          >
            {STATUS_LABELS[status] ?? status}
          </Badge>
        </div>

        {/* Details */}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <User size={16} />
            {submittedBy}
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <CalendarDays size={16} />
            {submissionDate}
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Star size={16} />

            {score ?? "--"} / 100
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <FileText size={16} />
            Submission Ready
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end">
          <Button
            onClick={() =>
              onEvaluate?.(evaluation)
            }
          >
            {status === "COMPLETED"
              ? "View Evaluation"
              : "Evaluate"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EvaluationCard;