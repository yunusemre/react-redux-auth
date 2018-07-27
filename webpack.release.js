const path = require('path');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = (env) => ({
	mode: 'production',
	entry:   {
		"index": "./src/index.js"
	},
	module: {
		rules: [
			{
				test: /.\js$/,
				use: ['babel-loader'],
				exclude:[/node_modules/],
			}
		]
	},
	output: {
		path: path.resolve(__dirname, './' ),
		filename: "index.js"
	},
	target: 'node',
    externals: [nodeExternals()]
});