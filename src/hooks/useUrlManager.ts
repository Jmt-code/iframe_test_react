import { useState, useEffect, useCallback } from 'react';
import { normalizeUrl, getUrlParameter } from '../utils/url';

interface UseUrlManagerReturn {
  inputUrl: string;
  currentUrl: string;
  useSandbox: boolean;
  setInputUrl: (url: string) => void;
  handleLoadClick: () => void;
}

export const useUrlManager = (): UseUrlManagerReturn => {
  const [inputUrl, setInputUrl] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [useSandbox, setUseSandbox] = useState(false);

  const loadUrl = useCallback((url: string) => {
    const normalizedUrl = normalizeUrl(url);
    if (normalizedUrl) {
      setCurrentUrl(normalizedUrl);
    }
  }, []);

  useEffect(() => {
    const urlParam = getUrlParameter('url');
    const sandboxParam = getUrlParameter('sandbox');
    
    if (urlParam) {
      setInputUrl(urlParam);
      loadUrl(urlParam);
    }
    
    setUseSandbox(sandboxParam === 'true' || sandboxParam === '1');
  }, [loadUrl]);

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
    handleLoadClick,
  };
};
