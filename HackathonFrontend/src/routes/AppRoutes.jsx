import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ROUTES from "../constants/routes";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import ComingSoonPage from "../features/common/ComingSoonPage";
import NotFoundPage from "../features/common/NotFoundPage";
import UnauthorizedPage from "../features/common/UnauthorizedPage";
import UIShowcasePage from "../features/common/UIShowcasePage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import UserManagementPage from "../features/admin/pages/UserManagementPage";
import RoleManagementPage from "../features/admin/pages/RoleManagementPage";
import CreateHackathonPage from "../features/hackathon/pages/CreateHackathonPage";
import EditHackathonPage from "../features/hackathon/pages/EditHackathonPage";
import HackathonDetailsPage from "../features/hackathon/pages/HackathonDetailsPage";
import HackathonListPage from "../features/hackathon/pages/HackathonListPage";
import MyHackathonsPage from "../features/hackathon/pages/MyHackathonsPage";
import JudgeAssignmentsPage from "../features/judge/pages/JudgeAssignmentsPage";
import JudgeDashboardPage from "../features/judge/pages/JudgeDashboardPage";
import JudgeEvaluationsPage from "../features/judge/pages/JudgeEvaluationsPage";
import LeaderboardPage from "../features/leaderboard/pages/LeaderboardPage";
import EditProfilePage from "../features/profile/pages/EditProfilePage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import CreateSubmissionPage from "../features/submission/pages/CreateSubmissionPage";
import EditSubmissionPage from "../features/submission/pages/EditSubmissionPage";
import MySubmissionsPage from "../features/submission/pages/MySubmissionsPage";
import SubmissionDetailsPage from "../features/submission/pages/SubmissionDetailsPage";
import SubmissionPage from "../features/submission/pages/SubmissionPage";
import CreateTeamPage from "../features/team/pages/CreateTeamPage";
import EditTeamPage from "../features/team/pages/EditTeamPage";
import JoinTeamPage from "../features/team/pages/JoinTeamPage";
import MyTeamPage from "../features/team/pages/MyTeamPage";
import TeamDetailsPage from "../features/team/pages/TeamDetailsPage";
import TeamPage from "../features/team/pages/TeamPage";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import ROLES from "../constants/roles";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />

          <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN, ROLES.ORGANIZER, ROLES.PARTICIPANT]} />}>
            <Route path={ROUTES.HACKATHONS} element={<HackathonListPage />} />
            <Route path={ROUTES.HACKATHON_DETAILS} element={<HackathonDetailsPage />} />
          </Route>
          <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN, ROLES.ORGANIZER]} />}>
            <Route path={ROUTES.CREATE_HACKATHON} element={<CreateHackathonPage />} />
            <Route path={ROUTES.EDIT_HACKATHON} element={<EditHackathonPage />} />
            <Route path={ROUTES.MY_HACKATHONS} element={<MyHackathonsPage />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={[ROLES.PARTICIPANT]} />}>
            <Route path={ROUTES.TEAMS} element={<TeamPage />} />
            <Route path={ROUTES.TEAM_DETAILS} element={<TeamDetailsPage />} />
            <Route path={ROUTES.CREATE_TEAM} element={<CreateTeamPage />} />
            <Route path={ROUTES.EDIT_TEAM} element={<EditTeamPage />} />
            <Route path={ROUTES.JOIN_TEAM} element={<JoinTeamPage />} />
            <Route path={ROUTES.MY_TEAM} element={<MyTeamPage />} />
            <Route path={ROUTES.SUBMISSIONS} element={<SubmissionPage />} />
            <Route path={ROUTES.SUBMISSION_DETAILS} element={<SubmissionDetailsPage />} />
            <Route path={ROUTES.CREATE_SUBMISSION} element={<CreateSubmissionPage />} />
            <Route path={ROUTES.EDIT_SUBMISSION} element={<EditSubmissionPage />} />
            <Route path={ROUTES.MY_SUBMISSIONS} element={<MySubmissionsPage />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={[ROLES.JUDGE]} />}>
            <Route path={ROUTES.JUDGE} element={<JudgeDashboardPage />} />
            <Route path={ROUTES.JUDGE_ASSIGNMENTS} element={<JudgeAssignmentsPage />} />
            <Route path={ROUTES.JUDGE_EVALUATIONS} element={<Navigate to={ROUTES.JUDGE_ASSIGNMENTS} replace />} />
            <Route path={ROUTES.JUDGE_EVALUATION_DETAILS} element={<JudgeEvaluationsPage />} />
          </Route>
          <Route path={ROUTES.LEADERBOARD} element={<LeaderboardPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.EDIT_PROFILE} element={<EditProfilePage />} />
          <Route path={ROUTES.NOTIFICATIONS} element={<ComingSoonPage />} />
          <Route path={ROUTES.CERTIFICATES} element={<ComingSoonPage />} />
          <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN]} />}>
            <Route path={ROUTES.ADMIN_USERS} element={<UserManagementPage />} />
            <Route path={ROUTES.ADMIN_ROLES} element={<RoleManagementPage />} />
            <Route path={ROUTES.ADMIN_DASHBOARD} element={<ComingSoonPage />} />
            <Route path={ROUTES.ADMIN_HACKATHONS} element={<ComingSoonPage />} />
            <Route path={ROUTES.ADMIN_SUBMISSIONS} element={<ComingSoonPage />} />
            <Route path={ROUTES.ADMIN_EVALUATIONS} element={<ComingSoonPage />} />
            <Route path={ROUTES.ADMIN_ANALYTICS} element={<ComingSoonPage />} />
            <Route path={ROUTES.ADMIN_SETTINGS} element={<ComingSoonPage />} />
          </Route>
          <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN, ROLES.ORGANIZER]} />}>
            <Route path={ROUTES.ORGANIZER_DASHBOARD} element={<ComingSoonPage />} />
            <Route path={ROUTES.ORGANIZER_HACKATHONS} element={<ComingSoonPage />} />
            <Route path={ROUTES.ORGANIZER_TEAMS} element={<ComingSoonPage />} />
            <Route path={ROUTES.ORGANIZER_SUBMISSIONS} element={<ComingSoonPage />} />
            <Route path={ROUTES.ORGANIZER_JUDGES} element={<ComingSoonPage />} />
          </Route>
          <Route path={ROUTES.COMING_SOON} element={<ComingSoonPage />} />
          <Route path={ROUTES.UI_SHOWCASE} element={<UIShowcasePage />} />
        </Route>
      </Route>

      <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
