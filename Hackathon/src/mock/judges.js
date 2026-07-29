export const assignedProjects=[{id:1,projectTitle:"Smart Health",teamName:"Code Warriors",technology:"React + Spring Boot",status:"PENDING"}];
export const projectDetails={id:1,projectTitle:"Smart Health",description:"Healthcare Platform",githubUrl:"https://github.com/demo",demoUrl:"https://demo.com"};
export const judgeActivities = [
  {
    id: 1,
    type: "EVALUATION_COMPLETED",
    title: "Evaluated Smart Health",
    description:
      "Submitted evaluation with an overall score of 92/100.",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "PROJECT_ASSIGNED",
    title: "New Project Assigned",
    description:
      "Agri AI has been assigned for evaluation.",
    date: "Yesterday",
  },
  {
    id: 3,
    type: "SCORE_UPDATED",
    title: "Evaluation Updated",
    description:
      "Updated the score for Cyber Shield after review.",
    date: "3 days ago",
  },
];

const statistics = [
    {
      id: "total-assigned",
      title: "Assigned Projects",
      value: "12",
      variant: "primary",
    },
    {
      id: "pending-evals",
      title: "Pending Evaluations",
      value: "4",
      variant: "warning",
    },
    {
      id: "completed-evals",
      title: "Completed Evaluations",
      value: "8",
      variant: "success",
    },
    {
      id: "avg-score",
      title: "Average Score Given",
      value: "85/100",
      variant: "info",
    },
  ];

// Export the aggregated object
export const judgeDashboardData = {
  statistics,
  assignedProjects,
  recentActivities: judgeActivities,
};