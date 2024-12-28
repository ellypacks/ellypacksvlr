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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 