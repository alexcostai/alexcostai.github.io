/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true | {
        enabled: true,
        silent: true,
   },
  }
}

module.exports = nextConfig
