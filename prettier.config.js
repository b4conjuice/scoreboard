/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  semi: false,
}

export default config
