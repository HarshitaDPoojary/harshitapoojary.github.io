// next.config.js
const isProd = process.env.NODE_ENV === "production";
console.log(">>> NODE_ENV:", process.env.NODE_ENV, "isProd:", isProd);
console.log(">>> basePath:", isProd ? "/harshitapoojary.github.io" : "(none)");
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
