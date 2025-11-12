import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DEVICES } from './constants/devices';
import { useDeviceOrientation } from './hooks/useDeviceOrientation';
import { useResponsive } from './hooks/useResponsive';
import { useUrlManager } from './hooks/useUrlManager';
import { UrlBar, DeviceFrame, MobileModal, EmptyState } from './components';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const { isMobile } = useResponsive();
  const { 
    selectedDevice, 
    isLandscape, 
    currentWidth, 
    currentHeight, 
    isCustomDevice,
    setSelectedDevice, 
    toggleOrientation 
  } = useDeviceOrientation(DEVICES[0]);
  const { inputUrl, currentUrl, useSandbox, setInputUrl, handleLoadClick } = useUrlManager(isMobile);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isMobile && !currentUrl) {
      setShowModal(true);
    }
  }, [isMobile, currentUrl]);

  const handleLoad = () => {
    handleLoadClick();
    if (isMobile) {
      setShowModal(false);
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const availableLanguages = ['en', 'es', 'fr', 'de', 'zh', 'ru', 'pt', 'ja'];

  return (
    <div className="app-container">
      {/* Desktop URL Bar */}
      {!isMobile && (
        <UrlBar
          inputUrl={inputUrl}
          selectedDevice={selectedDevice}
          currentLang={i18n.language}
          availableLanguages={availableLanguages}
          onInputChange={setInputUrl}
          onLoadClick={handleLoadClick}
          onDeviceChange={setSelectedDevice}
          onLanguageChange={changeLanguage}
        />
      )}

      {/* Main Content */}
      <div className="content">
        {currentUrl ? (
          <DeviceFrame
            device={selectedDevice}
            currentUrl={currentUrl}
            currentWidth={currentWidth}
            currentHeight={currentHeight}
            isCustomDevice={isCustomDevice}
            isLandscape={isLandscape}
            isMobile={isMobile}
            useSandbox={useSandbox}
            onToggleOrientation={toggleOrientation}
          />
        ) : !isMobile ? (
          <EmptyState />
        ) : null}
      </div>

      {/* Mobile URL Modal */}
      {showModal && isMobile && (
        <MobileModal
          inputUrl={inputUrl}
          currentLang={i18n.language}
          availableLanguages={availableLanguages}
          onInputChange={setInputUrl}
          onLoadClick={handleLoad}
          onLanguageChange={changeLanguage}
        />
      )}
    </div>
  );
}

export default App;
