const { getDefaultConfig } = require("expo/metro-config");

// 1. Enable CSS for Expo.
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

const projectRoot = __dirname;

// 2. Enable NativeWind
const { withNativeWind } = require("nativewind/metro");
module.exports = withNativeWind(config, {
  // 3. Set `input` to your CSS file with the Tailwind at-rules
  input: "global.css",
  projectRoot,
});
