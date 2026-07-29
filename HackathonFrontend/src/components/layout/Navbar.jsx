import { Menu, Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import THEME from "../../constants/theme";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const name = user?.fullName || user?.displayName || "User";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-20 border-b border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
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
        <div className="flex items-center gap-4">
          {/* Welcome */}
          <span className="hidden text-sm font-medium md:block">
            Welcome, {name}
          </span>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              logout();
              navigate("/login", { replace: true });
            }}
            aria-label="Log out"
            onClick={toggleTheme}
            className="rounded-lg border border-gray-300 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {theme === THEME.DARK ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Avatar */}
          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-blue-600
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            {name.charAt(0).toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
