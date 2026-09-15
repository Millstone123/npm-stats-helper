// npm-stats-helper stats module
const loader = require('./loader.node');

module.exports = {
  analyze: () => ({
    version: loader.version,
    scale: loader.scale
  })
};
