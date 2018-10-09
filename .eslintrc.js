module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaVersion": 2017
	},
	"extends": ["eslint:recommended", "google"],
	"rules": {
		"semi": [2, "always"],
		"no-console": 1,
		"require-jsdoc": 1
	}
};