import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // book list 이미지 외부 도메인 허용
  images: {
    domains: ["storage.googleapis.com"],
  },
};

export default nextConfig;
