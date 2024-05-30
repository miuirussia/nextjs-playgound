/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    after: true,
    ppr: true,
    reactCompiler: true,
    typedRoutes: true,
  },
};

export default nextConfig;
