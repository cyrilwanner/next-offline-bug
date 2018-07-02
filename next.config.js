const withOffline = require('next-offline');

module.exports = withOffline({
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
});
