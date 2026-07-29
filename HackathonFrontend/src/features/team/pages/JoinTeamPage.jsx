import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  ArrowLeft,
  CalendarDays,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

import MemberList from "../components/MemberList";

import { teams } from "../../../mock/teams";

const STATUS_VARIANTS = {
  OPEN: "success",
  FULL: "secondary",
  CLOSED: "danger",
};

const JoinTeamPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const team = useMemo(
    () =>
      teams.find(
        (item) => String(item.id) === id
      ),
    [id]
  );

  const handleJoin = async () => {
    try {
      setLoading(true);

      /*
      await teamService.joinTeam(id);
      */

      toast.success("Team joined successfully.");

      navigate(`/teams/${id}`);
    } catch (error) {
      console.error(error);

      toast.error("Unable to join the team.");
    } finally {
      setLoading(false);
    }
  };

  if (!team) {
    return (
      <Card className="p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Team Not Found
        </h2>

        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          The requested team could not be found.
        </p>
      </Card>
    );
  }

  const seatsRemaining =
    team.maxMembers - team.memberCount;

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
            STATUS_VARIANTS[team.status] ??
            "secondary"
          }
        >
          {team.status}
        </Badge>

      </div>

      {/* Team Information */}

      <Card className="p-6">

        <div className="space-y-6">

          <div>

            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              {team.teamName}
            </h1>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {team.description}
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-2">
              <Trophy size={18} />
              {team.hackathonName}
            </div>

            <div className="flex items-center gap-2">
              <UserCheck size={18} />
              {team.leader}
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              {team.memberCount}/{team.maxMembers} Members
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              {team.createdAt}
            </div>

          </div>

        </div>

      </Card>

      {/* Members */}

      <MemberList
        members={team.members}
      />

      {/* Join Card */}

      <Card className="p-6">

        <div className="space-y-5">

          <div>

            <h2 className="text-xl font-semibold">
              Join This Team
            </h2>

            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Remaining Seats:{" "}
              <span className="font-semibold">
                {seatsRemaining}
              </span>
            </p>

          </div>

          <div className="flex justify-end">

            <Button
              loading={loading}
              disabled={
                loading ||
                seatsRemaining <= 0 ||
                team.status !== "OPEN"
              }
              onClick={handleJoin}
            >
              Join Team
            </Button>

          </div>

        </div>

      </Card>

    </div>
  );
};

export default JoinTeamPage;