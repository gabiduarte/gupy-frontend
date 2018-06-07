const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const cssPlugin = new ExtractTextPlugin('main.css');

module.exports = {
	devServer: {
		historyApiFallback: true,
	},

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				query: {
					plugins: ['transform-object-rest-spread']
				}
			}
		}, {
			test: /\.(s*)css$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		},
		{
			test: /\.(pdf|jpg|png|gif|svg|ico)$/,
			use: ['url-loader']
		}]
	},
	
	plugins: [htmlPlugin, cssPlugin],

	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};