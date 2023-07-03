/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['cdn.schema.io', 'cdn.swell.store', 'media.istockphoto.com']
  }
};
