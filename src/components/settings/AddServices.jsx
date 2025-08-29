// src/components/settings/AddServices.jsx
import React, { useState } from "react";
import { Plus, Edit, Trash2, Search, Filter, Eye, EyeOff } from "lucide-react";

const AddServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Dhanganga Online Public Kendra",
      description: "Responsive and functional IT design worldwide.",
      icon: "💻",
      link: "/discover-Public-Kendra",
      category: "Digital Services",
      status: "Active",
      price: "500.00",
    },
    {
      id: 2,
      title: "Dhanganga Associate",
      description: "Delivering professional IT services and solutions.",
      icon: "⚖️",
      link: "/discover-Association",
      category: "Professional Services",
      status: "Active",
      price: "1000.00",
    },
    {
      id: 3,
      title: "Dhanganga Physical Treatment Home",
      description: "Modern approach to physical wellness & care.",
      icon: "🏥",
      link: "/discover-Physical",
      category: "Healthcare",
      status: "Active",
      price: "800.00",
    },
    {
      id: 4,
      title: "Dhanganga Store",
      description: "Your trusted source for products & services.",
      icon: "🏪",
      link: "/discover-Store",
      category: "Retail",
      status: "Active",
      price: "300.00",
    },
    {
      id: 5,
      title: "Dhanganga Real Estate",
      description: "Helping you find your dream properties.",
      icon: "🏢",
      link: "/discover-RealEstate",
      category: "Real Estate",
      status: "Active",
      price: "2000.00",
    },
    {
      id: 6,
      title: "Dhanganga Hire Services",
      description: "Providing on-demand professional services.",
      icon: "🔧",
      link: "/discover-Hire",
      category: "Professional Services",
      status: "Active",
      price: "600.00",
    },
    {
      id: 7,
      title: "Dhanganga Hire Vehicle",
      description: "Vehicle rental solutions for all your needs.",
      icon: "🚗",
      link: "/discover-Vehicle",
      category: "Transportation",
      status: "Active",
      price: "1500.00",
    },
    {
      id: 8,
      title: "Naye Soch Naya Kadam",
      description: "Innovative solutions for a brighter tomorrow.",
      icon: "💡",
      link: "/discover-NayeSoch",
      category: "Innovation",
      status: "Active",
      price: "750.00",
    },
    {
      id: 9,
      title: "Netralay",
      description: "Eye care and vision wellness at its best.",
      icon: "👁️",
      link: "/discover-Netralay",
      category: "Healthcare",
      status: "Active",
      price: "400.00",
    },
    {
      id: 10,
      title: "Dhanganga Mystics Healing",
      description: "Spiritual & holistic healing practices.",
      icon: "✨",
      link: "/discover-Healing",
      category: "Wellness",
      status: "Active",
      price: "350.00",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [newService, setNewService] = useState({
    title: "",
    description: "",
    icon: "",
    link: "",
    category: "Digital Services",
    status: "Active",
    price: "",
  });

  const categories = [
    "Digital Services",
    "Professional Services",
    "Healthcare",
    "Retail",
    "Real Estate",
    "Transportation",
    "Innovation",
    "Wellness",
  ];

  const handleAddService = (e) => {
    e.preventDefault();
    const id = Math.max(...services.map((s) => s.id), 0) + 1;
    setServices([...services, { id, ...newService }]);
    setNewService({
      title: "",
      description: "",
      icon: "",
      link: "",
      category: "Digital Services",
      status: "Active",
      price: "",
    });
    setShowAddForm(false);
  };

  const handleEditService = (service) => {
    setEditingService(service.id);
    setNewService({
      title: service.title,
      description: service.description,
      icon: service.icon,
      link: service.link,
      category: service.category,
      status: service.status,
      price: service.price,
    });
    setShowAddForm(true);
  };

  const handleUpdateService = (e) => {
    e.preventDefault();
    setServices(
      services.map((service) =>
        service.id === editingService ? { ...service, ...newService } : service
      )
    );
    setEditingService(null);
    setNewService({
      title: "",
      description: "",
      icon: "",
      link: "",
      category: "Digital Services",
      status: "Active",
      price: "",
    });
    setShowAddForm(false);
  };

  const handleDeleteService = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  const toggleServiceStatus = (id) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? {
              ...service,
              status: service.status === "Active" ? "Inactive" : "Active",
            }
          : service
      )
    );
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingService(null);
    setNewService({
      title: "",
      description: "",
      icon: "",
      link: "",
      category: "Digital Services",
      status: "Active",
      price: "",
    });
  };

  // Filter services based on search and filters
  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !filterCategory || service.category === filterCategory;
    const matchesStatus = !filterStatus || service.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
          <p className="text-sm text-gray-600">
            Add, edit, and manage your service offerings
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center font-semibold shadow-lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Service
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add/Edit Service Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            {editingService ? "Edit Service" : "Add New Service"}
          </h3>
          <form
            onSubmit={editingService ? handleUpdateService : handleAddService}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Title *
                </label>
                <input
                  type="text"
                  value={newService.title}
                  onChange={(e) =>
                    setNewService({ ...newService, title: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={newService.price}
                  onChange={(e) =>
                    setNewService({ ...newService, price: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={newService.category}
                  onChange={(e) =>
                    setNewService({ ...newService, category: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={newService.status}
                  onChange={(e) =>
                    setNewService({ ...newService, status: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icon (Emoji)
                </label>
                <input
                  type="text"
                  value={newService.icon}
                  onChange={(e) =>
                    setNewService({ ...newService, icon: e.target.value })
                  }
                  placeholder="e.g., 💻, 🏥, 🚗"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link/Route
                </label>
                <input
                  type="text"
                  value={newService.link}
                  onChange={(e) =>
                    setNewService({ ...newService, link: e.target.value })
                  }
                  placeholder="e.g., /discover-service"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={newService.description}
                onChange={(e) =>
                  setNewService({ ...newService, description: e.target.value })
                }
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                {editingService ? "Update Service" : "Add Service"}
              </button>
              <button
                type="button"
                onClick={cancelForm}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Services List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Current Services ({filteredServices.length})
            </h3>
            <div className="text-sm text-gray-500">
              Total: {services.length} services
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredServices.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {service.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: {service.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs">
                      {service.description}
                    </div>
                    {service.link && (
                      <div className="text-xs text-blue-600 mt-1">
                        {service.link}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {service.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₹{service.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleServiceStatus(service.id)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                        service.status === "Active"
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : "bg-red-100 text-red-800 hover:bg-red-200"
                      }`}
                    >
                      {service.status === "Active" ? (
                        <Eye className="w-3 h-3 mr-1" />
                      ) : (
                        <EyeOff className="w-3 h-3 mr-1" />
                      )}
                      {service.status}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditService(service)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-xs font-semibold"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors flex items-center text-xs font-semibold"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">
                No services found
              </div>
              <div className="text-gray-500 text-sm">
                {searchTerm || filterCategory || filterStatus
                  ? "Try adjusting your search or filters"
                  : "Add your first service to get started"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddServices;
