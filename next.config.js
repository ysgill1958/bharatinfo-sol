/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol/' : '',
}

module.exports = nextConfig 