import {
  Award,
  ClipboardCheck,
  FolderGit2,
  Plus,
  Trophy,
  User,
  Users,
} from "lucide-react";

export const quickActions = [
  {
    id: 1,
    title: "Browse Hackathons",
    description: "Explore available hackathons.",
    icon: Trophy,
    path: "/hackathons",
  },
  {
    id: 2,
    title: "My Team",
    description: "View and manage your team.",
    icon: Users,
    path: "/teams/my",
  },
  {
    id: 3,
    title: "Submit Project",
    description: "Submit your hackathon project.",
    icon: FolderGit2,
    path: "/submissions/create",
  },
  {
    id: 4,
    title: "My Profile",
    description: "Update your profile information.",
    icon: User,
    path: "/profile",
  },
  {
    id: 5,
    title: "Leaderboard",
    description: "Check current rankings.",
    icon: Award,
    path: "/leaderboard",
  },
  {
    id: 6,
    title: "Create Team",
    description: "Create a new team for a hackathon.",
    icon: Plus,
    path: "/teams/create",
  },
];