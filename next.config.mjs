/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'i.ibb.co'
    }],
    unoptimized: true
  },
  experimental: {
    missingSuspenseWithCSRBailout: false
  }
};

export default nextConfig;