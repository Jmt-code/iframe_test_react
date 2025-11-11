import { useTranslation } from 'react-i18next';

interface MobileModalProps {
  inputUrl: string;
  currentLang: string;
  availableLanguages: readonly string[];
  onInputChange: (url: string) => void;
  onLoadClick: () => void;
  onLanguageChange: (lang: string) => void;
}

export const MobileModal = ({
  inputUrl,
  currentLang,
  availableLanguages,
  onInputChange,
  onLoadClick,
  onLanguageChange,
}: MobileModalProps) => {
  const { t } = useTranslation();

  const getLanguageName = (code: string) => {
    return t(`languages.${code}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onLoadClick();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{t('modal.title')}</h2>

        <div className="modal-language-group">
          <select
            className="language-select-mobile"
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

        <div className="modal-input-group">
          <input
            type="text"
            className="url-input"
            value={inputUrl}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={t('ui.urlPlaceholder')}
            onKeyUp={handleKeyPress}
            autoFocus
          />
          <button className="btn btn-primary btn-block" onClick={onLoadClick}>
            {t('ui.openButton')}
          </button>
        </div>
      </div>
    </div>
  );
};
