import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout Component
import ProtectedLayout from "@/components/ProtectedLayout";

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
import { USER_ROLES } from "@/lib/constants";
import { getUserRole } from "@/lib/auth";

const queryClient = new QueryClient();

// Root redirect component
function RootRedirect() {
  const userRole = getUserRole();

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (userRole === USER_ROLES.ADMIN) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Navigate to="/student/dashboard" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Student Layout Routes */}
          <Route element={<ProtectedLayout requiredRole={USER_ROLES.STUDENT} />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/menu" element={<ViewMenu />} />
            <Route path="/student/attendance" element={<MealAttendance />} />
            <Route path="/student/cancellation" element={<MealCancellation />} />
            <Route path="/student/bill" element={<ViewBill />} />
            <Route path="/student/notices" element={<ViewNotices />} />
          </Route>

          {/* Admin Layout Routes */}
          <Route element={<ProtectedLayout requiredRole={USER_ROLES.ADMIN} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/menu" element={<MenuManagement />} />
            <Route path="/admin/attendance" element={<AttendanceReports />} />
            <Route path="/admin/bill" element={<UploadBill />} />
            <Route path="/admin/notices" element={<NoticeManagement />} />
          </Route>

          {/* Root redirect */}
          <Route path="/" element={<RootRedirect />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
