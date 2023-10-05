/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    reactStrictMode: true,
    experimental: {
      // mdxRs: true,
      serverActions: true,
    }
}

module.exports = nextConfig;
