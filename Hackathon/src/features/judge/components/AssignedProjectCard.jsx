import {
  ArrowRight,
  CalendarDays,
  Code2,
  FileText,
  Users,
} from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

const STATUS_VARIANTS = {
  PENDING: "warning",
  IN_REVIEW: "info",
  COMPLETED: "success",
};

const STATUS_LABELS = {
  PENDING: "Pending",
  IN_REVIEW: "In Review",
  COMPLETED: "Completed",
};

const AssignedProjectCard = ({
  project,
  onEvaluate,
}) => {
  const {
    projectTitle,
    teamName,
    technology,
    submissionDate,
    status,
  } = project;

  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-md">
      <div className="space-y-5">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {projectTitle}
            </h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {teamName}
            </p>
          </div>

          <Badge
            variant={
              STATUS_VARIANTS[status] ?? "secondary"
            }
          >
            {STATUS_LABELS[status] ?? status}
          </Badge>
        </div>

        {/* Details */}

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Code2 size={16} />

            <span>{technology}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Users size={16} />

            <span>{teamName}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <CalendarDays size={16} />

            <span>{submissionDate}</span>
          </div>
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <FileText size={16} />

            Submission Ready
          </div>

          <Button
            onClick={() =>
              onEvaluate?.(project)
            }
          >
            Evaluate

            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AssignedProjectCard;