import { useState } from "react";

export default function MealAttendance() {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
        Meal Attendance
      </h1>
      <p className="text-sm mb-6" style={{ color: "#6b6f85" }}>
        Mark your attendance for meals
      </p>

      <div
        className="rounded border p-6"
        style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
      >
        {submitted && (
          <div
            className="mb-4 p-3 rounded text-sm"
            style={{ backgroundColor: "#dcfce7", color: "#166534" }}
          >
            Attendance marked successfully for {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Select Meal */}
          <div>
            <label className="hms-label">Select Meal</label>
            <div className="space-y-3">
              {["breakfast", "lunch", "dinner"].map((meal) => (
                <label key={meal} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="meal"
                    value={meal}
                    checked={selectedMeal === meal}
                    onChange={(e) => setSelectedMeal(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#2e2e3a" }}
                  >
                    {meal.charAt(0).toUpperCase() + meal.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <label className="hms-label">Date</label>
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="hms-input w-full"
            />
          </div>

          {/* Confirmation Text */}
          <div
            className="p-4 rounded"
            style={{ backgroundColor: "#f5f7fb" }}
          >
            <p className="text-sm" style={{ color: "#6b6f85" }}>
              You are about to mark attendance for{" "}
              <span className="font-medium" style={{ color: "#2e2e3a" }}>
                {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)}
              </span>
              . Confirm to proceed.
            </p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="hms-button w-full">
            Mark as Attending
          </button>
        </form>
      </div>
    </div>
  );
}
