import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    specialization: "",
    batch: "",
    rollNumber: "",
    userId: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.course ||
      !formData.batch ||
      !formData.rollNumber ||
      !formData.userId ||
      !formData.password
    ) {
      setError("Please fill in all required fields");
      return;
    }

    // Mock registration - store and redirect to dashboard
    localStorage.setItem("userRole", "student");
    localStorage.setItem("userId", formData.userId);
    localStorage.setItem("userName", formData.name);
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Mess Management
          </h1>
          <p className="text-muted-foreground">Create Account</p>
        </div>

        {/* Form Card */}
        <div className="hms-card p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Registration</h2>

          {error && (
            <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-sm font-semibold text-primary mb-4">Personal Information</h3>
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="hms-input w-full"
                  />
                </div>

                {/* Roll Number */}
                <div>
                  <label htmlFor="rollNumber" className="block text-sm font-medium mb-2">
                    Roll Number *
                  </label>
                  <input
                    id="rollNumber"
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    placeholder="e.g., 2023001"
                    className="hms-input w-full"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information Section */}
            <div>
              <h3 className="text-sm font-semibold text-primary mb-4">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Course */}
                <div>
                  <label htmlFor="course" className="block text-sm font-medium mb-2">
                    Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="hms-input w-full"
                  >
                    <option value="">Select Course</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="M.Sc">M.Sc</option>
                  </select>
                </div>

                {/* Specialization */}
                <div>
                  <label htmlFor="specialization" className="block text-sm font-medium mb-2">
                    Specialization
                  </label>
                  <input
                    id="specialization"
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="e.g., Computer Science"
                    className="hms-input w-full"
                  />
                </div>

                {/* Batch */}
                <div>
                  <label htmlFor="batch" className="block text-sm font-medium mb-2">
                    Batch *
                  </label>
                  <select
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="hms-input w-full"
                  >
                    <option value="">Select Batch</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Account Information Section */}
            <div>
              <h3 className="text-sm font-semibold text-primary mb-4">Account Information</h3>
              <div className="space-y-4">
                {/* User ID */}
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium mb-2">
                    User ID *
                  </label>
                  <input
                    id="userId"
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    placeholder="Create a unique User ID"
                    className="hms-input w-full"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password *
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="hms-input w-full"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button type="submit" className="hms-button flex-1">
                Register
              </button>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="flex-1 border border-border rounded px-4 py-2 font-medium text-sm text-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm pt-2">
              <span className="text-muted-foreground">Already have an account? </span>
              <button
                onClick={() => navigate("/login")}
                className="text-primary hover:underline font-medium"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
