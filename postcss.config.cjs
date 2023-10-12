const nested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const postcssCustomMedia = require('postcss-custom-media')

module.exports = {
  plugins: [nested(), postcssPresetEnv(), postcssCustomMedia({})]
}
