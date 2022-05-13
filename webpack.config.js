const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
