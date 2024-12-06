/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
