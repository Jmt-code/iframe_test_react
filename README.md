# 📱 Mobile Iframe Viewer# 📱 Mobile Iframe Viewer# 📱 Mobile Iframe Viewer (React + TypeScript)# React + TypeScript + Vite



A modern, responsive web application for previewing websites in different mobile device frames with multi-language support.



## 🌐 Live DemoA modern, responsive web application for previewing websites in different mobile device frames with multi-language support.



**[https://jmt-code.github.io/iframe_test_react/](https://jmt-code.github.io/iframe_test_react/)**



## ✨ Features## ✨ FeaturesReact web application to preview websites in an iframe with mobile device simulation.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



- 🎨 Multiple device presets (iPhone, Samsung, Google Pixel, iPad)

- 🔄 Portrait/Landscape orientation toggle

- 📐 Custom resizable device frame- 🎨 Multiple device presets (iPhone, Samsung, Google Pixel, iPad)

- 🌍 Multi-language support (8 languages)

- 📱 Fully responsive design- 🔄 Portrait/Landscape orientation toggle

- ⚡ Built with React + TypeScript + Vite

- 📐 Custom resizable device frame## 🚀 Quick StartCurrently, two official plugins are available:

## 🚀 Quick Start

- 🌍 Multi-language support (8 languages)

### Development

```bash- 📱 Fully responsive design

npm install

npm run dev- ⚡ Built with React + TypeScript + Vite

```

- 🎯 Best practices and clean architecture```bash- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

### Build

```bash

npm run build

```## 🚀 Quick Startnpm install- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### Deploy to GitHub Pages

```bash

npm run deploy### Developmentnpm run dev

```

```bash

## 🌐 Supported Languages

npm install```## React Compiler

- 🇬🇧 English

- 🇪🇸 Españolnpm run dev

- 🇫🇷 Français

- 🇩🇪 Deutsch```

- 🇨🇳 中文

- 🇷🇺 Русский

- 🇧🇷 Português

- 🇯🇵 日本語### BuildOpen: `http://localhost:5173/?url=https://example.com`The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).



## 📱 Supported Devices```bash



- iPhone SE (375×667)npm run build

- iPhone 12/13 (390×844)

- iPhone 14 Pro Max (430×932)```

- Samsung Galaxy S21 (360×800)

- Samsung Galaxy S21+ (384×854)## 🌐 Usage## Expanding the ESLint configuration

- Google Pixel 5 (393×851)

- iPad Mini (768×1024)### Preview Production Build

- iPad Pro (1024×1366)

- Custom (resizable)```bash



## 🛠️ Tech Stacknpm run preview



- **React 19** - UI library```### With URL parameter (recommended)If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **TypeScript** - Type safety

- **Vite** - Build tool and dev server

- **react-i18next** - Internationalization

- **CSS3** - Modern styling## 🌐 Supported Languages```



## 📝 Usage



### Desktop Mode- 🇬🇧 Englishhttp://localhost:5173/?url=https://your-site.com```js

1. Enter a URL in the top bar

2. Select a device from the dropdown- 🇪🇸 Español

3. Toggle orientation if needed

4. Change language from the selector- 🇫🇷 Français```export default defineConfig([



### Mobile Mode- 🇩🇪 Deutsch

1. A modal will appear on load

2. Select your preferred language- 🇨🇳 中文  globalIgnores(['dist']),

3. Enter a URL

4. The iframe will display full screen- 🇷🇺 Русский



### URL Parameter- 🇧🇷 Português### Without URL parameter  {

You can pass a URL via query parameter:

```- 🇯🇵 日本語

https://jmt-code.github.io/iframe_test_react/?url=example.com

```- **Desktop**: Enter URL in the top search bar    files: ['**/*.{ts,tsx}'],



## ⚠️ Limitations## 📱 Supported Devices



Some websites block iframe embedding using `X-Frame-Options` header (e.g., Google, Facebook, Twitter). This is a server-side restriction and cannot be bypassed by the application.- **Mobile**: A modal will appear to enter the URL    extends: [



## 📄 License- iPhone SE (375×667)



MIT- iPhone 12/13 (390×844)      // Other configs...



## 👨‍💻 Author- iPhone 14 Pro Max (430×932)



Created with ❤️ using React + TypeScript- Samsung Galaxy S21 (360×800)## 📱 Available Devices


- Samsung Galaxy S21+ (384×854)

- Google Pixel 5 (393×851)      // Remove tseslint.configs.recommended and replace with this

- iPad Mini (768×1024)

- iPad Pro (1024×1366)- iPhone SE (375×667)      tseslint.configs.recommendedTypeChecked,

- Custom (resizable)

- iPhone 12/13 (390×844)      // Alternatively, use this for stricter rules

## 🏗️ Architecture

- iPhone 14 Pro Max (430×932)      tseslint.configs.strictTypeChecked,

Built with modern React best practices:

- Samsung Galaxy S21 (360×800)      // Optionally, add this for stylistic rules

- **Component-based architecture**: Small, focused, reusable components

- **Custom hooks**: Logic extraction and reusability- Samsung Galaxy S21+ (384×854)      tseslint.configs.stylisticTypeChecked,

- **TypeScript**: Full type safety

- **react-i18next**: Professional internationalization- Google Pixel 5 (393×851)

- **Error boundaries**: Graceful error handling

- **Responsive design**: Mobile-first approach- iPad Mini (768×1024)      // Other configs...



For detailed architecture documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md)- iPad Pro (1024×1366)    ],



## 🛠️ Tech Stack- Custom (resizable - drag bottom-right corner)    languageOptions: {



- **React 19** - UI library      parserOptions: {

- **TypeScript** - Type safety

- **Vite** - Build tool and dev server## 🔄 Orientation Toggle        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- **react-i18next** - Internationalization

- **CSS3** - Styling with modern features        tsconfigRootDir: import.meta.dirname,



## 📝 UsageSwitch between portrait and landscape mode with a single click on the device info header.      },



### Desktop Mode      // other options...

1. Enter a URL in the top bar

2. Select a device from the dropdown## 🔧 Build & Deploy    },

3. Toggle orientation if needed

4. Change language from the selector  },



### Mobile Mode### Production build])

1. A modal will appear on load

2. Select your preferred language```bash```

3. Enter a URL

4. The iframe will display full screennpm run build



### URL Parameter```You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

You can also pass a URL via query parameter:

```

http://localhost:5173/?url=example.com

```### Deploy to GitHub Pages```js



## 🔧 Development```bash// eslint.config.js



### Project Structurenpm run deployimport reactX from 'eslint-plugin-react-x'

```

src/```import reactDom from 'eslint-plugin-react-dom'

├── components/      # React components

├── constants/       # App constants

├── hooks/          # Custom hooks

├── locales/        # Translation filesYour app will be available at: `https://your-username.github.io/iframe_test/`export default defineConfig([

├── types/          # TypeScript types

└── utils/          # Utility functions  globalIgnores(['dist']),

```

## 🌐 i18n (Internationalization)  {

### Adding a Translation

1. Create `src/locales/{lang}.json`    files: ['**/*.{ts,tsx}'],

2. Import in `src/i18n.ts`

3. Add to resources objectThe application supports **8 languages** with JSON files:    extends: [



### Adding a Device      // Other configs...

Edit `src/constants/devices.ts`:

```typescript- 🇬🇧 **English** (en) - Default      // Enable lint rules for React

export const DEVICES = [

  // ... existing devices- 🇪🇸 **Español** (es)      reactX.configs['recommended-typescript'],

  { name: 'New Device', width: 400, height: 800 },

];- 🇫🇷 **Français** (fr)      // Enable lint rules for React DOM

```

- 🇩🇪 **Deutsch** (de)      reactDom.configs.recommended,

## ⚠️ Limitations

- 🇨🇳 **中文** (zh)    ],

Some websites block iframe embedding using `X-Frame-Options` header (e.g., Google, Facebook, Twitter). This is a server-side restriction and cannot be bypassed by the application.

- 🇷🇺 **Русский** (ru)    languageOptions: {

## 📄 License

- 🇵🇹 **Português** (pt)      parserOptions: {

MIT

- 🇯🇵 **日本語** (ja)        project: ['./tsconfig.node.json', './tsconfig.app.json'],

## 👨‍💻 Author

        tsconfigRootDir: import.meta.dirname,

Created with ❤️ using React + TypeScript

### Translation Files      },

      // other options...

All translations are located in `public/i18n/*.json`:    },

  },

```json])

{```

  "app": { "title": "..." },
  "ui": { "loadButton": "...", "portrait": "...", "landscape": "...", ... },
  "modal": { "title": "..." },
  "messages": { ... },
  "devices": { "custom": "..." },
  "languages": { ... }
}
```

### How it works

- Auto-detects browser language on first visit
- Language preference saved in localStorage
- Language selector available in UI (desktop: top bar, mobile: modal)
- Lazy-loaded JSON files (only loads selected language)

## 🔒 Features

✅ Full iframe permissions (camera, microphone, geolocation, etc.)  
✅ Responsive design (fullscreen on mobile, simulator on desktop)  
✅ Multiple predefined mobile devices  
✅ Custom resizable mode  
✅ Landscape/Portrait orientation toggle  
✅ Multi-language interface (8 languages)  
✅ Auto-detect browser language  
✅ LocalStorage language persistence  
✅ React Hooks with TypeScript  
✅ Optimized with useMemo and useCallback

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Custom Hooks** - useI18n for internationalization
- **CSS3** - Styling with responsive design

## ⚠️ Limitations

Some websites block iframe embedding using `X-Frame-Options` header (e.g., Google, Facebook, Twitter). This is a server-side restriction and cannot be bypassed by the application.

## 📦 Project Structure

```
react/
├── public/
│   └── i18n/           # Translation JSON files
├── src/
│   ├── hooks/          # Custom hooks
│   │   └── useI18n.ts  # i18n hook
│   ├── types/          # TypeScript types
│   │   └── index.ts    # Type definitions
│   ├── App.tsx         # Main component
│   ├── App.css         # Styles
│   └── main.tsx        # Entry point
└── package.json
```
