const path = require("path");

// Backpack.config.js
module.exports = {
  webpack: config => {
    // Perform customizations to config
    config.resolve = {
      alias: {
        src: path.resolve(__dirname, "src")
      }
    };

    // Important: return the modified config
    return config;
  }
};
