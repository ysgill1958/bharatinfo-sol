/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bharatinfo-sol',
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
  assetPrefix: '/bharatinfo-sol/',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 