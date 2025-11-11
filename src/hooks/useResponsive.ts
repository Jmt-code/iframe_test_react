import { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT } from '../constants/devices';

interface UseResponsiveReturn {
  isMobile: boolean;
  windowWidth: number;
  windowHeight: number;
}

export const useResponsive = (): UseResponsiveReturn => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowSize.width <= MOBILE_BREAKPOINT,
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
  };
};
