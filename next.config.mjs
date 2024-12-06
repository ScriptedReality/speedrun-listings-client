/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com", "aceternity.com"],
    unoptimized: true
  },
  output: "export"
};

export default nextConfig;
