import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from './components';
import App from './App.tsx';
import './i18n';
import './index.css';

declare const __APP_VERSION__: string;
console.log(`%c iframe-viewer v${__APP_VERSION__} `, 'background:#0366d6;color:#fff;border-radius:3px;padding:2px 4px');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
