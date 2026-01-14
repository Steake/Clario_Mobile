# Clario Mobile - Decentralized Learning Marketplace

A decentralized mobile learning marketplace built with React Native and blockchain technology, enabling peer-to-peer course creation, enrollment, and credential verification.

## Features

- **Decentralized Course Marketplace**: Browse, create, and enroll in courses powered by blockchain technology
- **Wallet Integration**: Secure wallet connection with WalletConnect support
- **NFT Credentials**: Earn verifiable NFT certificates upon course completion
- **Interactive Learning**: Engage with multimedia content, quizzes, and assessments
- **Creator Tools**: Comprehensive course creation and management tools for educators
- **Token Rewards**: Earn and spend platform tokens for course activities
- **Social Learning**: Connect with peers, discuss topics, and share achievements
- **Cross-platform**: Runs on iOS, Android, and Web

## Tech Stack

- **Frontend**: React Native (Expo)
- **State Management**: Redux Toolkit
- **Blockchain**: Ethereum/Polygon with ethers.js
- **Navigation**: React Navigation
- **UI Components**: React Native Paper, Native Base
- **Storage**: AsyncStorage, SecureStore
- **API**: REST APIs with Axios
- **Authentication**: Web3 wallet authentication

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Steake/Clario_Mobile.git
cd Clario_Mobile
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
API_BASE_URL=your_api_url
INFURA_PROJECT_ID=your_infura_id
WALLET_CONNECT_PROJECT_ID=your_walletconnect_id
CONTRACT_ADDRESS=your_contract_address
```

## Development

Start the development server:

```bash
npm start
# or
yarn start
```

Run on specific platforms:

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Build

### Android

```bash
# Development build
eas build --platform android --profile development

# Production build
eas build --platform android --profile production
```

### iOS

```bash
# Development build
eas build --platform ios --profile development

# Production build
eas build --platform ios --profile production
```

### Web

```bash
npm run build:web
# or
yarn build:web
```

## Deployment

### Netlify Configuration

The project is configured for deployment on Netlify with the following settings:

**netlify.toml**:
```toml
[build]
  command = "npm run build:web"
  publish = "web-build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Deploy to Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:web`
3. Set publish directory: `web-build`
4. Add environment variables in Netlify dashboard
5. Deploy!

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Project Structure

```
Clario_Mobile/
├── src/
│   ├── components/        # Reusable UI components
│   ├── screens/          # Screen components
│   ├── navigation/       # Navigation configuration
│   ├── store/            # Redux store and slices
│   ├── services/         # API and blockchain services
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── constants/        # App constants
│   └── assets/           # Images, fonts, etc.
├── app.json              # Expo configuration
├── package.json          # Dependencies
├── netlify.toml          # Netlify configuration
└── README.md            # Documentation
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `API_BASE_URL` | Backend API URL | Yes |
| `INFURA_PROJECT_ID` | Infura project ID for blockchain | Yes |
| `WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | Yes |
| `CONTRACT_ADDRESS` | Smart contract address | Yes |
| `NETWORK_CHAIN_ID` | Blockchain network ID | Yes |
| `ENABLE_ANALYTICS` | Enable analytics tracking | No |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## Links

- **Website**: [Clario Mobile](https://clario-mobile.netlify.app)
- **Documentation**: [Full Documentation](https://docs.clario-mobile.com)
- **Smart Contracts**: [GitHub Repository](https://github.com/Steake/Clario_Contracts)
- **Backend API**: [GitHub Repository](https://github.com/Steake/Clario_Backend)
- **Discord Community**: [Join us](https://discord.gg/clario)
- **Twitter**: [@ClarioMobile](https://twitter.com/ClarioMobile)

---

Built with ❤️ by the Clario team
