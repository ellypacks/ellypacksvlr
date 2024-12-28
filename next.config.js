/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ellypacksvlr',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  cleanDistDir: true,
};

module.exports = nextConfig; 