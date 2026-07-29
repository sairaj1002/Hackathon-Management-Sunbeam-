import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Trophy,
  UserCheck,
  Users,
  Pencil,
  LogOut,
} from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

import MemberList from "../components/MemberList";

import { myTeam } from "../../../mock/teams";

const STATUS_VARIANTS = {
  OPEN: "success",
  FULL: "secondary",
  CLOSED: "danger",
};

const MyTeamPage = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/teams/${myTeam.id}/edit`);
  };

  const handleView = () => {
    navigate(`/teams/${myTeam.id}`);
  };

  const handleLeave = async () => {
    /*
    await teamService.leaveTeam(myTeam.id);
    */

    console.log("Leave Team");
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            My Team
          </h1>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Manage your current hackathon team.
          </p>
        </div>

        <Badge
          variant={
            STATUS_VARIANTS[myTeam.status] ??
            "secondary"
          }
        >
          {myTeam.status}
        </Badge>
      </div>

      {/* Team Summary */}

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">
              {myTeam.teamName}
            </h2>

            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              {myTeam.description}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-2">
              <Trophy size={18} />
              <span>{myTeam.hackathonName}</span>
            </div>

            <div className="flex items-center gap-2">
              <UserCheck size={18} />
              <span>{myTeam.leader}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>
                {myTeam.memberCount}/{myTeam.maxMembers} Members
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{myTeam.createdAt}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Members */}

      <MemberList members={myTeam.members} />

      {/* Actions */}

      <div className="flex flex-wrap justify-end gap-4">
        <Button
          variant="outline"
          onClick={handleView}
        >
          View Team
        </Button>

        <Button
          variant="outline"
          onClick={handleEdit}
        >
          <Pencil size={16} />
          Edit Team
        </Button>

        <Button
          variant="danger"
          onClick={handleLeave}
        >
          <LogOut size={16} />
          Leave Team
        </Button>
      </div>
    </div>
  );
};

export default MyTeamPage;