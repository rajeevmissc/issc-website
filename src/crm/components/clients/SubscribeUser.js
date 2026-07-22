import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

function ClientsTable() {
  const [subscribeUsers, setSubscribeUsers] = useState([]);

  const fetchSubscribeUser = async () => {
    try {
      const response = await axios.get("https://issc-backend-app.vercel.app/subscribers/subscribe-user");
      setSubscribeUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  useEffect(() => {
    fetchSubscribeUser();
  }, []);

 // Prepare CSV data
 const csvData = [
    ["S.No", "Email Address", "Subscribe Date", "Subscribe Time"], // Header row
    ...subscribeUsers.map((user, index) => {
      const dateObj = new Date(user.subscribedAt);
      const formattedDate = dateObj.toLocaleDateString();
      const formattedTime = dateObj.toLocaleTimeString();
      return [index + 1, user.email, formattedDate, formattedTime];
    }),
  ];

  return (
    <div className="p-6 py-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">🔍 Client List</h2>
        <CSVLink
          data={csvData}
          filename="subscriber_list.csv"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          📥 Download CSV
        </CSVLink>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="border p-2">S.N</th>
              <th className="border p-2">Email Address</th>
              <th className="border p-2">Subscribe Date</th>
              <th className="border p-2">Subscribe Time</th>
            </tr>
          </thead>
          <tbody>
            {subscribeUsers.length > 0 ? (
              subscribeUsers.map((user, index) => {
                const dateObj = new Date(user.subscribedAt);
                const formattedDate = dateObj.toLocaleDateString();
                const formattedTime = dateObj.toLocaleTimeString();

                return (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="border p-2 text-center">{index + 1}</td>
                    <td className="border p-2 text-center">{user.email}</td>
                    <td className="border p-2 text-center">{formattedDate}</td>
                    <td className="border p-2 text-center">{formattedTime}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center text-gray-500">
                  No subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientsTable;
