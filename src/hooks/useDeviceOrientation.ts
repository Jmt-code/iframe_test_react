import { useState, useMemo } from 'react';
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

  const isCustomDevice = useMemo(() => 
    selectedDevice.name === 'Custom', 
    [selectedDevice]
  );

  const currentWidth = useMemo(() => 
    isLandscape ? selectedDevice.height : selectedDevice.width,
    [isLandscape, selectedDevice]
  );

  const currentHeight = useMemo(() => 
    isLandscape ? selectedDevice.width : selectedDevice.height,
    [isLandscape, selectedDevice]
  );

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
