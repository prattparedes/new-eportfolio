/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
