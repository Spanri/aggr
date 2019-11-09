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
    // "@nuxtjs",
    "plugin:nuxt/recommended",
    "eslint:recommended",
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 2,
      "multiline": {
        "max": 2,
        "allowFirstLine": false,
      },
    },],
    "semi": [2, "always"],
    "no-extra-semi": "warn",
    "no-console": "off",
    "comma-dangle": [2, "always"],
    "space-before-function-paren": [2, "never"],
  }
}
