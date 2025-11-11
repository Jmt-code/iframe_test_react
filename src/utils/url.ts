/**
 * Validates and normalizes a URL by adding https:// if no protocol is present
 * @param url - The URL to normalize
 * @returns The normalized URL or null if empty
 */
export const normalizeUrl = (url: string): string | null => {
  const trimmedUrl = url.trim();
  
  if (!trimmedUrl) {
    return null;
  }

  if (!trimmedUrl.match(/^https?:\/\//i)) {
    return `https://${trimmedUrl}`;
  }

  return trimmedUrl;
};

/**
 * Validates if a string is a valid URL
 * @param url - The URL to validate
 * @returns true if the URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Gets URL parameter from current window location
 * @param param - The parameter name to retrieve
 * @returns The parameter value or null
 */
export const getUrlParameter = (param: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};
