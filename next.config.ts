import type { NextConfig } from "next";

const backend =
  process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, "") ||
  "https://bitnbolt.in";

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
  // Same-origin proxy so the browser never hits cross-origin CORS / http→https redirects
  async rewrites() {
    return [
      {
        source: "/api/career/:path*",
        destination: `${backend}/api/career/:path*`,
      },
    ];
  },
};

export default nextConfig;
