module.exports = function imageLoader({ src, width, quality }) {
  // For absolute URLs (external images)
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images in production (GitHub Pages)
  const basePath = process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '';
  
  // Remove any leading slash to avoid double slashes
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Construct the full URL
  return `${basePath}/${normalizedSrc}`;
}; 