const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = (env) => ({
	mode: 'production',
	entry:   {
		"index": "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, './' ),
		filename: "index.js"
	}
});