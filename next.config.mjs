/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true, // <=== disables image optimization
  },
  reactStrictMode: true,
};

export default nextConfig;
