/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://www.blog.ikanishk.me/',
      },
      {
        source:"/instagram",
        destination:'https://www.instagram.com/kanishk_rawatt/',
      },
      {
        source:"/github",
        destination:'https://github.com/kanishkrawatt',
      }

    ]
  },

};

module.exports = nextConfig;
