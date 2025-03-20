/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol/' : '',
  // Skip dynamic route generation for static export
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/directory': { page: '/directory' },
      '/news': { page: '/news' },
      '/northeast': { page: '/northeast' },
      '/chat': { page: '/chat' },
      '/tools': { page: '/tools' },
      '/categories': { page: '/categories' },
      '/solutions': { page: '/solutions' },
      '/professionals': { page: '/professionals' },
      '/services': { page: '/services' },
    };
  },
}

module.exports = nextConfig 