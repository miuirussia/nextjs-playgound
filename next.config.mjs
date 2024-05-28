/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    after: true,
    ppr: "incremental",
    reactCompiler: true,
    typedRoutes: true,
  },
};

export default nextConfig;
