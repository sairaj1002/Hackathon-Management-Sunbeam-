import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

import SubmissionCard from "../components/SubmissionCard";

import { submissions } from "../../../mock/submissions";

const MySubmissionsPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredSubmissions = useMemo(() => {
    const keyword = search.toLowerCase();

    return submissions.filter(
      (item) =>
        item.projectTitle
          .toLowerCase()
          .includes(keyword)
    );
  }, [search]);

  const handleEdit = (submission) => {
    navigate(`/submissions/${submission.id}/edit`);
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          My Submissions
        </h1>

        <p className="mt-2 text-zinc-500">
          View and manage all submitted projects.
        </p>

      </div>

      <div className="max-w-md">

        <Input
          placeholder="Search submissions..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {filteredSubmissions.length ? (
        <div className="grid gap-6">

          {filteredSubmissions.map(
            (submission) => (
              <SubmissionCard
                key={submission.id}
                submission={submission}
                onEdit={handleEdit}
              />
            )
          )}

        </div>
      ) : (
        <Card className="p-10 text-center">

          <Search
            size={40}
            className="mx-auto mb-3 text-zinc-400"
          />

          <h2 className="text-xl font-semibold">
            No Submissions Found
          </h2>

        </Card>
      )}
    </div>
  );
};

export default MySubmissionsPage;