import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { logout, getUserName } from "@/lib/auth";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const userName = getUserName() || "Admin";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Menu Management", path: "/admin/menu" },
    { label: "Attendance & Reports", path: "/admin/attendance" },
    { label: "Upload Bill", path: "/admin/bill" },
    { label: "Notice Management", path: "/admin/notices" },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#f5f7fb" }}>
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 flex flex-col transition-transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#3f3d56" }}
      >
        {/* Logo Section */}
        <div className="p-6 border-b" style={{ borderColor: "#6b6f85" }}>
          <h1 className="text-lg font-medium text-white">Mess Management</h1>
          <p className="text-xs mt-1" style={{ color: "#a8aab8" }}>
            Administrator
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                if (window.innerWidth < 768) {
                  setSidebarOpen(false);
                }
              }}
              className="w-full text-left px-6 py-3 text-sm font-medium transition-colors"
              style={{
                color: isActive(item.path) ? "#5a4fcf" : "#ffffff",
                backgroundColor: isActive(item.path) ? "rgba(90, 79, 207, 0.1)" : "transparent",
                borderLeft: isActive(item.path) ? "3px solid #5a4fcf" : "3px solid transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t" style={{ borderColor: "#6b6f85" }}>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 rounded font-medium text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#5a4fcf", color: "#ffffff" }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header
          className="border-b"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 rounded transition-colors"
                style={{ backgroundColor: "#f5f7fb" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h2 className="text-sm font-medium hidden md:block" style={{ color: "#6b6f85" }}>
                Welcome, {userName}
              </h2>
            </div>
            <div className="text-sm" style={{ color: "#6b6f85" }}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto" style={{ backgroundColor: "#f5f7fb" }}>
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black z-40"
          style={{ opacity: 0.5 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
