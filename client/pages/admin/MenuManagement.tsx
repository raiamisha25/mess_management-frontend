import { useState } from "react";

export default function MenuManagement() {
  const [formData, setFormData] = useState({
    date: "",
    breakfast: "",
    lunch: "",
    dinner: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.date && formData.breakfast && formData.lunch && formData.dinner) {
      setSubmitted(true);
      setFormData({ date: "", breakfast: "", lunch: "", dinner: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
        Menu Management
      </h1>
      <p className="text-sm mb-6" style={{ color: "#6b6f85" }}>
        Add or update daily mess menu
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
            Menu updated successfully
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date Field */}
          <div>
            <label className="hms-label">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="hms-input w-full"
              required
            />
          </div>

          {/* Breakfast Field */}
          <div>
            <label className="hms-label">Breakfast *</label>
            <textarea
              name="breakfast"
              value={formData.breakfast}
              onChange={handleChange}
              placeholder="e.g., Bread, Eggs, Butter, Milk"
              className="hms-input w-full min-h-[80px]"
              required
            />
          </div>

          {/* Lunch Field */}
          <div>
            <label className="hms-label">Lunch *</label>
            <textarea
              name="lunch"
              value={formData.lunch}
              onChange={handleChange}
              placeholder="e.g., Rice, Dal, Chicken Curry, Vegetables"
              className="hms-input w-full min-h-[80px]"
              required
            />
          </div>

          {/* Dinner Field */}
          <div>
            <label className="hms-label">Dinner *</label>
            <textarea
              name="dinner"
              value={formData.dinner}
              onChange={handleChange}
              placeholder="e.g., Roti, Paneer Curry, Vegetables"
              className="hms-input w-full min-h-[80px]"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="hms-button w-full">
            Save Menu
          </button>
        </form>
      </div>
    </div>
  );
}
