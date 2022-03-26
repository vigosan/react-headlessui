module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '>0.2%, not dead, not op_mini all',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
