// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // Дополнительные правила
  },
  ignoreFiles: ['.build/', 'node_modules/'],
};
