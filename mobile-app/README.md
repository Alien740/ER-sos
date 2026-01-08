# Emergency Response Mobile App

## Overview
React Native application for users to send emergency SOS alerts with real-time location tracking.

## Features
- SOS Alert Button
- Real-time GPS Location Tracking
- Emergency Contacts Management
- Push Notifications
- Offline Support
- User Profile Management

## Prerequisites
- Node.js 16+
- npm or yarn
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS, macOS only)

## Installation

### 1. Install Dependencies
```bash
cd mobile-app
npm install
```

### 2. iOS Setup (macOS only)
```bash
cd ios
pod install
cd ..
```

### 3. Android Setup
Ensure Android SDK is installed via Android Studio.

## Running the App

### Android
```bash
npm run android
# or
npx react-native run-android
```

### iOS (macOS only)
```bash
npm run ios
# or
npx react-native run-ios
```

## Project Structure
```
mobile-app/
├── android/              # Android native code
├── ios/                  # iOS native code
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # App screens
│   ├── navigation/       # Navigation configuration
│   ├── services/         # API services
│   ├── store/            # Redux store (state management)
│   ├── utils/            # Utility functions
│   ├── constants/        # Constants and config
│   └── assets/           # Images, fonts, etc.
├── App.js               # Root component
└── package.json         # Dependencies
```

## Key Screens
1. **Login/Register** - User authentication
2. **Home** - Main screen with SOS button
3. **Profile** - User profile management
4. **Emergency Contacts** - Manage emergency contacts
5. **Alert History** - View past alerts
6. **Settings** - App settings and preferences

## Technologies Used
- React Native
- React Navigation
- Redux (State Management)
- Axios (HTTP Client)
- React Native Maps
- React Native Geolocation
- AsyncStorage (Local Storage)
- Firebase Cloud Messaging (Push Notifications)

## API Integration
Base URL: `https://api.er-sos.com/v1`

See [API Documentation](../docs/API.md) for endpoint details.

## Building for Production

### Android
```bash
cd android
./gradlew assembleRelease
```

### iOS
Use Xcode to build for production.

## Testing
```bash
npm test
```

---
*Last Updated: January 5, 2026*
