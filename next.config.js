/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "http://localhost:3000",
      "https://cloudinary.com/",
      "lh3.googleusercontent.com",
    ],
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 2000],
  },
};

module.exports = nextConfig;
