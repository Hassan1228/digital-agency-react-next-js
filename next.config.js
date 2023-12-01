/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
 experimental: {
        images: {
            unoptimized: true,
        },
}
}

module.exports = nextConfig
