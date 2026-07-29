import { Trophy } from "lucide-react";

import ForgotPasswordForm from "../components/ForgetPasswordFrom";

// import { currentUser } from "../../../mock/auth";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-zinc-100 transition-colors duration-300 dark:bg-zinc-950">
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
              Forgot Password
            </h1>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Enter your registered email address and we'll send you a password
              reset link.
            </p>
          </div>

          {/* Forgot Password Form */}

          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;