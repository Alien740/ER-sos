// API Base URL
export const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3000/api/v1' 
  : 'https://api.er-sos.com/v1';

// Google Maps API Key
export const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Firebase Configuration
export const FIREBASE_CONFIG = {
  apiKey: 'YOUR_FIREBASE_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// App Constants
export const COLORS = {
  primary: '#E74C3C',      // Red for emergency
  secondary: '#3498DB',     // Blue
  success: '#27AE60',       // Green
  warning: '#F39C12',       // Orange
  danger: '#E74C3C',        // Red
  dark: '#2C3E50',          // Dark gray
  light: '#ECF0F1',         // Light gray
  white: '#FFFFFF',
  black: '#000000',
};

export const FONTS = {
  regular: 'System',
  bold: 'System',
  light: 'System',
};

export const SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

// Alert Types
export const ALERT_TYPES = {
  MEDICAL: 'medical',
  ACCIDENT: 'accident',
  FIRE: 'fire',
  CRIME: 'crime',
  NATURAL_DISASTER: 'natural_disaster',
  OTHER: 'other',
};

// Alert Status
export const ALERT_STATUS = {
  PENDING: 'pending',
  ACKNOWLEDGED: 'acknowledged',
  IN_PROGRESS: 'in_progress',
  RESOLVED: 'resolved',
  CANCELLED: 'cancelled',
};
