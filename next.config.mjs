/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["https://are-you-real-t.vercel.app"],
    },
  },
  images: {
    deviceSizes: [500, 1200],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kr.object.ncloudstorage.com",
      },
    ],
  },
};

export default nextConfig;
