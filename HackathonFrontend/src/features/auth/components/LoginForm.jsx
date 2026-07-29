import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

import ROUTES from "../../../constants/routes";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  /*
   * Handle Input Change
   */
  const handleChange = ({ target: { name, value } }) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /*
   * Handle Form Submit
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const payload = {
        email: formData.email.trim(),
        password: formData.password,
      };

      // Login using AuthContext
      const user = await login(payload.email, payload.password);

      console.log("Logged in user:", user);

      // Navigate according to role
      switch (user.role) {
        case "ADMIN":
          navigate(ROUTES.DASHBOARD);
          break;

        case "ORGANIZER":
          navigate(ROUTES.DASHBOARD);
          break;

        case "JUDGE":
          navigate(ROUTES.JUDGE);
          break;

        case "PARTICIPANT":
        default:
          navigate(ROUTES.DASHBOARD);
          break;
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.message);
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
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />

        <div className="flex justify-end">
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          fullWidth
          loading={loading}
        >
          Sign In
        </Button>

        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Don't have an account?{" "}
          <Link
            to={ROUTES.REGISTER}
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default LoginForm;
