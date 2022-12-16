const isProd = process.env.NODE_ENV === 'production'
const plugins = []

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

plugins.push(withPWA)

/** @type {import(next).NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'source.unsplash.com']
  }
}

module.exports = plugins.reduce((acc, next) => next(acc), NextConfig)
