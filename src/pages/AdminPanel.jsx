// src/pages/AdminPanel.jsx
import React, { useState } from "react";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../components/dashboard/Dashboard";
import PaymentData from "../components/payments/PaymentData";
import EnquiryData from "../components/enquiry/EnquiryData";
import MembershipData from "../components/membership/MembershipData";
import ContactData from "../components/contact/ContactData";
import AddServices from "../components/settings/AddServices";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "payments":
        return <PaymentData />;
      case "enquiry":
        return <EnquiryData />;
      case "membership":
        return <MembershipData />;
      case "contact":
        return <ContactData />;
      case "settings":
        return <AddServices />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AdminLayout
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    >
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminPanel;
