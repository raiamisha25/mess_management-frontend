import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Student Pages
import StudentDashboard from "./pages/StudentDashboard";
import ViewMenu from "./pages/student/ViewMenu";
import MealAttendance from "./pages/student/MealAttendance";
import MealCancellation from "./pages/student/MealCancellation";
import ViewBill from "./pages/student/ViewBill";
import ViewNotices from "./pages/student/ViewNotices";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import MenuManagement from "./pages/admin/MenuManagement";
import AttendanceReports from "./pages/admin/AttendanceReports";
import UploadBill from "./pages/admin/UploadBill";
import NoticeManagement from "./pages/admin/NoticeManagement";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
function ProtectedRoute({
  element,
  requiredRole,
}: {
  element: React.ReactElement;
  requiredRole: "student" | "admin";
}) {
  const userRole = localStorage.getItem("userRole") as "student" | "admin" | null;

  if (!userRole) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to={userRole === "admin" ? "/admin/dashboard" : "/student/dashboard"} />;
  }

  return element;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Student Routes */}
            <Route
              path="/student/dashboard"
              element={<ProtectedRoute element={<StudentDashboard />} requiredRole="student" />}
            />
            <Route
              path="/student/menu"
              element={<ProtectedRoute element={<ViewMenu />} requiredRole="student" />}
            />
            <Route
              path="/student/attendance"
              element={<ProtectedRoute element={<MealAttendance />} requiredRole="student" />}
            />
            <Route
              path="/student/cancellation"
              element={<ProtectedRoute element={<MealCancellation />} requiredRole="student" />}
            />
            <Route
              path="/student/bill"
              element={<ProtectedRoute element={<ViewBill />} requiredRole="student" />}
            />
            <Route
              path="/student/notices"
              element={<ProtectedRoute element={<ViewNotices />} requiredRole="student" />}
            />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={<ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />}
            />
            <Route
              path="/admin/menu"
              element={<ProtectedRoute element={<MenuManagement />} requiredRole="admin" />}
            />
            <Route
              path="/admin/attendance"
              element={<ProtectedRoute element={<AttendanceReports />} requiredRole="admin" />}
            />
            <Route
              path="/admin/bill"
              element={<ProtectedRoute element={<UploadBill />} requiredRole="admin" />}
            />
            <Route
              path="/admin/notices"
              element={<ProtectedRoute element={<NoticeManagement />} requiredRole="admin" />}
            />

            {/* Redirect root to login */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
