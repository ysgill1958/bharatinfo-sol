/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol/' : '',
  // Cannot use exportPathMap with App Router
  trailingSlash: true,
}

module.exports = nextConfig 