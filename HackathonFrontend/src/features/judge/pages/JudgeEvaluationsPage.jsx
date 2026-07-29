import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  Users,
  Code2,
} from "lucide-react";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

import ScoreForm from "../components/ScoreForm";

import {
  assignedProjects,
} from "../../../mock/judges";
import ROUTES from "../../../constants/routes";

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

const JudgeEvaluationsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const project = useMemo(
    () =>
      assignedProjects.find(
        (item) => String(item.id) === id
      ),
    [id]
  );

  const handleSubmit = async (evaluation) => {
    try {
      setLoading(true);

      /*
        await judgeService.submitEvaluation(
            project.id,
            evaluation
        );
      */

      console.log(evaluation);

      toast.success("Evaluation submitted successfully.");

      navigate(ROUTES.JUDGE_ASSIGNMENTS);
    } catch (error) {
      console.error(error);

      toast.error("Unable to submit evaluation.");
    } finally {
      setLoading(false);
    }
  };

  if (!project) {
    return (
      <Card className="p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Project Not Found
        </h2>

        <p className="mt-3 text-zinc-500 dark:text-zinc-400">
          The requested project could not be found.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back
        </Button>

        <Badge
          variant={
            STATUS_VARIANTS[project.status] ??
            "secondary"
          }
        >
          {STATUS_LABELS[project.status] ??
            project.status}
        </Badge>
      </div>

      {/* Project Information */}

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              {project.projectTitle}
            </h1>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>{project.teamName}</span>
            </div>

            <div className="flex items-center gap-2">
              <Code2 size={18} />
              <span>{project.technology}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{project.submissionDate}</span>
            </div>

            <div className="flex items-center gap-2">
              <Code2 size={18} />
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Repository
              </a>
            </div>
          </div>

          {project.demoUrl && (
            <div>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:underline"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          )}
        </div>
      </Card>

      {/* Evaluation */}

      <ScoreForm
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default JudgeEvaluationsPage;
