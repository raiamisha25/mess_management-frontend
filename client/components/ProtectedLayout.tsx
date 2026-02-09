import { Navigate } from "react-router-dom";
import { getUserRole } from "@/lib/auth";
import { USER_ROLES, type UserRole } from "@/lib/constants";

interface ProtectedLayoutProps {
  layout: React.ComponentType;
  requiredRole: UserRole;
}

export default function ProtectedLayout({ layout: Layout, requiredRole }: ProtectedLayoutProps) {
  const userRole = getUserRole();

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== requiredRole) {
    const redirectPath =
      userRole === USER_ROLES.ADMIN ? "/admin/dashboard" : "/student/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  return <Layout />;
}
