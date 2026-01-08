# Emergency Response Backend Services

## Overview
Node.js/Express backend services for the Emergency Response Application with microservices architecture.

## Features
- RESTful API endpoints
- JWT authentication
- Role-based access control
- Real-time location tracking
- SMS and email notifications
- Database integration with PostgreSQL

## Prerequisites
- Node.js 16+
- npm or yarn
- PostgreSQL 13+
- Redis (optional, for caching)

## Installation

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ersos_db
DB_USER=postgres
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# Google Maps API
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Twilio Configuration (SMS)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_phone

# SendGrid Configuration (Email)
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@er-sos.com

# Firebase Configuration (Push Notifications)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
```

### 3. Database Setup
```bash
npm run db:migrate
npm run db:seed
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## Project Structure
```
backend/
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   └── validators/       # Input validation
├── tests/               # Test files
├── migrations/          # Database migrations
├── seeds/               # Database seeds
├── server.js            # Entry point
└── package.json         # Dependencies
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/verify` - Verify JWT token

### Alerts
- `POST /api/v1/alerts` - Create new alert
- `GET /api/v1/alerts` - Get all user alerts
- `GET /api/v1/alerts/:id` - Get alert by ID
- `PUT /api/v1/alerts/:id/status` - Update alert status
- `DELETE /api/v1/alerts/:id` - Cancel alert

### Users
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `GET /api/v1/users/emergency-contacts` - Get emergency contacts
- `POST /api/v1/users/emergency-contacts` - Add emergency contact
- `PUT /api/v1/users/emergency-contacts/:id` - Update emergency contact
- `DELETE /api/v1/users/emergency-contacts/:id` - Delete emergency contact

### Location
- `POST /api/v1/location/update` - Update user location
- `GET /api/v1/location/:userId` - Get current location
- `GET /api/v1/location/history/:userId` - Get location history

### Notifications
- `POST /api/v1/notifications/push` - Send push notification
- `POST /api/v1/notifications/sms` - Send SMS
- `POST /api/v1/notifications/email` - Send email

## Technologies Used
- Node.js & Express.js
- PostgreSQL (Database)
- Sequelize (ORM)
- JWT (Authentication)
- Bcrypt (Password hashing)
- Twilio (SMS)
- SendGrid (Email)
- Socket.io (Real-time communication)

## Testing
```bash
npm test
```

## Deployment
```bash
# Build Docker image
docker build -t er-sos-backend .

# Run container
docker run -p 3000:3000 er-sos-backend
```

---
*Last Updated: January 5, 2026*
