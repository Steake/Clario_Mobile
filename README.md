# Clario Mobile 📱

A modern, AI-powered mental health and wellness mobile application built with React Native and Expo. Clario provides personalized mental health support, mood tracking, and AI-driven insights to help users manage their emotional well-being.

[![React Native](https://img.shields.io/badge/React%20Native-0.72-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## ✨ Features

### Core Functionality
- **🧠 AI-Powered Chat Assistant**: Intelligent conversational AI providing mental health support and guidance
- **📊 Mood Tracking**: Log and visualize your emotional state over time
- **📝 Journal Entries**: Private space for reflection and self-expression
- **🎯 Personalized Insights**: AI-driven analysis of patterns and trends
- **🔔 Smart Notifications**: Gentle reminders for check-ins and self-care activities
- **🌙 Dark Mode Support**: Comfortable viewing in any lighting condition
- **🔒 Privacy-First Design**: End-to-end encryption and local data storage options

### User Experience
- **Intuitive Onboarding**: Smooth introduction to app features
- **Customizable Dashboard**: Personalize your wellness tracking experience
- **Goal Setting & Progress**: Set and track mental health goals
- **Resource Library**: Access to mental health resources and exercises
- **Crisis Support**: Quick access to emergency mental health resources

## 🛠️ Tech Stack

### Frontend
- **React Native** (0.72+) - Cross-platform mobile framework
- **Expo** (SDK 49+) - Development and deployment platform
- **TypeScript** - Type-safe development
- **React Navigation** - Navigation and routing
- **React Native Paper** - Material Design components
- **React Native Reanimated** - Smooth animations

### State Management & Data
- **Redux Toolkit** - Centralized state management
- **RTK Query** - Data fetching and caching
- **AsyncStorage** - Local data persistence
- **React Hook Form** - Form validation and management

### AI & Backend
- **OpenAI API** - GPT-powered conversational AI
- **Firebase** - Authentication and real-time database
- **Cloud Functions** - Serverless backend logic
- **Firestore** - NoSQL database

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **React Native Testing Library** - Component testing
- **Detox** - End-to-end testing

### Analytics & Monitoring
- **Firebase Analytics** - User behavior tracking
- **Sentry** - Error tracking and monitoring
- **Firebase Crashlytics** - Crash reporting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac only) or Android Studio
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Steake/Clario_Mobile.git
   cd Clario_Mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   # Firebase Configuration
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_auth_domain
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id

   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-4

   # App Configuration
   APP_ENV=development
   API_BASE_URL=https://api.clario.app
   ```

4. **Run the development server**
   ```bash
   # Start Expo development server
   npx expo start

   # Run on iOS simulator
   npx expo start --ios

   # Run on Android emulator
   npx expo start --android
   ```

5. **Run tests**
   ```bash
   # Unit tests
   npm test

   # E2E tests
   npm run test:e2e

   # Test coverage
   npm run test:coverage
   ```

## 🚀 Deployment

### Building for Production

#### iOS Build
```bash
# Configure iOS credentials
eas build:configure

# Build for iOS
eas build --platform ios --profile production

# Submit to App Store
eas submit --platform ios
```

#### Android Build
```bash
# Build for Android
eas build --platform android --profile production

# Submit to Google Play
eas submit --platform android
```

### EAS Build Profiles

Configure `eas.json`:
```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "channel": "preview"
    },
    "production": {
      "channel": "production"
    }
  }
}
```

### Continuous Integration

The project uses GitHub Actions for CI/CD:
- Automated testing on pull requests
- Automatic builds for main branch
- Deployment to staging/production environments

## 📁 Project Structure

```
Clario_Mobile/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Generic components (Button, Card, etc.)
│   │   ├── mood/           # Mood tracking components
│   │   ├── chat/           # AI chat interface
│   │   └── journal/        # Journal entry components
│   ├── screens/            # App screens/pages
│   │   ├── auth/           # Authentication screens
│   │   ├── home/           # Home dashboard
│   │   ├── chat/           # Chat screen
│   │   ├── journal/        # Journal screens
│   │   ├── insights/       # Analytics and insights
│   │   └── settings/       # User settings
│   ├── navigation/         # Navigation configuration
│   ├── store/              # Redux store and slices
│   │   ├── slices/         # Feature-specific slices
│   │   └── api/            # RTK Query API definitions
│   ├── services/           # External services integration
│   │   ├── ai/             # OpenAI service
│   │   ├── firebase/       # Firebase integration
│   │   └── storage/        # Local storage service
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── constants/          # App constants and config
│   ├── theme/              # Theme and styling
│   ├── types/              # TypeScript type definitions
│   └── assets/             # Images, fonts, icons
├── __tests__/              # Test files
├── .expo/                  # Expo configuration
├── app.json                # Expo app configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── eas.json               # EAS Build configuration
```

## 🤖 AI Features

### Conversational AI
- **Context-Aware Responses**: AI understands conversation history and user context
- **Emotion Detection**: Identifies emotional tone and provides appropriate responses
- **Personalized Suggestions**: Tailored coping strategies and recommendations
- **Crisis Detection**: Recognizes distress signals and provides immediate resources

### AI Models Used
- **GPT-4**: Primary conversational model for nuanced understanding
- **Text Embeddings**: For semantic search in resources and past conversations
- **Sentiment Analysis**: Real-time emotion detection from user inputs

### Privacy & AI
- **Data Minimization**: Only necessary data sent to AI services
- **Anonymous Processing**: Personal identifiers removed from AI requests
- **Opt-Out Options**: Users can disable AI features
- **Local Processing**: Where possible, on-device ML models used

## 🎨 Design System

### Color Palette
```javascript
const colors = {
  primary: {
    main: '#6B4EFF',
    light: '#9B7FFF',
    dark: '#4B2EDF'
  },
  secondary: {
    main: '#FF6B9D',
    light: '#FF9BBF',
    dark: '#DF4B7D'
  },
  neutral: {
    white: '#FFFFFF',
    gray100: '#F5F5F7',
    gray200: '#E5E5EA',
    gray300: '#D1D1D6',
    gray400: '#C7C7CC',
    black: '#000000'
  },
  semantic: {
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#007AFF'
  }
}
```

### Typography
- **Primary Font**: SF Pro (iOS), Roboto (Android)
- **Scale**: 12px, 14px, 16px, 20px, 24px, 32px, 40px
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing System
Based on 8px grid: 4px, 8px, 16px, 24px, 32px, 40px, 48px, 64px

## 🔒 Security

### Data Protection
- **End-to-End Encryption**: Sensitive data encrypted at rest and in transit
- **Secure Storage**: Keychain (iOS) and Keystore (Android) for credentials
- **Data Anonymization**: Personal data anonymized for analytics
- **GDPR Compliant**: Full compliance with data protection regulations

### Authentication
- **Firebase Authentication**: Secure user authentication
- **Biometric Auth**: Face ID and fingerprint support
- **Session Management**: Secure token handling and refresh
- **2FA Support**: Optional two-factor authentication

### Best Practices
- Regular security audits
- Dependency vulnerability scanning
- Code signing and certificate pinning
- Secure API communication (HTTPS only)

### Compliance
- **HIPAA Considerations**: Privacy measures for health data
- **GDPR**: Data protection and user rights
- **CCPA**: California privacy compliance
- **App Store Guidelines**: Full compliance with platform policies

## 🔮 Future Enhancements

### Planned Features
- [ ] **Community Support**: Peer-to-peer support groups
- [ ] **Professional Connect**: Connect with licensed therapists
- [ ] **Wearable Integration**: Sync with Apple Health, Google Fit
- [ ] **Voice Journaling**: Audio diary entries with transcription
- [ ] **Meditation & Mindfulness**: Guided sessions and exercises
- [ ] **Multi-language Support**: Internationalization (i18n)
- [ ] **Offline Mode**: Full functionality without internet
- [ ] **Advanced Analytics**: Deeper insights with ML models
- [ ] **Family Sharing**: Support for family/caregiver accounts
- [ ] **Custom Triggers**: Personalized warning signs tracking

### Technical Improvements
- [ ] GraphQL API migration
- [ ] WebSocket for real-time features
- [ ] Advanced caching strategies
- [ ] Performance optimizations
- [ ] Accessibility enhancements (WCAG 2.1 AA)
- [ ] Progressive Web App (PWA) version

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Write unit tests for new features
- Maintain 80%+ code coverage
- Follow the existing code style
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Project Maintainer**: [@Steake](https://github.com/Steake)

## 📞 Support

- **Documentation**: [docs.clario.app](https://docs.clario.app)
- **Issues**: [GitHub Issues](https://github.com/Steake/Clario_Mobile/issues)
- **Email**: support@clario.app
- **Discord**: [Join our community](https://discord.gg/clario)

## 🙏 Acknowledgments

- Mental health professionals who provided guidance
- Open-source community for amazing tools
- Users who trust us with their wellness journey

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/Steake/Clario_Mobile)
![GitHub issues](https://img.shields.io/github/issues/Steake/Clario_Mobile)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Steake/Clario_Mobile)

---

**⚠️ Important Notice**: Clario is designed to support mental wellness but is not a substitute for professional medical advice, diagnosis, or treatment. If you're experiencing a mental health crisis, please contact emergency services or a crisis helpline immediately.

**Crisis Resources**:
- 🇺🇸 National Suicide Prevention Lifeline: 988
- 🇺🇸 Crisis Text Line: Text HOME to 741741
- 🌍 International: [findahelpline.com](https://findahelpline.com)

---

Made with ❤️ for mental health and wellness

*Last Updated: January 2026*
