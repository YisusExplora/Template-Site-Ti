/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'main/styles')],
    prependData: `@import "_main.scss";`,
  },
  images: {
    domains: [
      'imgix.cosmicjs.com',
      'lh3.googleusercontent.com',
      'cdn.sanity.io',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {};
    config.optimization.minimize = true;
    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'cdn.sanity.io',],
  },
};

module.exports = nextConfig;
