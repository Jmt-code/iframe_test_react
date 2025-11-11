import { useTranslation } from 'react-i18next';
import type { Device } from '../types';
import { DEVICES } from '../constants/devices';

interface UrlBarProps {
  inputUrl: string;
  selectedDevice: Device;
  currentLang: string;
  availableLanguages: readonly string[];
  onInputChange: (url: string) => void;
  onLoadClick: () => void;
  onDeviceChange: (device: Device) => void;
  onLanguageChange: (lang: string) => void;
}

export const UrlBar = ({
  inputUrl,
  selectedDevice,
  currentLang,
  availableLanguages,
  onInputChange,
  onLoadClick,
  onDeviceChange,
  onLanguageChange,
}: UrlBarProps) => {
  const { t } = useTranslation();

  const handleDeviceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value);
    onDeviceChange(DEVICES[index]);
  };

  const getDeviceDisplayName = (device: Device) => {
    return device.name === 'Custom' ? t('devices.custom') : device.name;
  };

  const getLanguageName = (code: string) => {
    return t(`languages.${code}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onLoadClick();
    }
  };

  return (
    <div className="url-bar">
      <div className="url-input-group">
        <input
          type="text"
          className="url-input"
          value={inputUrl}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={t('ui.urlPlaceholder')}
          onKeyUp={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={onLoadClick}>
          {t('ui.loadButton')}
        </button>
      </div>

      <div className="device-selector">
        <label>{t('ui.deviceLabel')}</label>
        <select 
          className="device-select" 
          onChange={handleDeviceChange}
          value={DEVICES.findIndex(d => d === selectedDevice)}
        >
          {DEVICES.map((device, i) => (
            <option key={i} value={i}>
              {getDeviceDisplayName(device)} ({device.width}×{device.height})
            </option>
          ))}
        </select>
      </div>

      <div className="language-selector">
        <select
          className="language-select"
          value={currentLang}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          {availableLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {getLanguageName(lang)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
