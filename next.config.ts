// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations

  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if needed
        hostname: "picsum.photos", // The domain you want to allow
        port: "", // Leave empty if no port is needed
        pathname: "/**", // Allow all paths on this hostname
      },
      // Add more remotePatterns for other image domains if needed
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
