import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
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
    <Layout role="student">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome, {userName}
          </h1>
          <p className="text-muted-foreground">
            Here's your mess management dashboard
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Today's Menu Card */}
          <div className="hms-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Today's Menu</h3>
              <span className="text-2xl">🍽️</span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Breakfast
                </p>
                <p className="text-sm text-foreground mt-1">{mockMenu.breakfast}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Lunch
                </p>
                <p className="text-sm text-foreground mt-1">{mockMenu.lunch}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Dinner
                </p>
                <p className="text-sm text-foreground mt-1">{mockMenu.dinner}</p>
              </div>
            </div>

            <button
              onClick={() => navigate("/student/menu")}
              className="mt-4 w-full text-primary hover:underline text-sm font-medium flex items-center justify-center gap-2"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Attendance Status Card */}
          <div className="hms-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Today's Attendance
              </h3>
              <span className="text-2xl">✓</span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Status
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-medium text-foreground">
                    {mockAttendance.status}
                  </p>
                </div>
              </div>

              <div className="bg-secondary p-3 rounded">
                <p className="text-xs font-medium text-muted-foreground uppercase mb-1">
                  Date & Meal
                </p>
                <p className="text-sm text-foreground">{mockAttendance.date}</p>
                <p className="text-sm text-foreground">{mockAttendance.meal}</p>
              </div>
            </div>

            <button
              onClick={() => navigate("/student/attendance")}
              className="mt-4 w-full text-primary hover:underline text-sm font-medium flex items-center justify-center gap-2"
            >
              Mark Attendance
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Latest Notice Card */}
          <div className="hms-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Latest Notice</h3>
              <span className="text-2xl">📢</span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-primary uppercase">
                  {mockNotice.date}
                </p>
                <p className="font-semibold text-foreground mt-1">
                  {mockNotice.title}
                </p>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {mockNotice.content}
              </p>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  3 new notices available
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/student/notices")}
              className="mt-4 w-full text-primary hover:underline text-sm font-medium flex items-center justify-center gap-2"
            >
              View All Notices
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="hms-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
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
          <div className="hms-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Account Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-sm text-muted-foreground">User ID</span>
                <span className="text-sm font-medium text-foreground">
                  {localStorage.getItem("userId")}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-sm text-muted-foreground">Role</span>
                <span className="text-sm font-medium text-foreground">Student</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
