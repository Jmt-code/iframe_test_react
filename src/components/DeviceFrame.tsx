import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Device } from '../types';
import { IFRAME_PERMISSIONS } from '../constants/devices';

interface DeviceFrameProps {
  device: Device;
  currentUrl: string;
  currentWidth: number;
  currentHeight: number;
  isCustomDevice: boolean;
  isLandscape: boolean;
  isMobile: boolean;
  useSandbox: boolean;
  onToggleOrientation: () => void;
}

export const DeviceFrame = ({
  device,
  currentUrl,
  currentWidth,
  currentHeight,
  isCustomDevice,
  isLandscape,
  isMobile,
  useSandbox,
  onToggleOrientation,
}: DeviceFrameProps) => {
  const { t } = useTranslation();

  const deviceStyle = useMemo(() => {
    if (isMobile) {
      return { width: '100%', height: '100%' };
    }
    return {
      width: `${currentWidth}px`,
      height: `${currentHeight}px`,
    };
  }, [isMobile, currentWidth, currentHeight]);

  const iframeHeight = useMemo(() => {
    if (isMobile) return '100%';
    return `${currentHeight - 60}px`;
  }, [isMobile, currentHeight]);

  const getDeviceDisplayName = (device: Device) => {
    return device.name === 'Custom' ? t('devices.custom') : device.name;
  };

  return (
    <div
      className={`device-frame ${isCustomDevice && !isMobile ? 'custom' : ''}`}
      style={deviceStyle}
    >
      {!isMobile && (
        <div className="device-info">
          <span className="device-name">
            {getDeviceDisplayName(device)} - {currentWidth}×{currentHeight}
          </span>
          <button
            className="btn-orientation"
            onClick={onToggleOrientation}
            title={t('ui.portrait')}
            aria-label={isLandscape ? t('ui.portrait') : t('ui.landscape')}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              aria-hidden="true"
            >
              {!isLandscape ? (
                <>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <path d="M8 21h8M12 17v4" />
                </>
              ) : (
                <>
                  <rect x="3" y="2" width="14" height="20" rx="2" ry="2" transform="rotate(90 10 12)" />
                  <path d="M17 8v8M21 12h-4" />
                </>
              )}
            </svg>
            {isLandscape ? t('ui.portrait') : t('ui.landscape')}
          </button>
        </div>
      )}
      <div className="iframe-container" style={{ height: iframeHeight }}>
        <iframe
          src={currentUrl}
          allow={useSandbox ? IFRAME_PERMISSIONS : undefined}
          sandbox={
            useSandbox
              ? 'allow-scripts allow-forms allow-popups allow-modals'
              : undefined
          }
          allowFullScreen
          loading="lazy"
          title="Preview Frame"
        />
      </div>
    </div>
  );
};
