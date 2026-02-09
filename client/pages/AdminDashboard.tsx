import { useNavigate } from "react-router-dom";

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
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
          Welcome, {userName}
        </h1>
        <p className="text-sm" style={{ color: "#6b6f85" }}>
          Mess Management System - Administrator Dashboard
        </p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Students Card */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
            Total Students
          </h3>

          <div className="space-y-3">
            <p className="text-3xl font-medium" style={{ color: "#5a4fcf" }}>
              {mockStats.totalStudents}
            </p>
            <p className="text-sm" style={{ color: "#6b6f85" }}>
              Active mess members
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/attendance")}
            className="mt-4 w-full hms-button text-sm"
          >
            View Details
          </button>
        </div>

        {/* Today's Attendance Card */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
            Today's Attendance
          </h3>

          <div className="space-y-3">
            <p className="text-3xl font-medium" style={{ color: "#5a4fcf" }}>
              {mockStats.todayAttendance}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm" style={{ color: "#6b6f85" }}>
                {Math.round(
                  (mockStats.todayAttendance / mockStats.totalStudents) * 100
                )}
                % attendance
              </p>
            </div>

            <div
              className="w-full h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: "#e3e4ea" }}
            >
              <div
                className="h-full"
                style={{
                  backgroundColor: "#5a4fcf",
                  width: `${(mockStats.todayAttendance / mockStats.totalStudents) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <button
            onClick={() => navigate("/admin/attendance")}
            className="mt-4 w-full hms-button text-sm"
          >
            View Report
          </button>
        </div>

        {/* Active Notices Card */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
            Active Notices
          </h3>

          <div className="space-y-3">
            <p className="text-3xl font-medium" style={{ color: "#5a4fcf" }}>
              {mockStats.activeNotices}
            </p>
            <p className="text-sm" style={{ color: "#6b6f85" }}>
              Current announcements
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/notices")}
            className="mt-4 w-full hms-button text-sm"
          >
            Manage Notices
          </button>
        </div>
      </div>

      {/* Recent Attendance */}
      <div
        className="rounded border p-6 mb-8"
        style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
      >
        <h3 className="text-sm font-medium mb-6" style={{ color: "#2e2e3a" }}>
          Recent Attendance Summary
        </h3>

        <div className="overflow-x-auto">
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
                      <div
                        className="w-24 h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: "#e3e4ea" }}
                      >
                        <div
                          className="h-full"
                          style={{
                            backgroundColor: "#5a4fcf",
                            width: `${item.percentage}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="mt-6 pt-6 border-t flex justify-between items-center"
          style={{ borderColor: "#e3e4ea" }}
        >
          <p className="text-sm" style={{ color: "#6b6f85" }}>
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
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
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

        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
            System Information
          </h3>
          <div className="space-y-4">
            <div
              className="flex justify-between items-center pb-3 border-b"
              style={{ borderColor: "#e3e4ea" }}
            >
              <span className="text-sm" style={{ color: "#6b6f85" }}>
                Admin ID
              </span>
              <span className="text-sm font-medium" style={{ color: "#2e2e3a" }}>
                {localStorage.getItem("userId")}
              </span>
            </div>
            <div
              className="flex justify-between items-center pb-3 border-b"
              style={{ borderColor: "#e3e4ea" }}
            >
              <span className="text-sm" style={{ color: "#6b6f85" }}>
                Role
              </span>
              <span className="text-sm font-medium" style={{ color: "#2e2e3a" }}>
                Administrator
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: "#6b6f85" }}>
                Last Updated
              </span>
              <span className="text-sm font-medium" style={{ color: "#2e2e3a" }}>
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
