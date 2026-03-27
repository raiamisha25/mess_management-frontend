import { Navigate, Outlet } from "react-router-dom";
import { getUserRole } from "@/lib/auth";
import { USER_ROLES, type UserRole } from "@/lib/constants";
import StudentLayout from "./StudentLayout";
import AdminLayout from "./AdminLayout";

interface ProtectedLayoutProps {
  requiredRole: UserRole;
}

export default function ProtectedLayout({ requiredRole }: ProtectedLayoutProps) {
  const userRole = getUserRole();

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== requiredRole) {
    const redirectPath =
      userRole === USER_ROLES.ADMIN ? "/admin/dashboard" : "/student/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  // Render the appropriate layout based on role
  const Layout = requiredRole === USER_ROLES.STUDENT ? StudentLayout : AdminLayout;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
