import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "customer-93d8iy2yaaaecxeg.cloudflarestream.com",
      "lh3.googleusercontent.com",
      "pzfvtntvegbrhlgwraan.supabase.co",
      "sb.postclips.com",
      "p16-sign-va.tiktokcdn.com",
      "p16-pu-sign-no.tiktokcdn-eu.com",
    ],
  },
  reactStrictMode: false,
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb'
    }
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
};

export default nextConfig;