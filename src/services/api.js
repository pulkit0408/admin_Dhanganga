// src/services/api.js
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api";

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Dashboard APIs
  async getDashboardStats() {
    return this.request("/dashboard/stats");
  }

  // Payment APIs
  async getPayments(page = 1, limit = 10, search = "") {
    return this.request(
      `/payments?page=${page}&limit=${limit}&search=${search}`
    );
  }

  async getPaymentDetails(id) {
    return this.request(`/payments/${id}`);
  }

  // Enquiry APIs
  async getEnquiries(page = 1, limit = 10, search = "") {
    return this.request(
      `/enquiries?page=${page}&limit=${limit}&search=${search}`
    );
  }

  async deleteEnquiry(id) {
    return this.request(`/enquiries/${id}`, {
      method: "DELETE",
    });
  }

  // Membership APIs
  async getMembers(page = 1, limit = 10, search = "") {
    return this.request(
      `/members?page=${page}&limit=${limit}&search=${search}`
    );
  }

  async updateMemberVerification(id, verified) {
    return this.request(`/members/${id}/verify`, {
      method: "PATCH",
      body: JSON.stringify({ verified }),
    });
  }

  async deleteMember(id) {
    return this.request(`/members/${id}`, {
      method: "DELETE",
    });
  }

  // Contact APIs
  async getContacts(page = 1, limit = 10, search = "") {
    return this.request(
      `/contacts?page=${page}&limit=${limit}&search=${search}`
    );
  }

  async deleteContact(id) {
    return this.request(`/contacts/${id}`, {
      method: "DELETE",
    });
  }

  // Services APIs
  async getServices() {
    return this.request("/services");
  }

  async createService(serviceData) {
    return this.request("/services", {
      method: "POST",
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(id, serviceData) {
    return this.request(`/services/${id}`, {
      method: "PUT",
      body: JSON.stringify(serviceData),
    });
  }

  async deleteService(id) {
    return this.request(`/services/${id}`, {
      method: "DELETE",
    });
  }
}

export default new ApiService();
