import Badge from "../../../components/ui/Badge";

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

const SubmissionStatusBadge = ({ status }) => {
  return (
    <Badge
      variant={STATUS_VARIANTS[status] ?? "secondary"}
    >
      {STATUS_LABELS[status] ?? status}
    </Badge>
  );
};

export default SubmissionStatusBadge;