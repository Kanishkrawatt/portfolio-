/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://overlow.ikanishk.me/",
        permanent: true,
      },
      {
        source: "/overlow",
        destination: "https://overlow.ikanishk.me/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/kanishkrawatt",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/kanishk-rawat-1362ab231/",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/kanishk_rawatt/",
        permanent: true,
      },
      {
        source: "/mail",
        destination:
          "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWQDCcVFGBBhvHqrftmPkGfQvvsFZMHXNrzksmqsRbCcwLWXFJbsFgjlbZGJtKWLQdzfg",
        permanent: true,
      },
      {
        source: "/test",
        destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
