const path = require('path');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = (env) => ({
	mode: 'production',
	entry:   {
		"index": "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, './' ),
		filename: "index.js"
	},
	module: {
		rules: [
		  {
			exclude: "/node_modules/"
		  }
		]
	},
	target: 'node',
    externals: [nodeExternals()],
	plugins: [new BundleAnalyzerPlugin()]
});