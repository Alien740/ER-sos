import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_BASE_URL} from '../constants/config';

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
  async config => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      // Handle unauthorized - logout user
      await AsyncStorage.removeItem('authToken');
      // Navigate to login screen
    }
    return Promise.reject(error);
  },
);

// Authentication API
export const authAPI = {
  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', {email, password});
    return response.data;
  },
  
  register: async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
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
  createAlert: async (alertData) => {
    const response = await apiClient.post('/alerts', alertData);
    return response.data;
  },
  
  getAlerts: async () => {
    const response = await apiClient.get('/alerts');
    return response.data;
  },
  
  getAlertById: async (id) => {
    const response = await apiClient.get(`/alerts/${id}`);
    return response.data;
  },
  
  updateAlertStatus: async (id, status) => {
    const response = await apiClient.put(`/alerts/${id}/status`, {status});
    return response.data;
  },
  
  cancelAlert: async (id) => {
    const response = await apiClient.delete(`/alerts/${id}`);
    return response.data;
  },
};

// User API
export const userAPI = {
  getProfile: async () => {
    const response = await apiClient.get('/users/profile');
    return response.data;
  },
  
  updateProfile: async (userData) => {
    const response = await apiClient.put('/users/profile', userData);
    return response.data;
  },
  
  getEmergencyContacts: async () => {
    const response = await apiClient.get('/users/emergency-contacts');
    return response.data;
  },
  
  addEmergencyContact: async (contact) => {
    const response = await apiClient.post('/users/emergency-contacts', contact);
    return response.data;
  },
  
  updateEmergencyContact: async (id, contact) => {
    const response = await apiClient.put(`/users/emergency-contacts/${id}`, contact);
    return response.data;
  },
  
  deleteEmergencyContact: async (id) => {
    const response = await apiClient.delete(`/users/emergency-contacts/${id}`);
    return response.data;
  },
};

// Location API
export const locationAPI = {
  updateLocation: async (locationData) => {
    const response = await apiClient.post('/location/update', locationData);
    return response.data;
  },
  
  getLocationHistory: async (userId) => {
    const response = await apiClient.get(`/location/history/${userId}`);
    return response.data;
  },
};

export default apiClient;
