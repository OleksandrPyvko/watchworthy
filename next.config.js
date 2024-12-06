/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional but recommended for catching issues
  images: {
    domains: ["image.tmdb.org", "lh3.googleusercontent.com"], // Allow TMDB images
  },
};

module.exports = nextConfig;
