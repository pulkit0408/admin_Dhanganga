// src/components/contact/ContactData.jsx
import React from "react";
import DataTable from "../common/DataTable";

const ContactData = () => {
  const contacts = [
    {
      id: 1,
      no: 1,
      name: "Rajesh Kumar",
      email: "rajesh@gmail.com",
      mobile: "9876543210",
      message: "Need help with Pan Card application",
      date: "10-08-25",
    },
    {
      id: 2,
      no: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      mobile: "8765432109",
      message: "Inquiry about birth certificate",
      date: "11-08-25",
    },
    {
      id: 3,
      no: 3,
      name: "Amit Singh",
      email: "amit@gmail.com",
      mobile: "7654321098",
      message: "Service related query",
      date: "12-08-25",
    },
  ];

  const columns = ["No.", "Name", "Email", "Mobile", "Message", "Date"];

  return (
    <DataTable data={contacts} columns={columns} activeSection="contact" />
  );
};

export default ContactData;
