/* eslint-disable no-param-reassign */
const path = require('path');

const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

module.exports = {
	lintOnSave: false,

	chainWebpack: (config) => {
		if (isProduction) {
			const vueTypesShimPath = path.resolve(__dirname, 'node_modules/vue-types/es/shim.js');
			config.resolve.alias.set('vue-types', vueTypesShimPath);
		}
	},

	transpileDependencies: [
		'vuetify',
	],
};
