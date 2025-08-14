/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true, // ajuda a detectar problemas
  swcMinify: true,       // minificação mais rápida com SWC
  output: 'export',      // útil se for gerar site estático (next export)
  images: {
    unoptimized: true,   // necessário para export estático sem Image Optimization
  },
}

export default nextConfig