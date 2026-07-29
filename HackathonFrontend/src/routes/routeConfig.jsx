import {
  LayoutDashboard,
  Trophy,
  Users,
  FolderOpen,
  Gavel,
  Medal,
  User,
  Shield,
} from "lucide-react";

import ROUTES from "../constants/routes";
import ROLES from "../constants/roles";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import HackathonListPage from "../features/hackathon/pages/HackathonListPage";
import TeamPage from "../features/team/pages/TeamPage";
import SubmissionPage from "../features/submission/pages/SubmissionPage";
import LeaderboardPage from "../features/leaderboard/pages/LeaderboardPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import UserManagementPage from "../features/admin/pages/UserManagementPage";
import RoleManagementPage from "../features/admin/pages/RoleManagementPage";
import JudgeDashboardPage from "../features/judge/pages/JudgeDashboardPage";

const ALL_USERS = [
  ROLES.ADMIN,
  ROLES.ORGANIZER,
  ROLES.JUDGE,
  ROLES.PARTICIPANT,
];

const routeConfig = [
  {
    title: "Dashboard",
    path: ROUTES.DASHBOARD,
    element: <DashboardPage />,
    icon: LayoutDashboard,

    protected: true,
    layout: true,
    showInSidebar: true,

    roles: ALL_USERS,
  },

  {
    title: "Hackathons",
    path: ROUTES.HACKATHONS,
    element: <HackathonListPage />,
    icon: Trophy,

    protected: true,
    layout: true,
    showInSidebar: true,

    roles: [
      ROLES.ADMIN,
      ROLES.ORGANIZER,
      ROLES.PARTICIPANT,
    ],
  },

  {
    title: "Teams",
    path: ROUTES.TEAMS,
    element: <TeamPage />,
    icon: Users,

    protected: true,
    layout: true,
    showInSidebar: true,

    roles: [
      ROLES.PARTICIPANT,
    ],
  },

  {
    title: "Submissions",
    path: ROUTES.SUBMISSIONS,
    element: <SubmissionPage />,
    icon: FolderOpen,

    protected: true,
    layout: true,
    showInSidebar: true,

    roles: [
      ROLES.PARTICIPANT,
    ],
  },

  {
    title: "Judge",
    path: ROUTES.JUDGE,
    element: <JudgeDashboardPage />,
    icon: Gavel,

    protected: true,
    layout: true,
    showInSidebar: true,

    roles: [
      ROLES.JUDGE,
    ],
  },

  {
    title: "Leaderboard",
    path: ROUTES.LEADERBOARD,
    element: <LeaderboardPage />,
    icon: Medal,

    protected: true,
    layout: true,
    showInSidebar: true,

    roles: ALL_USERS,
  },

  {
    title: "Profile",
    path: ROUTES.PROFILE,
    element: <ProfilePage />,
    icon: User,

    protected: true,
    layout: true,
    showInSidebar: false,

    roles: ALL_USERS,
  },

  {
    title: "Users",
    path: ROUTES.ADMIN_USERS,
    element: <UserManagementPage />,
    icon: Shield,

    protected: true,
    layout: true,
    showInSidebar: true,

    roles: [
      ROLES.ADMIN,
    ],
  },
  {
    title: "Roles",
    path: ROUTES.ADMIN_ROLES,
    element: <RoleManagementPage />,
    icon: Shield,
    protected: true,
    layout: true,
    showInSidebar: true,
    roles: [ROLES.ADMIN],
  },
];

export default routeConfig;
