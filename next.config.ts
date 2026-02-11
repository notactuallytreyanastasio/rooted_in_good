import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export",
    basePath: "/rooted_in_good",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
