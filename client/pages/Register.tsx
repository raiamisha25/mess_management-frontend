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

    localStorage.setItem("userRole", "student");
    localStorage.setItem("userId", formData.userId);
    localStorage.setItem("userName", formData.name);
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen px-4 py-8" style={{ backgroundColor: "#0F0F14" }}>
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF" }}>
            Mess Management System
          </h1>
          <p className="text-sm" style={{ color: "#A0A0B2" }}>
            Create Account
          </p>
        </div>

        {/* Form Card */}
        <div
          className="rounded border p-8"
          style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
        >
          <h2 className="text-lg font-medium mb-6" style={{ color: "#FFFFFF" }}>
            Registration
          </h2>

          {error && (
            <div className="mb-4 p-3 rounded text-sm" style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#FF6B6B" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-sm font-medium mb-4" style={{ color: "#7B61FF" }}>
                Personal Information
              </h3>
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="hms-label">Full Name *</label>
                  <input
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
                  <label className="hms-label">Roll Number *</label>
                  <input
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
              <h3 className="text-sm font-medium mb-4" style={{ color: "#7B61FF" }}>
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Course */}
                <div>
                  <label className="hms-label">Course *</label>
                  <select
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
                  <label className="hms-label">Specialization</label>
                  <input
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
                  <label className="hms-label">Batch *</label>
                  <select
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
              <h3 className="text-sm font-medium mb-4" style={{ color: "#5a4fcf" }}>
                Account Information
              </h3>
              <div className="space-y-4">
                {/* User ID */}
                <div>
                  <label className="hms-label">User ID *</label>
                  <input
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
                  <label className="hms-label">Password *</label>
                  <input
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
                className="hms-button-secondary flex-1"
              >
                Cancel
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm pt-2">
              <span style={{ color: "#6b6f85" }}>Already have an account? </span>
              <button
                onClick={() => navigate("/login")}
                className="font-medium"
                style={{ color: "#5a4fcf" }}
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
