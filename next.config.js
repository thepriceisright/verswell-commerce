/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.schema.io", "cdn.shopify.com", "cdn.swell.store"]
    // formats: ['image/avif', 'image/webp'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.schema.io',
    //     pathname: '/s/files/**'
    //   }
    // ]
  }
};
