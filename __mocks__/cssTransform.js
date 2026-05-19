module.exports = {
  process() {
    return { code: 'module.exports = {};' };
  },
};

module.exports.getCacheKey = () => 'cssTransform';