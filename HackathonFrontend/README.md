src/
│
├── routes/
│   ├── AppRoutes.jsx
│   ├── ProtectedRoute.jsx
│   ├── PublicRoute.jsx
│   ├── RoleRoute.jsx
│   └── index.jsx
│
├── features/
│   ├── auth/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── ForgotPasswordPage.jsx
│   │
│   ├── dashboard/
│   │   └── DashboardPage.jsx
│   │
│   ├── hackathon/
│   │   ├── HackathonListPage.jsx
│   │   ├── HackathonDetailsPage.jsx
│   │   ├── CreateHackathonPage.jsx
│   │   ├── EditHackathonPage.jsx
│   │   └── MyHackathonsPage.jsx
│   │
│   ├── team/
│   │   ├── TeamListPage.jsx
│   │   ├── TeamDetailsPage.jsx
│   │   ├── CreateTeamPage.jsx
│   │   └── EditTeamPage.jsx
│   │
│   ├── submission/
│   │   ├── SubmissionPage.jsx
│   │   ├── CreateSubmissionPage.jsx
│   │   └── EditSubmissionPage.jsx
│   │
│   ├── judge/
│   │   ├── JudgeDashboardPage.jsx
│   │   ├── AssignedProjectsPage.jsx
│   │   └── ScoreProjectPage.jsx
│   │
│   ├── leaderboard/
│   │   └── LeaderboardPage.jsx
│   │
│   ├── profile/
│   │   ├── ProfilePage.jsx
│   │   └── EditProfilePage.jsx
│   │
│   ├── admin/
│   │   ├── UserManagementPage.jsx
│   │   └── RoleManagementPage.jsx
│   │
│   └── common/
│       ├── NotFoundPage.jsx
│       ├── UnauthorizedPage.jsx
│       └── ComingSoonPage.jsx













# Complete Route Map

### Public Routes
| URL                | Page            | Access |
| ------------------ | --------------- | ------ |
| `/`                | Login           | Public |
| `/login`           | Login           | Public |
| `/register`        | Register        | Public |
| `/forgot-password` | Forgot Password | Public |

### Protected Routes

Dashboard
| URL          | Page      |
| ------------ | --------- |
| `/dashboard` | Dashboard |

Profile
| URL             | Page         |
| --------------- | ------------ |
| `/profile`      | Profile      |
| `/profile/edit` | Edit Profile |

Hackathons
| URL                    | Page          |
| ---------------------- | ------------- |
| `/hackathons`          | List          |
| `/hackathons/:id`      | Details       |
| `/hackathons/create`   | Create        |
| `/hackathons/edit/:id` | Edit          |
| `/hackathons/my`       | My Hackathons |

Teams
| URL               | Page         |
| ----------------- | ------------ |
| `/teams`          | Team List    |
| `/teams/:id`      | Team Details |
| `/teams/create`   | Create Team  |
| `/teams/edit/:id` | Edit Team    |

Submission
| URL                           | Page            |
| ----------------------------- | --------------- |
| `/submissions`                | Submission List |
| `/submissions/create/:teamId` | Submit Project  |
| `/submissions/edit/:id`       | Edit Submission |

Judge
| URL                          | Page              |
| ---------------------------- | ----------------- |
| `/judge`                     | Dashboard         |
| `/judge/projects`            | Assigned Projects |
| `/judge/score/:submissionId` | Score Project     |

Results
| URL            | Page        |
| -------------- | ----------- |
| `/leaderboard` | Leaderboard |

Admin
| URL            | Page            |
| -------------- | --------------- |
| `/admin/users` | User Management |
| `/admin/roles` | Role Management |

Error Pages
| URL    | Page         |
| ------ | ------------ |
| `/403` | Unauthorized |
| `*`    | Not Found    |

This separation is common in production React applications, makes testing easier, and is a great architectural point to discuss during interviews. From there, we'll be ready to build the authentication flow and connect the frontend cleanly to your Spring Boot backend.
src/
├── services/
│   ├── authService.js
│   ├── hackathonService.js
│   ├── teamService.js
│   ├── submissionService.js
│   └── judgeService.js
│
├── api/
│   ├── axios.js
│   └── interceptors.js

api/ configures Axios (base URL, JWT interceptor, response interceptor).
services/ contains domain-specific API calls (login, getHackathons, createTeam, etc.).
Components never call Axios directly.