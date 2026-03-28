import { useNavigate } from "react-router-dom";

const mockMenu = {
  breakfast: "Bread, Eggs, Butter, Milk",
  lunch: "Rice, Dal, Chicken Curry, Vegetables",
  dinner: "Roti, Paneer, Mixed Vegetables",
};

const mockAttendance = {
  status: "Present",
  date: new Date().toLocaleDateString(),
  meal: "Breakfast",
};

const mockNotice = {
  title: "Mess Fee Payment Deadline",
  date: "Today",
  content: "Please submit mess fees by end of this month.",
};

export default function StudentDashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Student";

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF" }}>
          Welcome, {userName}
        </h1>
        <p className="text-sm" style={{ color: "#A0A0B2" }}>
          Here's your mess management dashboard
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Today's Menu Card */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Today's Menu
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: "#A0A0B2" }}>
                BREAKFAST
              </p>
              <p className="text-sm" style={{ color: "#FFFFFF" }}>
                {mockMenu.breakfast}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: "#A0A0B2" }}>
                LUNCH
              </p>
              <p className="text-sm" style={{ color: "#FFFFFF" }}>
                {mockMenu.lunch}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: "#A0A0B2" }}>
                DINNER
              </p>
              <p className="text-sm" style={{ color: "#FFFFFF" }}>
                {mockMenu.dinner}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/student/menu")}
            className="mt-4 w-full hms-button text-sm"
          >
            View Full Menu
          </button>
        </div>

        {/* Attendance Status Card */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Today's Attendance
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: "#A0A0B2" }}>
                STATUS
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#10b981" }}
                ></div>
                <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
                  {mockAttendance.status}
                </p>
              </div>
            </div>

            <div
              className="p-3 rounded"
              style={{ backgroundColor: "#f5f7fb" }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: "#A0A0B2" }}>
                DATE & MEAL
              </p>
              <p className="text-sm" style={{ color: "#FFFFFF" }}>
                {mockAttendance.date}
              </p>
              <p className="text-sm" style={{ color: "#FFFFFF" }}>
                {mockAttendance.meal}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/student/attendance")}
            className="mt-4 w-full hms-button text-sm"
          >
            Mark Attendance
          </button>
        </div>

        {/* Latest Notice Card */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Latest Notice
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium" style={{ color: "#7B61FF" }}>
                {mockNotice.date}
              </p>
              <p className="font-medium text-sm mt-1" style={{ color: "#FFFFFF" }}>
                {mockNotice.title}
              </p>
            </div>

            <p className="text-sm" style={{ color: "#A0A0B2" }}>
              {mockNotice.content}
            </p>

            <div
              className="pt-2 border-t"
              style={{ borderColor: "#e3e4ea" }}
            >
              <p className="text-xs" style={{ color: "#A0A0B2" }}>
                3 new notices available
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/student/notices")}
            className="mt-4 w-full hms-button text-sm"
          >
            View All Notices
          </button>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate("/student/menu")}
              className="hms-button text-center py-3 text-sm"
            >
              View Menu
            </button>
            <button
              onClick={() => navigate("/student/attendance")}
              className="hms-button text-center py-3 text-sm"
            >
              Mark Attendance
            </button>
            <button
              onClick={() => navigate("/student/bill")}
              className="hms-button text-center py-3 text-sm"
            >
              View Bill
            </button>
            <button
              onClick={() => navigate("/student/cancellation")}
              className="hms-button text-center py-3 text-sm"
            >
              Cancel Meal
            </button>
          </div>
        </div>

        {/* Account Information */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Account Information
          </h3>
          <div className="space-y-4">
            <div
              className="flex justify-between items-center pb-3 border-b"
              style={{ borderColor: "#e3e4ea" }}
            >
              <span className="text-sm" style={{ color: "#A0A0B2" }}>
                User ID
              </span>
              <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
                {localStorage.getItem("userId")}
              </span>
            </div>
            <div
              className="flex justify-between items-center pb-3 border-b"
              style={{ borderColor: "#e3e4ea" }}
            >
              <span className="text-sm" style={{ color: "#A0A0B2" }}>
                Role
              </span>
              <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
                Student
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: "#A0A0B2" }}>
                Status
              </span>
              <span
                className="text-xs px-2 py-1 rounded"
                style={{ backgroundColor: "#dcfce7", color: "#166534" }}
              >
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
