/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname:
          process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME ||
          "my-website-wp-cms.local",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
