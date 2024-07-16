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
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-powered-by",
            value: "KDevLab Engine"
          }
        ]
      }
    ];
  },
};

export default nextConfig;
