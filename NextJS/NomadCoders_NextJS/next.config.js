/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC: process.env.NEXT_PUBLIC,
  },
  // url changes
  async redirects() {
    return [
      {
        source: "/old/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },
  // url does not change
  // async rewrites() {
  //   return [
  //     {
  //       source:"/api/movies",
  //       destination:`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
