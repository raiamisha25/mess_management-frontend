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
      <h1 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF" }}>
        Meal Attendance
      </h1>
      <p className="text-sm mb-6" style={{ color: "#A0A0B2" }}>
        Mark your attendance for meals
      </p>

      <div
        className="rounded border p-6"
        style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
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
                    style={{ color: "#FFFFFF" }}
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
            style={{ backgroundColor: "#0F0F14" }}
          >
            <p className="text-sm" style={{ color: "#A0A0B2" }}>
              You are about to mark attendance for{" "}
              <span className="font-medium" style={{ color: "#FFFFFF" }}>
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
