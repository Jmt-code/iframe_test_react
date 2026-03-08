import { useState } from 'react';
import type { Device } from '../types';

interface UseDeviceOrientationReturn {
  selectedDevice: Device;
  isLandscape: boolean;
  currentWidth: number;
  currentHeight: number;
  isCustomDevice: boolean;
  setSelectedDevice: (device: Device) => void;
  toggleOrientation: () => void;
}

export const useDeviceOrientation = (initialDevice: Device): UseDeviceOrientationReturn => {
  const [selectedDevice, setSelectedDevice] = useState<Device>(initialDevice);
  const [isLandscape, setIsLandscape] = useState(false);

  const isCustomDevice = selectedDevice.name === 'Custom';
  const currentWidth = isLandscape ? selectedDevice.height : selectedDevice.width;
  const currentHeight = isLandscape ? selectedDevice.width : selectedDevice.height;

  const toggleOrientation = () => {
    setIsLandscape(prev => !prev);
  };

  return {
    selectedDevice,
    isLandscape,
    currentWidth,
    currentHeight,
    isCustomDevice,
    setSelectedDevice,
    toggleOrientation,
  };
};
