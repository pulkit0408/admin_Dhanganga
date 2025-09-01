// src/components/enquiry/EnquiryData.jsx
import React from "react";
import DataTable from "../common/DataTable";

// ✅ named export
export const enquiries = [
  {
    id: 1,
    no: 1,
    name: "Alok",
    service: "Pan Card",
    email: "krishan3915@gmail.com",
    mobile: "8409053915",
    doc: "📄",
    date: "04-04-23",
  },
  {
    id: 2,
    no: 2,
    name: "PP",
    service: "Birth Certificate (जन्म प्रमाण पत्र)",
    email: "MN@KJ",
    mobile: "9234692692",
    doc: "📄",
    date: "05-04-23",
  },
  {
    id: 3,
    no: 3,
    name: "karan",
    service: "Pan Card",
    email: "fina@gmail.com",
    mobile: "9584267993",
    doc: "📄",
    date: "22-04-23",
  },
];

const EnquiryData = () => {
  const columns = ["No.", "Name", "Service", "Email", "Mobile", "Doc", "Date"];

  return (
    <DataTable data={enquiries} columns={columns} activeSection="enquiry" />
  );
};

export default EnquiryData;
