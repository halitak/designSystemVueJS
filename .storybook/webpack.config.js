module.exports = async ({ config, mode }) => {
  config.module.rules.push({ test: /\.postcss$/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] });
  return config;
};