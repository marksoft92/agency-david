import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // jeśli korzystasz z zewnętrznych obrazków
  }
};

export default nextConfig;
