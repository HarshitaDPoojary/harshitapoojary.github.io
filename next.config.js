// next.config.js
const repo = "harshitapoojary.github.io";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isProd ? {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  } : {}),
};
