import Badge from "../../../components/ui/Badge";

const STATUS_VARIANTS = {
  OPEN: "success",
  CLOSING: "warning",
  UPCOMING: "info",
  CLOSED: "secondary",
};

const STATUS_LABELS = {
  OPEN: "Registration Open",
  CLOSING: "Closing Soon",
  UPCOMING: "Upcoming",
  CLOSED: "Closed",
};

const HackathonCard = ({
  title,
  status,
  deadline,
  onClick,
}) => {
  const badgeVariant =
    STATUS_VARIANTS[status] ?? "secondary";

  const badgeLabel =
    STATUS_LABELS[status] ?? status;

  return (
    <div
      onClick={onClick}
      className={`
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        dark:border-gray-700
        dark:bg-gray-800

        ${
          onClick
            ? "cursor-pointer hover:-translate-y-1 hover:shadow-md"
            : ""
        }
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Registration Deadline{" "}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {deadline}
            </span>
          </p>
        </div>

        <Badge variant={badgeVariant}>
          {badgeLabel}
        </Badge>
      </div>
    </div>
  );
};

export default HackathonCard;