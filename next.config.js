/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [{
    hostname:  'coin-images.coingecko.com',
    protocol: 'https',
    }],
	
  },
}

module.exports = nextConfig
