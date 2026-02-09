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

    // Mock authentication
    if (userId && password) {
      // Store user role in localStorage (mock)
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
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Mess Management
          </h1>
          <p className="text-muted-foreground">College Hostel System</p>
        </div>

        {/* Form Card */}
        <div className="hms-card p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Login</h2>

          {error && (
            <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* User ID Field */}
            <div>
              <label htmlFor="userId" className="block text-sm font-medium mb-2">
                User ID
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your User ID"
                className="hms-input w-full"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
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
            <span className="text-muted-foreground">New user? </span>
            <button
              onClick={() => navigate("/register")}
              className="text-primary hover:underline font-medium"
            >
              Register here
            </button>
          </div>

          {/* Demo Info */}
          <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
            <p className="mb-2 font-medium">Demo Credentials:</p>
            <p>Student: User ID "student1" | Password any</p>
            <p>Admin: User ID "admin" | Password any</p>
          </div>
        </div>
      </div>
    </div>
  );
}
