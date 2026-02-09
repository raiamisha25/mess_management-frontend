import { USER_ROLES, type UserRole } from "./constants";

export const getUserRole = (): UserRole | null => {
  const role = localStorage.getItem("userRole");
  if (role === USER_ROLES.STUDENT || role === USER_ROLES.ADMIN) {
    return role;
  }
  return null;
};

export const getUserId = (): string | null => {
  return localStorage.getItem("userId");
};

export const getUserName = (): string | null => {
  return localStorage.getItem("userName");
};

export const logout = (): void => {
  localStorage.removeItem("userRole");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
};
