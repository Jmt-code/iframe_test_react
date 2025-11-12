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
 * Handles cases where the URL might not be properly encoded
 * @param param - The parameter name to retrieve
 * @returns The parameter value or null
 */
export const getUrlParameter = (param: string): string | null => {
  const search = window.location.search;
  if (!search) return null;
  
  // Find where the param starts
  const paramPrefix = `${param}=`;
  const paramIndex = search.indexOf(`?${paramPrefix}`);
  const paramIndexAlt = search.indexOf(`&${paramPrefix}`);
  
  const startIndex = paramIndex !== -1 ? paramIndex + 1 : 
                     paramIndexAlt !== -1 ? paramIndexAlt + 1 : -1;
  
  if (startIndex === -1) return null;
  
  // Get everything after "param="
  const valueStart = startIndex + paramPrefix.length;
  const value = search.substring(valueStart);
  
  // Decode the value (handles both encoded and unencoded URLs)
  try {
    return decodeURIComponent(value);
  } catch {
    // If decode fails, return as is
    return value;
  }
};
