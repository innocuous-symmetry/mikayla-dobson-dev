// more about configuring mdx
// https://nextjs.org/docs/pages/building-your-application/configuring/mdx

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      // If you use remark-gfm, you'll need to use next.config.mjs
      // as the package is ESM only
      // https://github.com/remarkjs/remark-gfm#install
      remarkPlugins: [require("remark-prism")],
      rehypePlugins: [],
      providerImportSource: "@mdx-js/react",
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    reactStrictMode: true,
    experimental: {
      // mdxRs: true,
      // serverActions: true,
    }
}

module.exports = withMDX(nextConfig);
