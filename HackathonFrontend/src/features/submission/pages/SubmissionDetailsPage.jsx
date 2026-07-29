import { useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  CalendarDays,
  ExternalLink
} from "lucide-react";

import Card from "../../../components/ui/Card";

import SubmissionStatusBadge from "../components/SubmissionStatusBadge";
import SubmissionTimeline from "../components/SubmissionTimeline";

import { submissions } from "../../../mock/submissions";

const SubmissionDetailsPage = () => {
  const { id } = useParams();

  const submission = useMemo(
    () =>
      submissions.find(
        (item) => String(item.id) === id
      ),
    [id]
  );

  if (!submission) {
    return (
      <Card className="p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Submission Not Found
        </h2>
      </Card>
    );
  }

  return (
    <div className="space-y-8">

      <Card className="p-6">

        <div className="flex items-start justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              {submission.projectTitle}
            </h1>

            <p className="mt-3 text-zinc-500">
              {submission.description}
            </p>
          </div>

          <SubmissionStatusBadge
            status={submission.status}
          />

        </div>

        <div className="mt-8 flex flex-wrap gap-6">

          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            {submission.submissionDate}
          </div>

          <a
            href={submission.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-600"
          >
            @ 
            GitHub
          </a>

          {submission.demoUrl && (
            <a
              href={submission.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          )}

        </div>

      </Card>

      <SubmissionTimeline
        timeline={submission.timeline}
      />

    </div>
  );
};

export default SubmissionDetailsPage;