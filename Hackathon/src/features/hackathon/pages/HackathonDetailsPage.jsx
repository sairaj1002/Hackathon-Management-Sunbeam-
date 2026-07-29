import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Users,
  Trophy,
  ClipboardList,
} from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

import { hackathons } from "../../../mock/hackathons";

const STATUS_VARIANTS = {
  OPEN: "success",
  ONGOING: "info",
  COMPLETED: "secondary",
  CLOSED: "danger",
};

const STATUS_LABELS = {
  OPEN: "Registration Open",
  ONGOING: "Ongoing",
  COMPLETED: "Completed",
  CLOSED: "Registration Closed",
};

const HackathonDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const hackathon = useMemo(
    () => hackathons.find((item) => String(item.id) === id),
    [id]
  );

  if (!hackathon) {
    return (
      <div className="space-y-6">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back
        </Button>

        <Card className="p-10 text-center">
          <h2 className="text-2xl font-semibold">
            Hackathon Not Found
          </h2>

          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            The requested hackathon does not exist.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            Back
          </Button>

          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            {hackathon.title}
          </h1>

          <p className="max-w-3xl text-zinc-600 dark:text-zinc-400">
            {hackathon.description}
          </p>
        </div>

        <Badge variant={STATUS_VARIANTS[hackathon.status] ?? "secondary"}>
          {STATUS_LABELS[hackathon.status] ?? hackathon.status}
        </Badge>
      </div>

      {/* Information */}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-5 text-lg font-semibold">
            General Information
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>{hackathon.mode}</span>
            </div>

            <div className="flex items-center gap-3">
              <Users size={18} />
              <span>{hackathon.participants} Participants</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays size={18} />
              <span>
                {hackathon.startDate}
                {hackathon.endDate &&
                  ` - ${hackathon.endDate}`}
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-5 text-lg font-semibold">
            Team Configuration
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users size={18} />

              <span>
                Maximum Team Size :{" "}
                {hackathon.maxTeamSize ?? "-"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ClipboardList size={18} />

              <span>
                Maximum Members :{" "}
                {hackathon.maxMembers ?? "-"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Trophy size={18} />

              <span>
                Prize Pool : {hackathon.prizePool ?? "TBA"}
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Actions */}

      <Card className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Organizer Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button>
            Edit Hackathon
          </Button>

          <Button variant="outline">
            Manage Teams
          </Button>

          <Button variant="outline">
            View Submissions
          </Button>

          <Button variant="outline">
            View Evaluations
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HackathonDetailsPage;