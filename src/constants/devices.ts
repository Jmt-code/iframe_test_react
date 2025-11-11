import type { Device } from '../types';

export const DEVICES: readonly Device[] = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12/13', width: 390, height: 844 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
  { name: 'Samsung Galaxy S21', width: 360, height: 800 },
  { name: 'Samsung Galaxy S21+', width: 384, height: 854 },
  { name: 'Google Pixel 5', width: 393, height: 851 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad Pro', width: 1024, height: 1366 },
  { name: 'Custom', width: 375, height: 667 },
] as const;

export const MOBILE_BREAKPOINT = 768;

export const IFRAME_PERMISSIONS = 
  'accelerometer; autoplay; camera; clipboard-read; clipboard-write; ' +
  'encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; ' +
  'microphone; midi; payment; picture-in-picture; publickey-credentials-get; ' +
  'screen-wake-lock; usb; web-share; xr-spatial-tracking';
