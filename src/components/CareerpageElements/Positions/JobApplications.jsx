import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function JobApplications() {
  const [applications, setApplications] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://issc-backend-app.vercel.app/job-form/get-jobapplication") // adjust your backend URL
      .then((res) => res.json())
      .then((data) => {
        // assuming backend sends `createdAt` or `receivedDate`
        const withDate = data.map((d) => ({
          ...d,
          receivedDate: d.createdAt
            ? new Date(d.createdAt).toLocaleDateString()
            : "N/A",
        }));
        setApplications(withDate);
        setFiltered(withDate);
      })
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  // 🔍 Filtering logic
useEffect(() => {
  if (!search) {
    setFiltered(applications);
  } else {
    const lowerSearch = search.toLowerCase();

    setFiltered(
      applications.filter((app) => {
        return Object.keys(app).some((key) => {
          // Exclude fields you don't want to search in
          if (["updatedAt", "resume", "portfolioLink", "_id", "__v"].includes(key)) {
            return false;
          }
          const value = app[key];
          return (
            typeof value === "string" &&
            value.toLowerCase().includes(lowerSearch)
          );
        });
      })
    );
  }
}, [search, applications]);


  // 📂 Download as Excel
  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filtered);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Applications");
    XLSX.writeFile(wb, "job_applications.xlsx");
  };

  return (
<div className="p-6">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold">Job Applications</h1>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search by name/email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={downloadExcel}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download Excel
      </button>
    </div>
  </div>

  {/* Wrapping table with horizontal scroll */}
  <div className="overflow-x-auto">
    <table className="min-w-max border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Current CTC</th>
          <th className="border p-2">Expected CTC</th>
          <th className="border p-2">Notice Period</th>
          <th className="border p-2">Apply for position</th>
          <th className="border p-2">Job ID</th>
          <th className="border p-2">About Candidates</th>
          <th className="border p-2">Portfolio</th>
          <th className="border p-2">Resume</th>
          <th className="border p-2">Received Date</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((app) => (
          <tr key={app._id} className="text-center">
            <td className="border p-2">{app.firstName} {app.lastName}</td>
            <td className="border p-2">{app.email}</td>
            <td className="border p-2">{app.phone}</td>
            <td className="border p-2">{app.currentCTC}</td>
            <td className="border p-2">{app.expectedCTC}</td>
            <td className="border p-2">{app.noticePeriod}</td>
            <td className="border p-2">{app.applyForPosition}</td>
            <td className="border p-2">{app.jobId}</td>
            <td className="border p-2">{app.tellmeAboutYou}</td>
            <td className="border p-2">
              <a
                href={app.portfolioLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View
              </a>
            </td>
            <td className="border p-2">
              {app.resume ? (
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 underline"
                >
                  Download
                </a>
              ) : (
                "No Resume"
              )}
            </td>
            <td className="border p-2">{app.receivedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
