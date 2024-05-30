/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    after: true,
    ppr: true,
    reactCompiler: false,
    typedRoutes: true,
  },
};

export default nextConfig;
