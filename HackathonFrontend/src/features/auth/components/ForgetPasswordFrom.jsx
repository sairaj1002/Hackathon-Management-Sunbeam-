import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

import ROUTES from "../../../constants/routes";

import { currentUser } from "../../../mock/auth";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  /*
   * Handle Submit
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const payload = {
        email: email.trim(),
      };

      // TODO:
      // await authApi.forgotPassword(payload);

      console.log(payload);

      // TODO:
      // Show success toast
      // "Password reset link sent successfully."
    } catch (error) {
      console.error("Forgot password failed:", error);

      // TODO:
      // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-8">
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Email */}

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />

        {/* Submit */}

        <Button
          type="submit"
          fullWidth
          loading={loading}
        >
          Send Reset Link
        </Button>

        {/* Back to Login */}

        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Remember your password?{" "}
          <Link
            to={ROUTES.LOGIN}
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default ForgotPasswordForm;