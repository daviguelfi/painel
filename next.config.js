/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    SKIP_PREFLIGHT_CHECK: true
  },
  trailingSlash: true,
  distDir: 'build'
}
