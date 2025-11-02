import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'),
    };
    return config;
  },
  /* config options here */
};

export default nextConfig;
