import { useTranslation } from 'react-i18next';

export const EmptyState = () => {
  const { t } = useTranslation();

  return (
    <div className="empty-state">
      <h2>{t('messages.emptyStateTitle')}</h2>
      <p>{t('messages.emptyStateMessage')}</p>
    </div>
  );
};
