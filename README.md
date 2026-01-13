# Clario Mobile - Decentralized Learning Marketplace

Clario Mobile is a modern teaching platform powered by AI, built with React, TypeScript, and Google's Gemini AI. This application provides an interactive learning experience for students and educators.

## 🚀 Features

- **AI-Powered Learning**: Integrated with Google's Gemini AI for intelligent content generation and interaction
- **Modern UI**: Built with React 19 and TypeScript for a type-safe, responsive user experience
- **Fast Development**: Powered by Vite for lightning-fast development and optimized production builds
- **Routing**: Client-side routing with React Router DOM for seamless navigation

## 🛠️ Tech Stack

- **Frontend**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.12.0
- **AI Integration**: Google Gemini AI (@google/genai 1.35.0)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Steake/Clario_Mobile.git
cd Clario_Mobile
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_api_key_here
```

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔨 Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file includes:

- Automatic build configuration
- SPA routing support (redirects all routes to index.html)
- Environment variable configuration for Gemini API key

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set the `GEMINI_API_KEY` environment variable in Netlify's dashboard
3. Deploy! Netlify will automatically use the configuration from `netlify.toml`

## 📁 Project Structure

```
Clario_Mobile/
├── components/       # Reusable React components
├── screens/          # Application screens/pages
├── services/         # API and service integrations
├── App.tsx           # Main application component
├── index.tsx         # Application entry point
├── index.html        # HTML template
├── types.ts          # TypeScript type definitions
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies
└── netlify.toml      # Netlify deployment configuration
```

## 🔑 Environment Variables

- `GEMINI_API_KEY`: Your Google Gemini API key for AI functionality

## 📄 License

This project is private and not licensed for public use.

## 👥 Contributing

This is a private project. Contact the repository owner for contribution guidelines.

## 🔗 Links

- [Repository](https://github.com/Steake/Clario_Mobile)
- [Google Gemini AI](https://ai.google.dev/)

---

Built with ❤️ using React, TypeScript, and Gemini AI