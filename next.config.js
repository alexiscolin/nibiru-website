/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
  assetPrefix: './',
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
}

module.exports = nextConfig
