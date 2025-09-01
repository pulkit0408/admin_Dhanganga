// src/components/settings/AddSubServices.jsx
import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

const AddSubServices = ({ services }) => {
  const [subServices, setSubServices] = useState([
    {
      id: 1,
      serviceId: 1, // Linked with service
      name: "PAN CARD",
      price: "130",
      days: "Maximum 2 days",
      documents: ["Photo", "Aadhar Card"],
    },
    {
      id: 2,
      serviceId: 1,
      name: "NEW G.S.T",
      price: "725",
      days: "Maximum 12 days",
      documents: ["Aadhar Card", "Photo", "Bank Passbook"],
    },
    {
      id: 3,
      serviceId: 3,
      name: "Allopathy",
      price: "500",
      days: "On Appointment",
      documents: [],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingSubService, setEditingSubService] = useState(null);
  const [newSubService, setNewSubService] = useState({
    serviceId: "",
    name: "",
    price: "",
    days: "",
    documents: "",
  });

  const handleAddSubService = (e) => {
    e.preventDefault();
    const id = Math.max(...subServices.map((s) => s.id), 0) + 1;
    setSubServices([
      ...subServices,
      {
        id,
        ...newSubService,
        documents: newSubService.documents.split(",").map((d) => d.trim()),
      },
    ]);
    resetForm();
  };

  const handleEditSubService = (sub) => {
    setEditingSubService(sub.id);
    setNewSubService({
      serviceId: sub.serviceId,
      name: sub.name,
      price: sub.price,
      days: sub.days,
      documents: sub.documents.join(", "),
    });
    setShowForm(true);
  };

  const handleUpdateSubService = (e) => {
    e.preventDefault();
    setSubServices(
      subServices.map((sub) =>
        sub.id === editingSubService
          ? {
              ...sub,
              ...newSubService,
              documents: newSubService.documents
                .split(",")
                .map((d) => d.trim()),
            }
          : sub
      )
    );
    resetForm();
  };

  const handleDeleteSubService = (id) => {
    if (window.confirm("Delete this sub-service?")) {
      setSubServices(subServices.filter((sub) => sub.id !== id));
    }
  };

  const resetForm = () => {
    setEditingSubService(null);
    setNewSubService({
      serviceId: "",
      name: "",
      price: "",
      days: "",
      documents: "",
    });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Sub Services</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Sub Service
        </button>
      </div>

      {/* Add/Edit Sub Service Form */}
      {showForm && (
        <form
          onSubmit={
            editingSubService ? handleUpdateSubService : handleAddSubService
          }
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Service *</label>
            <select
              value={newSubService.serviceId}
              onChange={(e) =>
                setNewSubService({
                  ...newSubService,
                  serviceId: Number(e.target.value),
                })
              }
              className="w-full border rounded-lg px-3 py-2"
              required
            >
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Sub Service Name *
            </label>
            <input
              type="text"
              value={newSubService.name}
              onChange={(e) =>
                setNewSubService({ ...newSubService, name: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Price (₹)
              </label>
              <input
                type="text"
                value={newSubService.price}
                onChange={(e) =>
                  setNewSubService({ ...newSubService, price: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Days Required
              </label>
              <input
                type="text"
                value={newSubService.days}
                onChange={(e) =>
                  setNewSubService({ ...newSubService, days: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Documents (comma separated)
            </label>
            <input
              type="text"
              value={newSubService.documents}
              onChange={(e) =>
                setNewSubService({
                  ...newSubService,
                  documents: e.target.value,
                })
              }
              placeholder="e.g., Aadhar Card, Photo, Bank Passbook"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              {editingSubService ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Sub Services Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Service</th>
              <th className="px-6 py-3 text-left">Sub Service</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Days</th>
              <th className="px-6 py-3 text-left">Documents</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subServices.map((sub) => {
              const parentService = services.find(
                (s) => s.id === sub.serviceId
              );
              return (
                <tr key={sub.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{parentService?.title}</td>
                  <td className="px-6 py-4">{sub.name}</td>
                  <td className="px-6 py-4">₹{sub.price}</td>
                  <td className="px-6 py-4">{sub.days}</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {sub.documents.map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => handleEditSubService(sub)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center"
                    >
                      <Edit className="h-4 w-4 mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSubService(sub.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {subServices.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No Sub Services Found
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSubServices;
