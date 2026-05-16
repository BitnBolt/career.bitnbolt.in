import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/jobs",
        destination: "/internships",
        permanent: true,
      },
      {
        source: "/jobs/:path*",
        destination: "/internships",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
