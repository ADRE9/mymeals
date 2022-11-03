const presets = ['module:metro-react-native-babel-preset'];
let plugins = ['react-native-reanimated/plugin'];

if (process.env['ENV'] === 'prod') {
  plugins = ['transform-remove-console', ...plugins];
}

module.exports = {presets, plugins};
