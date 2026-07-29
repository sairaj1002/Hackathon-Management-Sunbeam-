import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import Input from "../../../components/ui/Input";
import Card from "../../../components/ui/Card";

import AssignedProjectCard from "../components/AssignedProjectCard";

import {
  assignedProjects,
  projectDetails,
} from "../../../mock/judges";

const JudgeAssignmentsPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return assignedProjects.filter((project) => {
      const keyword = search.toLowerCase();

      return (
        project.projectTitle.toLowerCase().includes(keyword) ||
        project.teamName.toLowerCase().includes(keyword) ||
        project.technology.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  const handleEvaluate = (project) => {
    navigate(`/judge/projects/${project.id}/score`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Assigned Projects
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Review and evaluate projects assigned to you.
        </p>
      </div>

      {/* Search */}

      <div className="max-w-md">
        <Input
          placeholder="Search by project, team or technology..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Project List */}

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6">
          {filteredProjects.map((project) => (
            <AssignedProjectCard
              key={project.id}
              project={project}
              onEvaluate={handleEvaluate}
            />
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <Search
            size={48}
            className="mx-auto mb-4 text-zinc-400"
          />

          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            No Projects Found
          </h2>

          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Try changing your search keyword.
          </p>
        </Card>
      )}
    </div>
  );
};

export default JudgeAssignmentsPage;