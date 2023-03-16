/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["elise.boldis.info"],
  },
};

module.exports = nextConfig;
