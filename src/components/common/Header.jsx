// src/components/common/Header.jsx
import React from 'react';
import { Filter, Download } from 'lucide-react';

const Header = ({ activeSection, sidebarCollapsed, setSidebarCollapsed }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Filter className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeSection}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <button className="text-blue-500 hover:underline">Home</button>
              <span className="mx-2">/</span>
              <span className="capitalize">{activeSection}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Download className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;