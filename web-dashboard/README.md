# Emergency Response Web Dashboard

## Overview
React-based web dashboard for emergency responders to monitor and manage incidents in real-time.

## Features
- Real-time incident monitoring
- Interactive map view with incident markers
- Resource allocation and management
- Analytics and reporting
- User and responder management
- Incident history and tracking

## Prerequisites
- Node.js 16+
- npm or yarn

## Installation

### 1. Install Dependencies
```bash
cd web-dashboard
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:3000/api/v1
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_SOCKET_URL=http://localhost:3000
```

## Running the Application

### Development Mode
```bash
npm start
```
Opens at `http://localhost:3001`

### Production Build
```bash
npm run build
```

## Project Structure
```
web-dashboard/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── store/           # Redux store
│   ├── utils/           # Utility functions
│   ├── styles/          # CSS/SCSS files
│   ├── constants/       # Constants and config
│   ├── App.js           # Root component
│   └── index.js         # Entry point
└── package.json         # Dependencies
```

## Key Pages
1. **Login** - Responder authentication
2. **Dashboard** - Overview of active incidents
3. **Map View** - Real-time incident locations
4. **Incident Details** - Detailed incident information
5. **Analytics** - Reports and statistics
6. **User Management** - Admin user management
7. **Settings** - Application settings

## Technologies Used
- React.js
- React Router (Navigation)
- Redux Toolkit (State Management)
- Material-UI (UI Components)
- Axios (HTTP Client)
- Socket.io Client (Real-time updates)
- Google Maps JavaScript API
- Chart.js (Data visualization)

## API Integration
Base URL: `http://localhost:3000/api/v1`

See [API Documentation](../docs/API.md) for endpoint details.

## Deployment
```bash
# Build for production
npm run build

# Deploy to hosting service (e.g., Netlify, Vercel)
# Upload the build/ folder
```

## Testing
```bash
npm test
```

---
*Last Updated: January 5, 2026*
