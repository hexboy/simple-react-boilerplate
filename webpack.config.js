const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, './'),
	entry: './src/index.jsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.js', '.jsx']
				},
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	}
};
