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
		"plugin:nuxt/recommended",
		"eslint:recommended",

		// "plugin:vue/recommended"
		"plugin:prettier/recommended"
	],
	// required to lint *.vue files
	plugins: ["vue"],
	// add your custom rules here
	rules: {
		"no-console": process.env.isProduction ? "error" : "off",
		"no-debugger": process.env.isProduction ? "error" : "off",
		// "vue/no-parsing-error": ["error", { "x-invalid-end-tag": false }],
		// "vue/max-attributes-per-line": ["error", {
		//   "singleline": 2,
		//   "multiline": {
		//     "max": 2,
		//     "allowFirstLine": false,
		//   },
		// },],
		// semi: [2, "always"],
		// "no-extra-semi": "warn",
		// "comma-dangle": ["error", "never"],
		// "space-before-function-paren": [2, "never"]m
		"prettier/prettier": [
			{ tabWidth: 2 },
			{ useTabs: true },
			{ printWidth: 100 },
			{ semi: false },
			{ htmlWhitespaceSensitivity: "ignore" }
		]
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)"],
			env: {
				mocha: true
			}
		}
	]
}
