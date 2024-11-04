/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = withPWA(nextConfig);