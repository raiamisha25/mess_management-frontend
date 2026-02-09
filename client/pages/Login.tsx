import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (userId && password) {
      const role = userId === "admin" ? "admin" : "student";
      localStorage.setItem("userRole", role);
      localStorage.setItem("userId", userId);

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/student/dashboard");
      }
    } else {
      setError("Please enter both User ID and Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#f5f7fb" }}>
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
            Mess Management System
          </h1>
          <p className="text-sm" style={{ color: "#6b6f85" }}>
            Student & Admin Login
          </p>
        </div>

        {/* Form Card */}
        <div
          className="rounded border p-8"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          {error && (
            <div className="mb-4 p-3 rounded text-sm" style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* User ID Field */}
            <div>
              <label className="hms-label">User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your User ID"
                className="hms-input w-full"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="hms-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="hms-input w-full"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="hms-button w-full mt-6">
              Login
            </button>
          </form>

          {/* Registration Link */}
          <div className="mt-4 text-center text-sm">
            <span style={{ color: "#6b6f85" }}>New user? </span>
            <button
              onClick={() => navigate("/register")}
              className="font-medium"
              style={{ color: "#5a4fcf" }}
            >
              Register here
            </button>
          </div>

          {/* Demo Info */}
          <div
            className="mt-6 pt-6 border-t text-xs"
            style={{ borderColor: "#e3e4ea", color: "#6b6f85" }}
          >
            <p className="mb-2 font-medium">Demo Credentials:</p>
            <p>Student: User ID "student1" | Password any</p>
            <p>Admin: User ID "admin" | Password any</p>
          </div>
        </div>
      </div>
    </div>
  );
}
