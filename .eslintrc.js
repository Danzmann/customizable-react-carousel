module.exports = {
	"env": {
		"node": true,
		"browser": true,
		"es6": true,
        "commonjs": true,
        "jest": true,
	},
	"extends": ["airbnb"],
	"globals": {
		"Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "shallow": true,
        "render": true,
        "mount": true,
        "it": true,
        "describe": true,
        "beforeEach": true,
        "expect": true,
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
        "react",
        "enzyme"
	],
	"rules": {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/jsx-uses-react": ["error"],
		"react/jsx-uses-vars": ["error"],
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"indent": ["error", 4, {SwitchCase: 1}],

		// Indent JSX with 4 spaces
		"react/jsx-indent": ["error", 4],

		// Indent props with 4 spaces
		"react/jsx-indent-props": ["error", 4],
	}
};