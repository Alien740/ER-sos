import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication API
export const authAPI = {
  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  },

  verify: async () => {
    const response = await apiClient.get('/auth/verify');
    return response.data;
  },
};

// Alert API
export const alertAPI = {
  getAlerts: async (params = {}) => {
    const response = await apiClient.get('/alerts', { params });
    return response.data;
  },

  getAlertById: async (id) => {
    const response = await apiClient.get(`/alerts/${id}`);
    return response.data;
  },

  updateAlertStatus: async (id, status) => {
    const response = await apiClient.put(`/alerts/${id}/status`, { status });
    return response.data;
  },

  getActiveAlerts: async () => {
    const response = await apiClient.get('/alerts/active');
    return response.data;
  },
};

// User API
export const userAPI = {
  getUsers: async (params = {}) => {
    const response = await apiClient.get('/users', { params });
    return response.data;
  },

  getUserById: async (id) => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  },

  updateUser: async (id, userData) => {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await apiClient.delete(`/users/${id}`);
    return response.data;
  },
};

// Analytics API
export const analyticsAPI = {
  getStats: async (params = {}) => {
    const response = await apiClient.get('/analytics/stats', { params });
    return response.data;
  },

  getIncidentsByType: async (params = {}) => {
    const response = await apiClient.get('/analytics/incidents-by-type', { params });
    return response.data;
  },

  getResponseTimes: async (params = {}) => {
    const response = await apiClient.get('/analytics/response-times', { params });
    return response.data;
  },
};

export default apiClient;
