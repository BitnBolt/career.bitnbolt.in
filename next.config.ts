import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/jobs",
        destination: "/internships",
        permanent: false,
      },
      {
        source: "/jobs/:path*",
        destination: "/internships",
        permanent: false,
      },
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
