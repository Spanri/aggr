module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "always"],
    "no-extra-semi": "error",
    "no-console": "off",
    "comma-dangle": [2, "always"],
    "space-before-function-paren": [2, "never"],
  }
}
