/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '',
  // Cannot use exportPathMap with App Router
  trailingSlash: true,
  // Add runtime config to disable API routes in static build
  env: {
    STATIC_BUILD: process.env.NODE_ENV === 'production' ? 'true' : 'false',
    APP_BASE_PATH: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '',
  },
  // Add webpack configuration to handle image imports
  webpack: (config) => {
    // This helps with correct image path resolution
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: process.env.NODE_ENV === 'production' ? '/bharatinfo-sol' : '',
            outputPath: 'static/images',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 