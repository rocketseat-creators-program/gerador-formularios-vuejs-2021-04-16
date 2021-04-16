module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'consistent-return': 'off',
		'global-require': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'indent': ['error', 'tab'],
		'max-len': ['error', { code: 200 }],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-param-reassign': [
			'error',
			{
				'props': true,
				'ignorePropertyModificationsFor': [
					'state',
					'req',
					'res',
					'acc',
				]
			}
		],
		'no-tabs': 'off',
		'prefer-destructuring': ['error', {
			'object': true,
			'array': false,
		}],
		'vue/attribute-hyphenation': 'off',
		'vue/html-self-closing': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}],
		'vue/require-component-is': 'off',
		'vue/require-default-prop': 'off',
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
		}],
		'vue/singleline-html-element-content-newline': 'off',
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off'
			}
		},
	],
};
