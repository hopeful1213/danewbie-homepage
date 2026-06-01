import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기 (Cloudflare Pages / Netlify 등 어디든 배포 가능)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
