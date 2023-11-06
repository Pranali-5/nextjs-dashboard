/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
    loader: 'akamai',
    path: '/',
    // domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
       port: '',
       pathname: '/',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
       pathname: '/**',
      },
    ],
  },
  
};

module.exports = nextConfig;
