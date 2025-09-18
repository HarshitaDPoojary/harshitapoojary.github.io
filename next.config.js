// next.config.js
const repo = "harshitapoojary.github.io";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  // Build a fully static site into ./out (required for GitHub Pages)
  output: "export",

  // GitHub Pages can’t run Next's image optimizer
  images: { unoptimized: true },

  // Safer routing on static hosts (/path/index.html)
  trailingSlash: true,

  // Prefix all asset and route URLs with the repo name in production
  ...(isProd ? {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  } : {}),

  // (Optional) expose the base path to use in <img> or CSS url(...) if needed
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};
