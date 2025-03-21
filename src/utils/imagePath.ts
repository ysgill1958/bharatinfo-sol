/**
 * Utility function to get the correct image path based on environment
 * This ensures consistent path handling across the application
 */
export const getImagePath = (path: string): string => {
  // Handle null/undefined paths
  if (!path) return '';
  
  // If path is already a full URL, return it as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Add basePath in production
  return process.env.NODE_ENV === 'production' 
    ? `/bharatinfo-sol${normalizedPath}` 
    : normalizedPath;
};

/**
 * Utility function to get a URL for CSS background images
 */
export const getBackgroundImageUrl = (path: string): string => {
  const imagePath = getImagePath(path);
  return `url(${imagePath})`;
}; 