/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "hgbzsceblfigpnzgrqcp.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

const cdn = "https:///storage/v1/object/sign/transaction_proof/";
