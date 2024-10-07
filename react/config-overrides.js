// config-overrides.js
module.exports = function override(config) {
  config.ignoreWarnings = [
    function ignoreSourceMapWarnings(warning) {
      return warning.message && warning.message.includes('Failed to parse source map');
    },
  ];
  return config;
};
