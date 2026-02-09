import Layout from "@/components/Layout";
import { useState } from "react";

export default function MealCancellation() {
  const [cancelType, setCancelType] = useState("single");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout role="student">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
          Meal Cancellation
        </h1>
        <p className="text-sm mb-6" style={{ color: "#6b6f85" }}>
          Cancel your meals when needed
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
              Meal cancellation request submitted successfully
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Cancellation Type */}
            <div>
              <label className="hms-label">Cancellation Type</label>
              <div className="space-y-3">
                {[
                  { value: "single", label: "Cancel Single Meal" },
                  { value: "day", label: "Cancel All Meals for a Day" },
                  { value: "period", label: "Cancel Meals for Multiple Days" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="cancelType"
                      value={option.value}
                      checked={cancelType === option.value}
                      onChange={(e) => setCancelType(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#2e2e3a" }}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Meal Selection (if single) */}
            {cancelType === "single" && (
              <div>
                <label className="hms-label">Select Meal</label>
                <div className="space-y-3">
                  {["breakfast", "lunch", "dinner"].map((meal) => (
                    <label key={meal} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        className="w-4 h-4"
                      />
                      <span
                        className="text-sm"
                        style={{ color: "#2e2e3a" }}
                      >
                        {meal.charAt(0).toUpperCase() + meal.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Date Selection */}
            <div>
              <label className="hms-label">Date</label>
              <input
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                className="hms-input w-full"
              />
            </div>

            {/* Info Box */}
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "#f5f7fb" }}
            >
              <p className="text-sm" style={{ color: "#6b6f85" }}>
                Cancelling meals may affect your monthly billing. Please contact the mess
                administrator for more information.
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="hms-button w-full">
              Cancel Meal
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
