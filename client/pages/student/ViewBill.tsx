import Layout from "@/components/Layout";

const bills = [
  {
    month: "January 2024",
    amount: "₹2,500",
    status: "Paid",
    date: "2024-02-01",
  },
  {
    month: "February 2024",
    amount: "₹2,500",
    status: "Pending",
    date: "2024-03-01",
  },
  {
    month: "March 2024",
    amount: "₹2,450",
    status: "Pending",
    date: "2024-04-01",
  },
];

export default function ViewBill() {
  return (
    <Layout role="student">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
          Mess Bill
        </h1>
        <p className="text-sm mb-6" style={{ color: "#6b6f85" }}>
          View and download your monthly mess bills
        </p>

        {/* Bills Table */}
        <div
          className="rounded border overflow-hidden"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <table className="hms-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.month}</td>
                  <td className="font-medium">{bill.amount}</td>
                  <td>
                    <span
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor:
                          bill.status === "Paid"
                            ? "#dcfce7"
                            : "#fef3c7",
                        color:
                          bill.status === "Paid"
                            ? "#166534"
                            : "#92400e",
                      }}
                    >
                      {bill.status}
                    </span>
                  </td>
                  <td>{bill.date}</td>
                  <td>
                    <button
                      className="text-sm font-medium px-2 py-1 rounded transition-colors"
                      style={{
                        color: "#5a4fcf",
                      }}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Instructions */}
        <div
          className="rounded border p-6 mt-6"
          style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: "#2e2e3a" }}>
            Payment Instructions
          </h3>
          <div className="space-y-2 text-sm" style={{ color: "#6b6f85" }}>
            <p>• Payment is due by the 5th of each month</p>
            <p>• Pay through the college portal or mess office</p>
            <p>• Keep your payment receipts for reference</p>
            <p>• Contact the mess administrator for payment issues</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
