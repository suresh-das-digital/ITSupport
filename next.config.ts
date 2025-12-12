import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: 'standalone',
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [{
      hostname: 'images.unsplash.com',
    }],
  },
  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  trailingSlash: true,
  reactStrictMode: true,
};

const withNextIntl = createNextIntlPlugin();
export default withBundleAnalyzer(withNextIntl(nextConfig));
