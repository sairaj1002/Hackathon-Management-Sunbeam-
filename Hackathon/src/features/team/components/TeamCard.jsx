import {
  Users,
  UserCheck,
  CalendarDays,
} from "lucide-react";

import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

const STATUS_VARIANTS = {
  OPEN: "success",
  FULL: "secondary",
  CLOSED: "danger",
};

const TeamCard = ({
  team,
  onView,
}) => {
  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-md">
      <div className="space-y-5">

        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-xl font-semibold">
              {team.teamName}
            </h2>

            <p className="text-zinc-500 mt-1">
              {team.hackathonName}
            </p>
          </div>

          <Badge
            variant={
              STATUS_VARIANTS[team.status] ??
              "secondary"
            }
          >
            {team.status}
          </Badge>

        </div>

        <div className="grid md:grid-cols-3 gap-4 text-sm">

          <div className="flex items-center gap-2">
            <Users size={16} />
            {team.memberCount}/{team.maxMembers}
          </div>

          <div className="flex items-center gap-2">
            <UserCheck size={16} />
            {team.leader}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {team.createdAt}
          </div>

        </div>

        <div className="flex justify-end">

          <Button
            onClick={() => onView?.(team)}
          >
            View Team
          </Button>

        </div>

      </div>
    </Card>
  );
};

export default TeamCard;