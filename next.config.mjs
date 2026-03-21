/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to enable server-side features (dynamic routes for /watch/[code])
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:3001',
  },
};

export default nextConfig;
