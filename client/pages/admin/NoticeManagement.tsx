import Layout from "@/components/Layout";
import { useState } from "react";

const existingNotices = [
  {
    id: 1,
    title: "Mess Fee Payment Deadline Extended",
    date: "2024-01-15",
    content: "The deadline for mess fee payment has been extended to 25th January 2024.",
  },
  {
    id: 2,
    title: "Menu Change Notice",
    date: "2024-01-12",
    content: "Due to unavailability of certain ingredients, the menu for next week has been modified.",
  },
  {
    id: 3,
    title: "Hostel Maintenance",
    date: "2024-01-10",
    content: "Hostel mess will be closed for maintenance from 20th to 22nd January 2024.",
  },
];

export default function NoticeManagement() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
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
    if (formData.title && formData.content) {
      setSubmitted(true);
      setFormData({ title: "", content: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Layout role="admin">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
          Notice Management
        </h1>
        <p className="text-sm mb-6" style={{ color: "#6b6f85" }}>
          Upload and manage notices for students
        </p>

        {/* Upload Notice Form */}
        <div
          className="rounded border p-6 mb-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
            Post New Notice
          </h3>

          {submitted && (
            <div
              className="mb-4 p-3 rounded text-sm"
              style={{ backgroundColor: "#dcfce7", color: "#166534" }}
            >
              Notice posted successfully
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="hms-label">Notice Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Mess Fee Payment Deadline"
                className="hms-input w-full"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="hms-label">Content *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter the notice content"
                className="hms-input w-full min-h-[120px]"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="hms-button w-full">
              Post Notice
            </button>
          </form>
        </div>

        {/* Existing Notices */}
        <div
          className="rounded border p-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
            All Notices
          </h3>

          <div className="space-y-4">
            {existingNotices.map((notice) => (
              <div
                key={notice.id}
                className="border-b pb-4"
                style={{ borderColor: "#e3e4ea" }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium" style={{ color: "#2e2e3a" }}>
                      {notice.title}
                    </h4>
                    <p className="text-xs mt-1" style={{ color: "#6b6f85" }}>
                      {new Date(notice.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <p className="text-sm mb-3" style={{ color: "#2e2e3a" }}>
                  {notice.content}
                </p>

                <div className="flex gap-2">
                  <button
                    className="text-sm font-medium px-2 py-1 rounded"
                    style={{ color: "#5a4fcf" }}
                  >
                    Download
                  </button>
                  <button
                    className="text-sm font-medium px-2 py-1 rounded"
                    style={{ color: "#ef4444" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
