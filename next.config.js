/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['demoapi.hormosync.com', 'localhost']
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
 
  trailingSlash:true,
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/crypto',
        permanent: true
      }
    ];
  }
}


module.exports = nextConfig
