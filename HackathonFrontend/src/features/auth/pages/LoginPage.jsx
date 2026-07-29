import { Trophy } from "lucide-react";

import LoginForm from "../components/LoginForm";
import { currentUser } from "../../../mock/auth";
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          
          {/* Branding */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
              <Trophy
                size={30}
                className="text-white"
              />
            </div>

            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Hackathon Hub
            </h1>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Welcome back! Sign in to continue.
            </p>
          </div>

          {/* Login Form */}

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;