// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // only add basePath/assetPrefix in prod (GitHub Pages)
  ...(isProd ? {
    basePath: "/harshitapoojary.github.io",
    assetPrefix: "/harshitapoojary.github.io/",
  } : {}),
};
