/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.yusufdev.com",
      "blog.yusufdev.com",
      "lh3.googleusercontent.com",
    ],
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 2000],
  },
}

module.exports = nextConfig
