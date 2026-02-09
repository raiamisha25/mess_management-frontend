import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
const mockStats = {
  totalStudents: 245,
  todayAttendance: 198,
  activeNotices: 3,
};

const recentAttendance = [
  { date: "Today", meal: "Breakfast", count: 198, percentage: 81 },
  { date: "Yesterday", meal: "Dinner", count: 215, percentage: 88 },
  { date: "2 days ago", meal: "Lunch", count: 202, percentage: 82 },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Admin";

  return (
    <Layout role="admin">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome, {userName}
          </h1>
          <p className="text-muted-foreground">
            Mess Management System - Administrator Dashboard
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Students Card */}
          <div className="hms-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Total Students
              </h3>
              <span className="text-2xl">👥</span>
            </div>

            <div className="space-y-3">
              <p className="text-3xl font-bold text-primary">
                {mockStats.totalStudents}
              </p>
              <p className="text-sm text-muted-foreground">
                Active mess members
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/attendance")}
              className="mt-4 w-full text-primary hover:underline text-sm font-medium flex items-center justify-center gap-2"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Today's Attendance Card */}
          <div className="hms-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Today's Attendance
              </h3>
              <span className="text-2xl">✓</span>
            </div>

            <div className="space-y-3">
              <p className="text-3xl font-bold text-primary">
                {mockStats.todayAttendance}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {Math.round(
                    (mockStats.todayAttendance / mockStats.totalStudents) * 100
                  )}
                  % attendance
                </p>
              </div>

              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full"
                  style={{
                    width: `${(mockStats.todayAttendance / mockStats.totalStudents) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => navigate("/admin/attendance")}
              className="mt-4 w-full text-primary hover:underline text-sm font-medium flex items-center justify-center gap-2"
            >
              View Report
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Notices Card */}
          <div className="hms-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Active Notices
              </h3>
              <span className="text-2xl">📢</span>
            </div>

            <div className="space-y-3">
              <p className="text-3xl font-bold text-primary">
                {mockStats.activeNotices}
              </p>
              <p className="text-sm text-muted-foreground">
                Current announcements
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/notices")}
              className="mt-4 w-full text-primary hover:underline text-sm font-medium flex items-center justify-center gap-2"
            >
              Manage Notices
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Recent Attendance */}
        <div className="hms-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Recent Attendance Summary
          </h3>

          <table className="hms-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Meal</th>
                <th>Count</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {recentAttendance.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.meal}</td>
                  <td>
                    <span className="font-medium">{item.count}</span>/
                    {mockStats.totalStudents}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-secondary h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-primary h-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Updated today at {new Date().toLocaleTimeString()}
            </p>
            <button
              onClick={() => navigate("/admin/attendance")}
              className="hms-button text-sm"
            >
              View Full Report
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hms-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => navigate("/admin/menu")}
                className="hms-button text-center py-3 text-sm"
              >
                Update Menu
              </button>
              <button
                onClick={() => navigate("/admin/attendance")}
                className="hms-button text-center py-3 text-sm"
              >
                View Reports
              </button>
              <button
                onClick={() => navigate("/admin/bill")}
                className="hms-button text-center py-3 text-sm"
              >
                Upload Bill
              </button>
              <button
                onClick={() => navigate("/admin/notices")}
                className="hms-button text-center py-3 text-sm"
              >
                Post Notice
              </button>
            </div>
          </div>

          <div className="hms-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              System Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-sm text-muted-foreground">Admin ID</span>
                <span className="text-sm font-medium text-foreground">
                  {localStorage.getItem("userId")}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-sm text-muted-foreground">Role</span>
                <span className="text-sm font-medium text-foreground">Administrator</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Last Updated</span>
                <span className="text-sm font-medium text-foreground">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
