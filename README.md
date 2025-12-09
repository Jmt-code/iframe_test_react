# 📱 Mobile Iframe Viewer

A modern, responsive web application for previewing websites in different mobile device frames with multi-language support.

## 🌐 Live Demo

### Production (Vercel)
**[https://iframetest-rouge.vercel.app/](https://iframetest-rouge.vercel.app/)**

### GitHub Pages
**[https://jmt-code.github.io/iframe_test_react/](https://jmt-code.github.io/iframe_test_react/)**

## ✨ Features

- 🎨 Multiple device presets (iPhone, Samsung, Google Pixel, iPad)
- 🔄 Portrait/Landscape orientation toggle
- 📐 Custom resizable device frame
- 🌍 Multi-language support (8 languages)
- 📱 Fully responsive design
- ⚡ Built with React + TypeScript + Vite
- 🎯 Best practices and clean architecture
- 🔒 Full iframe permissions (camera, microphone, geolocation, etc.)
- 💾 LocalStorage language persistence
- 🚀 Optimized with useMemo and useCallback

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js and npm installed. If not, install them first:

```bash
# Check if installed
node -v
npm -v
```

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build

```bash
# Build for production
npm run build
```

### Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

Your app will be available at: `https://your-username.github.io/iframe_test_react/`

## 📱 Supported Devices

- **iPhone SE** (375×667)
- **iPhone 12/13** (390×844)
- **iPhone 14 Pro Max** (430×932)
- **Samsung Galaxy S21** (360×800)
- **Samsung Galaxy S21+** (384×854)
- **Google Pixel 5** (393×851)
- **iPad Mini** (768×1024)
- **iPad Pro** (1024×1366)
- **Custom** (resizable - drag bottom-right corner)

## 🌐 Supported Languages

- 🇬🇧 **English** (en) - Default
- 🇪🇸 **Español** (es)
- 🇫🇷 **Français** (fr)
- 🇩🇪 **Deutsch** (de)
- 🇨🇳 **中文** (zh)
- 🇷🇺 **Русский** (ru)
- 🇧🇷 **Português** (pt)
- 🇯🇵 **日本語** (ja)

### How i18n Works

- Auto-detects browser language on first visit
- Language preference saved in localStorage
- Language selector available in UI (desktop: top bar, mobile: modal)
- Lazy-loaded JSON files (only loads selected language)
- Translation files located in `public/i18n/*.json`

## 📝 Usage

### Desktop Mode

1. Enter a URL in the top bar
2. Select a device from the dropdown
3. Toggle orientation if needed
4. Change language from the selector

### Mobile Mode

1. A modal will appear on load
2. Select your preferred language
3. Enter a URL
4. The iframe will display full screen

### URL Parameter

You can pass a URL via query parameter:

**Production:**
```
https://iframetest-rouge.vercel.app/?url=example.com
```

**Development:**
```
http://localhost:5173/?url=https://example.com
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **react-i18next** - Internationalization
- **CSS3** - Modern styling with responsive design

## 🏗️ Architecture

Built with modern React best practices:

- **Component-based architecture**: Small, focused, reusable components
- **Custom hooks**: Logic extraction and reusability
- **TypeScript**: Full type safety
- **react-i18next**: Professional internationalization
- **Error boundaries**: Graceful error handling
- **Responsive design**: Mobile-first approach

### Project Structure

```
src/
├── components/         # React components
│   ├── DeviceFrame.tsx
│   ├── EmptyState.tsx
│   ├── ErrorBoundary.tsx
│   ├── MobileModal.tsx
│   └── UrlBar.tsx
├── constants/         # App constants
│   └── devices.ts
├── hooks/             # Custom hooks
│   ├── useDeviceOrientation.ts
│   ├── useResponsive.ts
│   └── useUrlManager.ts
├── locales/           # Translation files
│   ├── en.json
│   ├── es.json
│   └── ...
├── types/             # TypeScript types
│   └── index.ts
├── utils/             # Utility functions
│   └── url.ts
├── App.tsx            # Main component
├── App.css            # Styles
├── i18n.ts            # i18n configuration
└── main.tsx           # Entry point
```

## 🔧 Development

### Adding a New Language

1. Create `src/locales/{lang}.json`
2. Import in `src/i18n.ts`
3. Add to resources object

### Adding a New Device

Edit `src/constants/devices.ts`:

```typescript
export const DEVICES = [
  // ... existing devices
  { name: 'New Device', width: 400, height: 800 },
];
```

### Preview Production Build

```bash
npm run preview
```

## ⚠️ Limitations

Some websites block iframe embedding using `X-Frame-Options` header (e.g., Google, Facebook, Twitter). This is a server-side restriction and cannot be bypassed by the application.

## 📄 License

MIT

## 👨‍💻 Author

Created by **Juan Manuel Torres (Jmt-code)**  using React + TypeScript

[![GitHub](https://img.shields.io/badge/GitHub-Jmt--code-181717?style=flat&logo=github)](https://github.com/Jmt-code)
