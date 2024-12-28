const withNextIntl = require('next-intl/plugin')(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ellypacksvlr',
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig); 