import {
  Crown,
  User,
} from "lucide-react";

import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

const MemberList = ({
  members = [],
}) => {
  return (
    <Card className="p-6">

      <h2 className="text-xl font-semibold mb-6">
        Team Members
      </h2>

      <div className="space-y-4">

        {members.map((member) => (
          <div
            key={member.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3">

              {member.isLeader ? (
                <Crown
                  size={18}
                  className="text-yellow-500"
                />
              ) : (
                <User size={18} />
              )}

              <div>

                <h3 className="font-medium">
                  {member.name}
                </h3>

                <p className="text-sm text-zinc-500">
                  {member.email}
                </p>

              </div>

            </div>

            <Badge
              variant={
                member.isLeader
                  ? "warning"
                  : "secondary"
              }
            >
              {member.isLeader
                ? "Leader"
                : "Member"}
            </Badge>

          </div>
        ))}

      </div>

    </Card>
  );
};

export default MemberList;