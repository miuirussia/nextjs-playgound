/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    after: true,
    ppr: true,
    reactCompiler: false,
    taint: true,
    typedRoutes: true,
  },
};

export default nextConfig;
