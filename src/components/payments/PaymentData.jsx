// src/components/payments/PaymentData.jsx
import React from "react";
import DataTable from "../common/DataTable";

const PaymentData = () => {
  const payments = [
    {
      id: 1,
      sNo: 1,
      tokenNo: "110",
      name: "Alok",
      mobile: "8409053915",
      service: "42",
      subService: "Pan Card",
      amount: "147.00",
      status: "TXN_FAILURE",
      date: "04-04-23",
    },
    {
      id: 2,
      sNo: 2,
      tokenNo: "111",
      name: "Alok",
      mobile: "8409053915",
      service: "42",
      subService: "Pan Card",
      amount: "147.00",
      status: "TXN_FAILURE",
      date: "04-04-23",
    },
    {
      id: 3,
      sNo: 3,
      tokenNo: "112",
      name: "Alok",
      mobile: "8409053915",
      service: "42",
      subService: "Pan Card",
      amount: "147.00",
      status: "TXN_FAILURE",
      date: "04-04-23",
    },
    {
      id: 4,
      sNo: 4,
      tokenNo: "113",
      name: "Alok",
      mobile: "8409053915",
      service: "42",
      subService: "Pan Card",
      amount: "147.00",
      status: "TXN_FAILURE",
      date: "04-04-23",
    },
    {
      id: 5,
      sNo: 5,
      tokenNo: "114",
      name: "PP",
      mobile: "9234692692",
      service: "56",
      subService: "Birth Certificate (जन्म प्रमाण पत्र)",
      amount: "621.00",
      status: "TXN_FAILURE",
      date: "05-04-23",
    },
  ];

  const columns = [
    "S.No",
    "Token No.",
    "Name",
    "Mobile",
    "Service",
    "Sub Service",
    "Amount",
    "Status",
    "Date",
  ];

  return (
    <DataTable data={payments} columns={columns} activeSection="payments" />
  );
};

export default PaymentData;
