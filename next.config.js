/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
};

const nextDevConfig = {};
module.exports =
  process.env.NODE_ENV === "development" ? nextDevConfig : nextConfig;
