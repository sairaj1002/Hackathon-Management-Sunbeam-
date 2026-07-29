import { LogOut, Menu, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

import THEME from "../../constants/theme";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const name = user?.fullName || user?.displayName || "User";

  const handleLogout = () => {
    logout();
    setSidebarOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-20 border-b border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex h-full items-center justify-between px-6">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-blue-600">
              HackHorizon
            </h1>

            <p className="hidden text-sm text-gray-500 md:block dark:text-gray-400">
              Hackathon Management System
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">

          <span className="hidden text-sm font-medium md:block">
            Welcome, {name}
          </span>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-gray-300 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            title="Toggle Theme"
          >
            {theme === THEME.DARK ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/40"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">
              Logout
            </span>
          </button>

          {/* Avatar */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white transition hover:scale-105"
          >
            {name.charAt(0).toUpperCase()}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;