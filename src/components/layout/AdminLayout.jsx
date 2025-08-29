// src/components/layout/AdminLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const AdminLayout = ({ children, activeSection, setActiveSection }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div className="flex-1 flex flex-col">
        <Header 
          activeSection={activeSection}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;