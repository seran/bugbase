var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	context: __dirname,

	entry: './ui/index.js',
	output: {
		path: path.resolve('./static/'),
		filename: "[name]-bundle.js",
	},

	plugins: [
	new BundleTracker({filename: './webpack-stats.json'}),
	new ESLintPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('development'),
			BASE_URL: JSON.stringify('http://127.0.0.1:8000/'),
		}
	})
	],

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.(scss|css)$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
		},
		]
	},

}
