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
    //"@nuxtjs",
    // "plugin:nuxt/recommended",
    "eslint:recommended",

    // "plugin:vue/recommended"
    "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // "vue/max-attributes-per-line": ["error", {
    //   "singleline": 2,
    //   "multiline": {
    //     "max": 2,
    //     "allowFirstLine": false,
    //   },
    // },],
    semi: [2, "always"],
    "no-extra-semi": "warn",
    "no-console": "off",
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": [2, "never"]
      // "prettier/prettier": ["error", { semi: false }]
  }
};