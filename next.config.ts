import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Development accepts a placeholder redirect; production remains a static export.
  output: process.env.NODE_ENV === "development" ? undefined : "export",
  trailingSlash: true,
  ...(process.env.NODE_ENV === "development" && {
    async redirects() {
      return [{ source: "/:placeholder(\\[locale\\])", destination: "/en/", permanent: false }];
    },
  }),
};

export default nextConfig;
