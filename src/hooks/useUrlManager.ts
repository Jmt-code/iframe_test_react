import { useState, useEffect, useCallback } from 'react';
import { normalizeUrl, getUrlParameter } from '../utils/url';

interface UseUrlManagerReturn {
  inputUrl: string;
  currentUrl: string;
  setInputUrl: (url: string) => void;
  loadUrl: (url: string) => void;
  handleLoadClick: () => void;
}

export const useUrlManager = (isMobile: boolean): UseUrlManagerReturn => {
  const [inputUrl, setInputUrl] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    const urlParam = getUrlParameter('url');
    if (urlParam) {
      setInputUrl(urlParam);
      loadUrl(urlParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const loadUrl = useCallback((url: string) => {
    const normalizedUrl = normalizeUrl(url);
    if (normalizedUrl) {
      setCurrentUrl(normalizedUrl);
    }
  }, []);

  const handleLoadClick = useCallback(() => {
    if (inputUrl.trim()) {
      loadUrl(inputUrl);
    }
  }, [inputUrl, loadUrl]);

  return {
    inputUrl,
    currentUrl,
    setInputUrl,
    loadUrl,
    handleLoadClick,
  };
};
