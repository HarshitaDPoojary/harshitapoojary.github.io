/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",            // puts the static site in ./out
  images: { unoptimized: true }, // next/image works on GitHub Pages
  trailingSlash: true,         // safer for static hosting (/path/index.html)
};
