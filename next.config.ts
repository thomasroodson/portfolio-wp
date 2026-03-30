import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Garante que styled-components gere IDs/markup de forma consistente no SSR.
    styledComponents: true,
  },
};

export default nextConfig;
