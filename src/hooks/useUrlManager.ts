import { useState, useEffect, useCallback } from 'react';
import { normalizeUrl, getUrlParameter } from '../utils/url';

interface UseUrlManagerReturn {
  inputUrl: string;
  currentUrl: string;
  useSandbox: boolean;
  setInputUrl: (url: string) => void;
  loadUrl: (url: string) => void;
  handleLoadClick: () => void;
}

export const useUrlManager = (isMobile: boolean): UseUrlManagerReturn => {
  const [inputUrl, setInputUrl] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [useSandbox, setUseSandbox] = useState(false);

  useEffect(() => {
    const urlParam = getUrlParameter('url');
    const sandboxParam = getUrlParameter('sandbox');
    
    if (urlParam) {
      setInputUrl(urlParam);
      loadUrl(urlParam);
    }
    
    // Check if sandbox mode is enabled
    setUseSandbox(sandboxParam === 'true' || sandboxParam === '1');
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
    useSandbox,
    setInputUrl,
    loadUrl,
    handleLoadClick,
  };
};
