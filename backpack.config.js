const path = require("path");

// backpack.config.js
module.exports = {
  webpack: (config, options, webpack) => {
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
