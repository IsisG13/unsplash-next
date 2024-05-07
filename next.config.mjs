/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  env: {
    UNSPLASH_aCCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
  }
};

export default nextConfig;
