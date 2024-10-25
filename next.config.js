/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional but recommended for catching issues
  images: {
    domains: ["image.tmdb.org"], // Allow TMDB images
  },
};

module.exports = nextConfig;
