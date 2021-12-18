module.exports = {
  reactStrictMode: true,
}

// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  /** Tell Next that it should render MDX files as page if they're in the page directory. */
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

/** Wrap the config so it can add all of the necessary configuration to process MDX files. */
module.exports = withMDX(nextConfig);
