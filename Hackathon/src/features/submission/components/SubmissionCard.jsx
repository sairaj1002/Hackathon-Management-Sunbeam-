import {
  CalendarDays,
  ExternalLink,
  Pencil,
} from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

const STATUS_VARIANTS = {
  PENDING: "warning",
  UNDER_REVIEW: "info",
  APPROVED: "success",
  REJECTED: "danger",
};

const STATUS_LABELS = {
  PENDING: "Pending",
  UNDER_REVIEW: "Under Review",
  APPROVED: "Approved",
  REJECTED: "Rejected",
};

const SubmissionCard = ({
  submission,
  onEdit,
}) => {
  const {
    projectTitle,
    description,
    githubUrl,
    demoUrl,
    submissionDate,
    status,
  } = submission;

  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-md">
      <div className="space-y-5">

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {projectTitle}
            </h2>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {description}
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

        <div className="flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-400">

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {submissionDate}
          </div>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Github size={16} />
              GitHub
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            onClick={() => onEdit?.(submission)}
          >
            <Pencil size={16} />
            Edit Submission
          </Button>
        </div>

      </div>
    </Card>
  );
};

export default SubmissionCard;