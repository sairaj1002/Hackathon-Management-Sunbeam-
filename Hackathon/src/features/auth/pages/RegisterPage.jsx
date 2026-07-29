import { Trophy } from "lucide-react";

import RegisterForm from "../components/RegisterForm";
import { currentUser } from "../../../mock/auth";
const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
              <Trophy
                size={30}
                className="text-white"
              />
            </div>

            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Join Hackathon Hub and start participating.
            </p>
          </div>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;