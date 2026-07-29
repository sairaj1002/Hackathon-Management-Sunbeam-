import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

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

const HackathonCard = ({
  hackathon,
  onViewDetails,
}) => {
  const {
    title,
    description,
    status,
    mode,
    participants,
    startDate,
    endDate,
  } = hackathon;

  const badgeVariant =
    STATUS_VARIANTS[status] ?? "secondary";

  const badgeLabel =
    STATUS_LABELS[status] ?? status;

  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-md">
      <div className="flex flex-col gap-5">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {title}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>

          <Badge variant={badgeVariant}>
            {badgeLabel}
          </Badge>
        </div>

        {/* Details */}

        <div className="grid gap-4 text-sm text-zinc-600 dark:text-zinc-400 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <MapPin
              size={16}
              className="text-blue-600"
            />

            <span>{mode}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users
              size={16}
              className="text-blue-600"
            />

            <span>{participants} Participants</span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays
              size={16}
              className="text-blue-600"
            />

            <span>
              {startDate}
              {endDate ? ` - ${endDate}` : ""}
            </span>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end">
          <Button
            variant="outline"
            onClick={() => onViewDetails?.(hackathon)}
          >
            View Details

            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HackathonCard;