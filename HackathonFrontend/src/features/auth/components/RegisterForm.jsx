import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

import ROUTES from "../../../constants/routes";
import useAuth from "../../../hooks/useAuth";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      // TODO:
      // Show toast notification
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
      };

      await register(payload);
      toast.success("Account created successfully.");
      navigate(ROUTES.DASHBOARD, { replace: true });
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(error.message || "Unable to create your account.");
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
        {/* Full Name */}

        <Input
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          autoComplete="name"
          required
        />

        {/* Email */}

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

        {/* Password */}

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />

        {/* Confirm Password */}

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />

        {/* Submit */}

        <Button
          type="submit"
          fullWidth
          loading={loading}
        >
          Create Account
        </Button>

        {/* Login */}

        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account?{" "}
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

export default RegisterForm;
