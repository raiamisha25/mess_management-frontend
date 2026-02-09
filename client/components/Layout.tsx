import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  role: "student" | "admin";
}

export default function Layout({ children, role }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("userId") || "User";
  const userName = localStorage.getItem("userName") || userId;

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const studentNavItems = [
    { label: "Dashboard", path: "/student/dashboard", icon: "📊" },
    { label: "View Menu", path: "/student/menu", icon: "🍽️" },
    { label: "Meal Attendance", path: "/student/attendance", icon: "✓" },
    { label: "Meal Cancellation", path: "/student/cancellation", icon: "✗" },
    { label: "View Bill", path: "/student/bill", icon: "💰" },
    { label: "View Notices", path: "/student/notices", icon: "📢" },
  ];

  const adminNavItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { label: "Menu Management", path: "/admin/menu", icon: "🍽️" },
    { label: "Attendance & Reports", path: "/admin/attendance", icon: "📈" },
    { label: "Upload Bill", path: "/admin/bill", icon: "💾" },
    { label: "Notice Management", path: "/admin/notices", icon: "📝" },
  ];

  const navItems = role === "student" ? studentNavItems : adminNavItems;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-primary text-primary-foreground flex flex-col transition-transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl font-bold">Mess Management</h1>
          <p className="text-sm text-opacity-80 text-primary-foreground">
            {role === "admin" ? "Administrator" : "Student"}
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                // Close sidebar on mobile after navigation
                if (window.innerWidth < 768) {
                  setSidebarOpen(false);
                }
              }}
              className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "bg-sidebar-accent bg-opacity-40 border-l-4 border-primary-foreground"
                  : "hover:bg-sidebar-accent hover:bg-opacity-20"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-sidebar-border">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-primary-foreground text-primary rounded font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border shadow-sm">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 hover:bg-muted rounded transition-colors"
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <h2 className="text-sm font-medium text-muted-foreground hidden md:block">
                Welcome, {userName}
              </h2>
            </div>
            <div className="text-sm text-muted-foreground">
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
        <main className="flex-1 overflow-auto bg-background">
          <div className="p-6">{children}</div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
