import { useState } from "react";

const attendanceData = [
  {
    date: "2024-01-15",
    meal: "Breakfast",
    count: 198,
    total: 245,
    percentage: 81,
  },
  {
    date: "2024-01-15",
    meal: "Lunch",
    count: 220,
    total: 245,
    percentage: 90,
  },
  {
    date: "2024-01-15",
    meal: "Dinner",
    count: 210,
    total: 245,
    percentage: 86,
  },
  {
    date: "2024-01-14",
    meal: "Breakfast",
    count: 205,
    total: 245,
    percentage: 84,
  },
  {
    date: "2024-01-14",
    meal: "Lunch",
    count: 215,
    total: 245,
    percentage: 88,
  },
  {
    date: "2024-01-14",
    meal: "Dinner",
    count: 202,
    total: 245,
    percentage: 82,
  },
];

export default function AttendanceReports() {
  const [filterMeal, setFilterMeal] = useState("all");
  const [filterDate, setFilterDate] = useState("");

  const filteredData = attendanceData.filter((item) => {
    const mealMatch = filterMeal === "all" || item.meal === filterMeal;
    const dateMatch = !filterDate || item.date === filterDate;
    return mealMatch && dateMatch;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF" }}>
        Attendance & Reports
      </h1>
      <p className="text-sm mb-6" style={{ color: "#A0A0B2" }}>
        View attendance records and generate reports
      </p>

      {/* Filters */}
      <div
        className="rounded border p-4 mb-6"
        style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Filter by Meal */}
          <div>
            <label className="hms-label">Filter by Meal</label>
            <select
              value={filterMeal}
              onChange={(e) => setFilterMeal(e.target.value)}
              className="hms-input w-full"
            >
              <option value="all">All Meals</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>

          {/* Filter by Date */}
          <div>
            <label className="hms-label">Filter by Date</label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="hms-input w-full"
            />
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button
              onClick={() => {
                setFilterMeal("all");
                setFilterDate("");
              }}
              className="hms-button-secondary w-full"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div
        className="rounded border overflow-hidden"
        style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
      >
        <div className="overflow-x-auto">
          <table className="hms-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Meal</th>
                <th>Count</th>
                <th>Percentage</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.meal}</td>
                  <td>
                    {record.count}/{record.total}
                  </td>
                  <td className="font-medium">{record.percentage}%</td>
                  <td>
                    <div
                      className="w-24 h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: "#e3e4ea" }}
                    >
                      <div
                        className="h-full"
                        style={{
                          backgroundColor: "#5a4fcf",
                          width: `${record.percentage}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Generate Report Button */}
      <div className="mt-6 flex gap-3">
        <button className="hms-button">Generate Report</button>
        <button className="hms-button-secondary">Download CSV</button>
      </div>
    </div>
  );
}
