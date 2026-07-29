import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import routeConfig from "../../routes/routeConfig";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  collapsed,
  setCollapsed,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-20
          left-0
          z-50
          h-[calc(100vh-80px)]
          border-r
          border-gray-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          dark:border-gray-800
          dark:bg-gray-950

          ${collapsed ? "w-20" : "w-64"}

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-end p-4">
          {/* Desktop Collapse */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:flex"
          >
            {collapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>

          {/* Mobile Close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 px-3">
          {routeConfig
            .filter((route) => route.showInSidebar)
            .map((route) => {
              const Icon = route.icon;

              return (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    px-4
                    py-3
                    transition-all

                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }
                    `
                  }
                >
                  <Icon size={20} className="shrink-0" />

                  {!collapsed && (
                    <span className="font-medium">
                      {route.title}
                    </span>
                  )}
                </NavLink>
              );
            })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;