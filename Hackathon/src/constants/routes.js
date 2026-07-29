const ROUTES = {
  // =========================
  // Public Routes
  // =========================
  HOME: "/",

  LOGIN: "/login",

  REGISTER: "/register",

  FORGOT_PASSWORD: "/forgot-password",

  // =========================
  // Demo Routes
  // =========================
  COMING_SOON: "/demo/coming-soon",

  UI_SHOWCASE: "/demo/ui-showcase",

  UNAUTHORIZED: "/unauthorized",

  NOT_FOUND: "*",

  // =========================
  // Dashboard
  // =========================
  DASHBOARD: "/dashboard",

  // =========================
  // Hackathons
  // =========================
  HACKATHONS: "/hackathons",

  HACKATHON_DETAILS: "/hackathons/:id",

  CREATE_HACKATHON: "/hackathons/create",

  EDIT_HACKATHON: "/hackathons/:id/edit",

  MY_HACKATHONS: "/hackathons/my",

  // =========================
  // Teams
  // =========================
  TEAMS: "/teams",

  TEAM_DETAILS: "/teams/:id",

  CREATE_TEAM: "/teams/create",

  EDIT_TEAM: "/teams/:id/edit",

  JOIN_TEAM: "/teams/:id/join",

  MY_TEAM: "/teams/my",

  // =========================
  // Submissions
  // =========================
  SUBMISSIONS: "/submissions",

  SUBMISSION_DETAILS: "/submissions/:id",

  CREATE_SUBMISSION: "/submissions/create",

  EDIT_SUBMISSION: "/submissions/:id/edit",

  MY_SUBMISSIONS: "/submissions/my",

  // =========================
  // Judge
  // =========================
  JUDGE: "/judge",

  JUDGE_ASSIGNMENTS: "/judge/assignments",

  JUDGE_EVALUATIONS: "/judge/evaluations",

  JUDGE_EVALUATION_DETAILS: "/judge/evaluations/:id",

  // =========================
  // Leaderboard
  // =========================
  LEADERBOARD: "/leaderboard",

  // =========================
  // Profile
  // =========================
  PROFILE: "/profile",

  EDIT_PROFILE: "/profile/edit",

  // =========================
  // Notifications
  // =========================
  NOTIFICATIONS: "/notifications",

  // =========================
  // Certificates
  // =========================
  CERTIFICATES: "/certificates",

  // =========================
  // Organizer
  // =========================
  ORGANIZER_DASHBOARD: "/organizer",

  ORGANIZER_HACKATHONS: "/organizer/hackathons",

  ORGANIZER_TEAMS: "/organizer/teams",

  ORGANIZER_SUBMISSIONS: "/organizer/submissions",

  ORGANIZER_JUDGES: "/organizer/judges",

  // =========================
  // Admin
  // =========================
  ADMIN_DASHBOARD: "/admin",

  ADMIN_USERS: "/admin/users",

  ADMIN_HACKATHONS: "/admin/hackathons",

  ADMIN_SUBMISSIONS: "/admin/submissions",

  ADMIN_EVALUATIONS: "/admin/evaluations",

  ADMIN_ANALYTICS: "/admin/analytics",

  ADMIN_SETTINGS: "/admin/settings",
};

export default ROUTES;