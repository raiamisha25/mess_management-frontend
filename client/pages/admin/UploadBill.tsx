import { useState } from "react";

const uploadedBills = [
  { id: 1, month: "January 2024", fileName: "January_Bills.pdf", date: "2024-02-01" },
  { id: 2, month: "February 2024", fileName: "February_Bills.pdf", date: "2024-03-01" },
  { id: 3, month: "March 2024", fileName: "March_Bills.pdf", date: "2024-04-01" },
];

export default function UploadBill() {
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileName) {
      setUploaded(true);
      setFileName("");
      setTimeout(() => setUploaded(false), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF" }}>
        Upload Bill
      </h1>
      <p className="text-sm mb-6" style={{ color: "#A0A0B2" }}>
        Upload monthly mess bills for students
      </p>

      {/* Upload Form */}
      <div
        className="rounded border p-6 mb-6"
        style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
      >
        {uploaded && (
          <div
            className="mb-4 p-3 rounded text-sm"
            style={{ backgroundColor: "#dcfce7", color: "#166534" }}
          >
            Bill uploaded successfully
          </div>
        )}

        <form onSubmit={handleUpload} className="space-y-4">
          {/* Month Selection */}
          <div>
            <label className="hms-label">Bill Month *</label>
            <input
              type="month"
              className="hms-input w-full"
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="hms-label">Upload PDF File *</label>
            <div
              className="border-2 border-dashed rounded p-6 text-center"
              style={{ borderColor: "#5a4fcf" }}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
                required
              />
              <label
                htmlFor="file-input"
                className="cursor-pointer"
              >
                <p className="font-medium" style={{ color: "#5a4fcf" }}>
                  Click to upload or drag and drop
                </p>
                <p className="text-xs mt-1" style={{ color: "#A0A0B2" }}>
                  PDF files only (Max 10MB)
                </p>
                {fileName && (
                  <p className="text-sm mt-2 font-medium" style={{ color: "#FFFFFF" }}>
                    Selected: {fileName}
                  </p>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="hms-button w-full">
            Upload Bill
          </button>
        </form>
      </div>

      {/* Uploaded Bills */}
      <div
        className="rounded border p-6"
        style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
      >
        <h3 className="text-sm font-medium mb-4" style={{ color: "#FFFFFF" }}>
          Uploaded Bills
        </h3>

        <div className="overflow-x-auto">
          <table className="hms-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>File Name</th>
                <th>Upload Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {uploadedBills.map((bill) => (
                <tr key={bill.id}>
                  <td>{bill.month}</td>
                  <td>{bill.fileName}</td>
                  <td>{bill.date}</td>
                  <td>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
