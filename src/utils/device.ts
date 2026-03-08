import type { TFunction } from 'i18next';
import type { Device } from '../types';

/**
 * Returns the display name for a device, translating "Custom" if needed
 */
export const getDeviceDisplayName = (device: Device, t: TFunction): string => {
  return device.name === 'Custom' ? t('devices.custom') : device.name;
};
