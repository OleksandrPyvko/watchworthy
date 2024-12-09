/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional but recommended for catching issues
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;

// remotePatterns:  ["image.tmdb.org", "lh3.googleusercontent.com"],
