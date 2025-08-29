// src/components/dashboard/Dashboard.jsx
import React from "react";
import StatCard from "../common/StatCard";
import { Mail, CheckCircle, XCircle, User } from "lucide-react";

const Dashboard = () => {
  const dashboardStats = [
    { title: "Total Enquiry", value: "94", icon: Mail, color: "bg-blue-500" },
    {
      title: "Successful Transaction",
      value: "40",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      title: "Failed Transaction",
      value: "136",
      icon: XCircle,
      color: "bg-red-500",
    },
    { title: "Paid Member", value: "80", icon: User, color: "bg-yellow-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
