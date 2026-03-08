import { useState, useEffect, useRef } from 'react';
import { MOBILE_BREAKPOINT } from '../constants/devices';

const RESIZE_DEBOUNCE_MS = 150;

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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return {
    isMobile: windowSize.width <= MOBILE_BREAKPOINT,
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
  };
};
