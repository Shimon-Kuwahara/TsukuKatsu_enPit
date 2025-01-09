/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: (config) => {
      config.watchOptions = {
        poll: 800,
        aggregateTimeout: 300,
      };
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.dicebear.com',
          port: '',
          pathname: '/6.x/**', // バージョンに合わせて調整可能
        },
      ],
    },
  };
  
  export default nextConfig;
  