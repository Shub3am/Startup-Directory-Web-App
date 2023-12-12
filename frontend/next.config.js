/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
      env: {
        SERVER: process.env.NEXT_PUBLIC_SERVER_URL
      }
}

module.exports = nextConfig
