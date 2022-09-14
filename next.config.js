/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
