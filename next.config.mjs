/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    after: true,
    typedRoutes: true,
  },
};

export default nextConfig;
