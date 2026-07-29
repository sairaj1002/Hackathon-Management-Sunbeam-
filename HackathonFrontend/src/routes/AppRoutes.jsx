// import {
//   BrowserRouter,
//   Navigate,
//   Route,
//   Routes,
// } from "react-router-dom";

// import Layout from "../components/layout/Layout";

// import LoginPage from "../features/auth/pages/LoginPage";
// import RegisterPage from "../features/auth/pages/RegisterPage";
// import ForgetPasswordPage from "../features/auth/pages/ForgotPasswordPage"
// import ProtectedRoute from "./ProtectedRoute";
// import RoleRoute from "./RoleRoute";
// import routeConfig from "./routeConfig";

// import ROUTES from "../constants/routes";

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ---------------- Public Routes ---------------- */}

//         <Route
//           path={ROUTES.LOGIN}
//           element={<LoginPage />}
//         />

//         <Route
//           path={ROUTES.REGISTER}
//           element={<RegisterPage />}
//         />

//         <Route
//           path={ROUTES.FORGOT_PASSWORD}
//           element={<ForgetPasswordPage />}
//         />
        

//         {/* ---------------- Application Routes ---------------- */}

//         {routeConfig.map((route) => {
//           let element = route.element;

//           if (route.layout) {
//             element = (
//               <Layout>
//                 {element}
//               </Layout>
//             );
//           }

//           if (route.protected) {
//             element = (
//               <ProtectedRoute>
//                 <RoleRoute allowedRoles={route.roles}>
//                   {element}
//                 </RoleRoute>
//               </ProtectedRoute>
//             );
//           }

//           return (
//             <Route
//               key={route.path}
//               path={route.path}
//               element={element}
//             />
//           );
//         })}

//         {/* ---------------- Default Route ---------------- */}

//         <Route
//           path="/"
//           element={
//             <Navigate
//               to={ROUTES.DASHBOARD}
//               replace
//             />
//           }
//         />

//         {/* ---------------- 404 ---------------- */}

//         <Route
//           path="*"
//           element={
//             <div className="flex min-h-screen items-center justify-center">
//               <h1 className="text-3xl font-bold">
//                 404 - Page Not Found
//               </h1>
//             </div>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ROUTES from "../constants/routes";

// Auth
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";

// Dashboard
import DashboardPage from "../features/dashboard/pages/DashboardPage";

// Hackathons
import HackathonListPage from "../features/hackathon/pages/HackathonListPage";
import HackathonDetailsPage from "../features/hackathon/pages/HackathonDetailsPage";
import CreateHackathonPage from "../features/hackathon/pages/CreateHackathonPage";
import EditHackathonPage from "../features/hackathon/pages/EditHackathonPage";
import MyHackathonsPage from "../features/hackathon/pages/MyHackathonsPage";

// Teams
import TeamPage from "../features/team/pages/TeamPage";
import TeamDetailsPage from "../features/team/pages/TeamDetailsPage";
import CreateTeamPage from "../features/team/pages/CreateTeamPage";
import EditTeamPage from "../features/team/pages/EditTeamPage";
import JoinTeamPage from "../features/team/pages/JoinTeamPage";
import MyTeamPage from "../features/team/pages/MyTeamPage";

// Submissions
import SubmissionPage from "../features/submission/pages/SubmissionPage";
import SubmissionDetailsPage from "../features/submission/pages/SubmissionDetailsPage";
import CreateSubmissionPage from "../features/submission/pages/CreateSubmissionPage";
import EditSubmissionPage from "../features/submission/pages/EditSubmissionPage";
import MySubmissionsPage from "../features/submission/pages/MySubmissionsPage";

// Judge
import JudgeDashboardPage from "../features/judge/pages/JudgeDashboardPage";
import JudgeAssignmentsPage from "../features/judge/pages/JudgeAssignmentsPage";
import JudgeEvaluationsPage from "../features/judge/pages/JudgeEvaluationsPage";

// Leaderboard
import LeaderboardPage from "../features/leaderboard/pages/LeaderboardPage";

// Profile
import ProfilePage from "../features/profile/pages/ProfilePage";
import EditProfilePage from "../features/profile/pages/EditProfilePage";

// // Notifications & Certificates
// import NotificationsPage from "../features/notification/pages/NotificationsPage";

// Admin
// import AdminDashboardPage from "../features/admin/pages/AdminDashboardPage";
// import UserManagementPage from "../features/admin/pages/UserManagementPage";
// import RoleManagementPage from "../features/admin/pages/RoleManagementPage";

// Demo
import ComingSoonPage from "../features/common/ComingSoonPage";
import NotFoundPage from "../features/common/NotFoundPage";
import UnauthorizedPage from "../features/common/UnauthorizedPage";
import UIShowcasePage from "../features/common/UIShowcasePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth */}
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />

        {/* Dashboard */}
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />

        {/* Hackathons */}
        <Route path={ROUTES.HACKATHONS} element={<HackathonListPage />} />
        <Route path={ROUTES.HACKATHON_DETAILS} element={<HackathonDetailsPage />} />
        <Route path={ROUTES.CREATE_HACKATHON} element={<CreateHackathonPage />} />
        <Route path={ROUTES.EDIT_HACKATHON} element={<EditHackathonPage />} />
        <Route path={ROUTES.MY_HACKATHONS} element={<MyHackathonsPage />} />

        {/* Teams */}
        <Route path={ROUTES.TEAMS} element={<TeamPage />} />
        <Route path={ROUTES.TEAM_DETAILS} element={<TeamDetailsPage />} />
        <Route path={ROUTES.CREATE_TEAM} element={<CreateTeamPage />} />
        <Route path={ROUTES.EDIT_TEAM} element={<EditTeamPage />} />
        <Route path={ROUTES.JOIN_TEAM} element={<JoinTeamPage />} />
        <Route path={ROUTES.MY_TEAM} element={<MyTeamPage />} />

        {/* Submissions */}
        <Route path={ROUTES.SUBMISSIONS} element={<SubmissionPage />} />
        <Route path={ROUTES.SUBMISSION_DETAILS} element={<SubmissionDetailsPage />} />
        <Route path={ROUTES.CREATE_SUBMISSION} element={<CreateSubmissionPage />} />
        <Route path={ROUTES.EDIT_SUBMISSION} element={<EditSubmissionPage />} />
        <Route path={ROUTES.MY_SUBMISSIONS} element={<MySubmissionsPage />} />

        {/* Judge */}
        <Route path={ROUTES.JUDGE} element={<JudgeDashboardPage />} />
        <Route path={ROUTES.JUDGE_ASSIGNMENTS} element={<JudgeAssignmentsPage />} />
        <Route path={ROUTES.JUDGE_EVALUATIONS} element={<JudgeEvaluationsPage />} />

        {/* Leaderboard */}
        <Route path={ROUTES.LEADERBOARD} element={<LeaderboardPage />} />

        {/* Profile */}
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.EDIT_PROFILE} element={<EditProfilePage />} />

        {/* Notifications */}
        {/* <Route path={ROUTES.NOTIFICATIONS} element={<NotificationsPage />} /> */}

        {/* Admin */}
        {/* <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboardPage />} />
        <Route path={ROUTES.ADMIN_USERS} element={<UserManagementPage />} />
        <Route path={ROUTES.ADMIN_ROLES} element={<RoleManagementPage />} /> */}

        {/* Demo */}
        <Route path={ROUTES.COMING_SOON} element={<ComingSoonPage />} />
        <Route path={ROUTES.UI_SHOWCASE} element={<UIShowcasePage />} />
        <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;