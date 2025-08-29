// src/components/membership/MembershipData.jsx
import React from "react";
import DataTable from "../common/DataTable";

const MembershipData = () => {
  const members = [
    {
      id: 1,
      no: 1,
      name: "Dr. Pawan Pyara",
      fatherName: "Let. Ganesh Prasad",
      myCode: "9234692692",
      usedCode: "Null",
      mobile: "9234692692",
      password: "PYARA",
      email: "nayesochnayakadam@gmail.com",
      verified: "Verified",
    },
    {
      id: 2,
      no: 2,
      name: "Nitu Kumari",
      fatherName: "Sagar singh",
      myCode: "9608979708",
      usedCode: "9234692692",
      mobile: "9608979708",
      password: "123456",
      email: "manturani.pp@gmail.com",
      verified: "Not Verified",
    },
    {
      id: 3,
      no: 3,
      name: "Deepa Kumari",
      fatherName: "Umesh kr meheta",
      myCode: "917645936366",
      usedCode: "9234692692",
      mobile: "917645936366",
      password: "123456",
      email: "manturani.pp@gmail.com",
      verified: "Not Verified",
    },
    {
      id: 4,
      no: 4,
      name: "Sharban kumar das",
      fatherName: "Mahendra das",
      myCode: "919097934296",
      usedCode: "9234692692",
      mobile: "919097934296",
      password: "123456",
      email: "manturani.pp@gmail.com",
      verified: "Not Verified",
    },
    {
      id: 5,
      no: 5,
      name: "Munni jha",
      fatherName: "Jhgfcccc",
      myCode: "919113445716",
      usedCode: "9234692692",
      mobile: "919113445716",
      password: "PAWAN",
      email: "manturani.pp@gmail.com",
      verified: "Not Verified",
    },
    {
      id: 6,
      no: 6,
      name: "DHARMVEER PASWAN",
      fatherName: "Father",
      myCode: "919534244546",
      usedCode: "9234692692",
      mobile: "919534244546",
      password: "123456",
      email: "manturani.pp@gmail.com",
      verified: "Not Verified",
    },
  ];

  const columns = [
    "No.",
    "Name",
    "Father Name",
    "My Code",
    "Used Code",
    "Mobile",
    "Password",
    "Email",
    "Verify",
  ];

  return (
    <DataTable data={members} columns={columns} activeSection="membership" />
  );
};

export default MembershipData;
