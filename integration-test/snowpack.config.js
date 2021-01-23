/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/dist' },
  },
  buildOptions: {
    out: './dist',
  },
  plugins: ['snowpack-plugin-json5'],
  optimize: {
    bundle: true,
    treeshake: true,
    minify: true,
  },
};
