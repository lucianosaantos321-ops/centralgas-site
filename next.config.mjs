/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This tells Next.js to export static HTML
  images: {
    unoptimized: true, // disables next/image optimization for static export
  },
};

export default nextConfig;
