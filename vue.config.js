const CopyWebpackPlugin = require("copy-webpack-plugin");
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  // 打包忽略node_loader
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components");
  },
  // 配置cesuim
  configureWebpack: (config) => {
    const cwp = new CopyWebpackPlugin([
      {
        from: "./node_modules/earthsdk/dist/XbsjCesium",
        to: "js/earthsdk/XbsjCesium",
        toType: "dir",
      },
      {
        from: "./node_modules/earthsdk/dist/XbsjEarth",
        to: "js/earthsdk/XbsjEarth",
        toType: "dir",
      },
    ]);
    config.plugins.push(cwp);
  },
});
