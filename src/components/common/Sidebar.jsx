// src/components/common/Sidebar.jsx
import React from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  MessageSquare, 
  Users, 
  Settings, 
  User,
  Phone,
  Filter
} from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, sidebarCollapsed, setSidebarCollapsed }) => {
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'payments', label: 'Naye Soch Payment Data', icon: CreditCard },
    { id: 'enquiry', label: 'Enquiry Data', icon: MessageSquare },
    { id: 'membership', label: 'Membership Data', icon: Users },
    { id: 'contact', label: 'Contact Data', icon: Phone },
    { id: 'settings', label: 'Add Services', icon: Settings }
  ];

  return (
    <div className={`bg-gray-800 text-white transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">NS</span>
          </div>
          {!sidebarCollapsed && (
            <div>
              <h1 className="text-lg font-bold">Naye Soch</h1>
              <p className="text-sm text-gray-300">Board</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          {!sidebarCollapsed && <span className="text-sm">Dr. Pawan Pyara</span>}
        </div>
      </div>

      <nav className="mt-4">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
              activeSection === item.id ? 'bg-blue-600' : ''
            }`}
          >
            <item.icon className="h-5 w-5" />
            {!sidebarCollapsed && <span className="text-sm">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;