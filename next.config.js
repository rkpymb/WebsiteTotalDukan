/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['fmenew.sgp1.cdn.digitaloceanspaces.com', 'api.toladukan.com', 'localhost'],
    loader: 'imgix',
    path: '',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    images: {
      unoptimized: true,
      
    }
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
