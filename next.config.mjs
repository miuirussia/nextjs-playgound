/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    after: true,
    ppr: "incremental",
    typedRoutes: true,
  },
};

export default nextConfig;
