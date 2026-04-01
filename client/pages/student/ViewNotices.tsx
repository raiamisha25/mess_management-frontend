import { useState } from "react";

const noticesData = [
  {
    id: 1,
    title: "Mess Fee Payment Deadline Extended",
    date: "2024-01-15",
    content:
      "The deadline for mess fee payment has been extended to 25th January 2024. Please make the payment at the earliest.",
  },
  {
    id: 2,
    title: "Menu Change Notice",
    date: "2024-01-12",
    content:
      "Due to unavailability of certain ingredients, the menu for next week has been modified. Please check the menu page for details.",
  },
  {
    id: 3,
    title: "Hostel Maintenance",
    date: "2024-01-10",
    content:
      "Hostel mess will be closed for maintenance from 20th to 22nd January 2024. Packed meals will be provided during this period.",
  },
  {
    id: 4,
    title: "New Attendance System",
    date: "2024-01-08",
    content:
      "A new digital attendance system has been implemented. Please mark your attendance through the portal from now onwards.",
  },
  {
    id: 5,
    title: "Guest Meal Booking",
    date: "2024-01-05",
    content:
      "Students can now book guest meals through the portal. Minimum 24 hours advance notice required. Charges apply.",
  },
];

export default function ViewNotices() {
  const [displayCount, setDisplayCount] = useState(3);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF" }}>
        Notices
      </h1>
      <p className="text-sm mb-6" style={{ color: "#A0A0B2" }}>
        Important announcements and updates
      </p>

      <div className="space-y-4">
        {noticesData.slice(0, displayCount).map((notice) => (
          <div
            key={notice.id}
            className="rounded border"
            style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
          >
            <div
              className="p-4 border-b flex justify-between items-start"
              style={{
                backgroundColor: "#f5f7fb",
                borderColor: "#e3e4ea",
              }}
            >
              <div>
                <h3 className="font-medium" style={{ color: "#FFFFFF" }}>
                  {notice.title}
                </h3>
                <p className="text-xs mt-1" style={{ color: "#A0A0B2" }}>
                  {new Date(notice.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm" style={{ color: "#FFFFFF" }}>
                {notice.content}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  className="hms-button text-sm"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {displayCount < noticesData.length && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 3)}
            className="hms-button"
          >
            Load More Notices
          </button>
        </div>
      )}

      {displayCount >= noticesData.length && (
        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: "#A0A0B2" }}>
            All notices loaded
          </p>
        </div>
      )}
    </div>
  );
}
