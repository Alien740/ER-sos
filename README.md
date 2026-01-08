# Emergency Response Application (ER-SOS)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: In Development](https://img.shields.io/badge/Status-In%20Development-yellow.svg)]()

## 📱 Project Overview

The **Emergency Response Application** is a mobile-first software system designed to provide immediate assistance during critical situations such as accidents, medical emergencies, or natural disasters. It enables users to send SOS alerts with real-time location data, while responders can monitor incidents through a web dashboard.

### 🎯 Motivation

Delays in emergency communication often result in loss of lives and resources. Current solutions are fragmented, lack integration, and fail to provide real-time location-based support. This project creates a unified, accessible, and scalable platform that bridges the gap between individuals in distress and emergency responders, ultimately improving response times and saving lives.

Originally designed for university students and late workers, the project has expanded to help people under various crisis situations.

## ✨ Key Features

### User Mobile App
- 🚨 One-tap SOS alert button
- 📍 Real-time GPS location tracking
- 📞 Emergency contacts management
- 🔔 Push notifications
- 💾 Offline support for emergency contacts
- 🔐 Secure authentication

### Responder Web Dashboard
- 🗺️ Real-time incident monitoring on interactive map
- 👥 Resource allocation and management
- 📊 Analytics and reporting
- 🎯 Incident prioritization
- 📝 Incident history tracking
- 🔒 Role-based access control

### Backend Services
- 🔄 RESTful API architecture
- 🔐 JWT authentication
- 📧 SMS and email notifications (Twilio, SendGrid)
- 🌐 Google Maps integration
- 💾 PostgreSQL database
- 🚀 Scalable microservices design

## 🏗️ Project Structure

```
ER-sos/
├── docs/                    # Project documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── PROJECT_PLAN.md
│   ├── ARCHITECTURE.md
│   └── RESOURCE_REQUIREMENTS.md
├── mobile-app/             # React Native mobile application
│   ├── src/
│   ├── package.json
│   └── README.md
├── backend/                # Node.js/Express backend services
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── README.md
├── web-dashboard/          # React web dashboard
│   ├── src/
│   ├── package.json
│   └── README.md
├── database/               # Database schemas and migrations
│   ├── schema.sql
│   ├── seed.sql
│   └── README.md
├── tests/                  # Test files
├── docker-compose.yml      # Docker composition
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- PostgreSQL 13+
- Android Studio / Xcode (for mobile development)
- Git

### Quick Start

#### 1. Clone the Repository
```bash
git clone https://github.com/Alien740/ER-sos.git
cd ER-sos
```

#### 2. Setup Database
```bash
# Create PostgreSQL database
createdb ersos_db

# Run schema
psql -d ersos_db -f database/schema.sql

# (Optional) Seed sample data
psql -d ersos_db -f database/seed.sql
```

#### 3. Setup Backend
```bash
cd backend
npm install

# Copy environment template
cp .env.example .env
# Edit .env with your configuration

# Start server
npm run dev
```

#### 4. Setup Web Dashboard
```bash
cd web-dashboard
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:3000/api/v1" > .env

# Start development server
npm start
```

#### 5. Setup Mobile App
```bash
cd mobile-app
npm install

# For iOS (macOS only)
cd ios && pod install && cd ..

# Run on Android
npm run android

# Run on iOS
npm run ios
```

### Using Docker
```bash
# Build and run all services
docker-compose up -d

# Access services:
# Backend: http://localhost:3000
# Web Dashboard: http://localhost:80
# Database: localhost:5432
```

## 📋 Project Objectives

1. ✅ Develop a mobile-first application for SOS alerts with real-time location
2. ✅ Provide responders with a web dashboard for incident monitoring
3. ✅ Implement secure authentication and role-based access
4. ✅ Integrate APIs (maps, SMS, push notifications)
5. ✅ Ensure usability and performance through intuitive UI
6. ✅ Prepare comprehensive documentation

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| Mobile App | React Native / Flutter |
| Web Dashboard | React.js + Material-UI |
| Backend | Node.js + Express.js |
| Database | PostgreSQL |
| Authentication | JWT |
| Maps | Google Maps API |
| SMS | Twilio |
| Email | SendGrid |
| Push Notifications | Firebase Cloud Messaging |
| Containerization | Docker |

## 📅 Project Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Requirement Analysis | 2 weeks | ⏳ Planned |
| System Design | 2 weeks | ⏳ Planned |
| Implementation | 5 weeks | ⏳ Planned |
| Deployment | 1 week | ⏳ Planned |
| Testing & Evaluation | 1.5 weeks | ⏳ Planned |
| Final Report | 0.5 weeks | ⏳ Planned |

**Total Duration**: 12 weeks

## 📊 Success Criteria

- ✅ Functional testing of all critical features
- ✅ Usability testing with feedback collection
- ✅ Performance testing (response times, load handling)
- ✅ Scalability testing with concurrent users
- ✅ Documentation quality and completeness
- ✅ Impact assessment on response time reduction

## 📖 Documentation

Detailed documentation is available in the `/docs` folder:
- [Project Overview](docs/PROJECT_OVERVIEW.md)
- [Project Plan & Gantt Chart](docs/PROJECT_PLAN.md)
- [System Architecture](docs/ARCHITECTURE.md)
- [Resource Requirements](docs/RESOURCE_REQUIREMENTS.md)

## 🧪 Testing

```bash
# Backend tests
cd backend && npm test

# Web dashboard tests
cd web-dashboard && npm test

# Mobile app tests
cd mobile-app && npm test
```

## 📝 API Documentation

Once the backend server is running, API documentation is available at:
- Health Check: `http://localhost:3000/health`

## 🤝 Contributing

This is an academic project. Contributions, suggestions, and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Nisath** - *Initial work* - [Alien740](https://github.com/Alien740)

## 🙏 Acknowledgments

- University faculty for project guidance
- Emergency services personnel for domain insights
- Open-source community for tools and frameworks

## 📞 Support

For questions or support, please contact:
- GitHub Issues: [Create an issue](https://github.com/Alien740/ER-sos/issues)

---

**⚠️ Note**: This is a development project. Do not use in actual emergency situations. Always call your local emergency services (911, 999, 112, etc.) in real emergencies.

*Last Updated: January 5, 2026*
