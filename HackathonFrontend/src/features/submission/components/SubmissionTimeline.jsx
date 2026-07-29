import {
  CheckCircle2,
  Clock3,
  Search,
  Trophy,
} from "lucide-react";

import Card from "../../../components/ui/Card";

const ICONS = {
  Submitted: Clock3,
  Reviewing: Search,
  Evaluated: CheckCircle2,
  Result: Trophy,
};

const SubmissionTimeline = ({
  timeline = [],
}) => {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Submission Timeline
      </h2>

      <div className="space-y-6">
        {timeline.map((item, index) => {
          const Icon = ICONS[item.title] ?? Clock3;

          return (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="mt-1">
                <Icon
                  size={20}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-500">
                  {item.description}
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  {item.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default SubmissionTimeline;