var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var purify = require("purifycss-webpack-plugin");

var PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
}

module.exports = {
	entry: {
		homepage: PATHS.source
	},
	output:{
		path: PATHS.build,
		filename: '[name].js'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
	                    presets: ['es2015', 'stage-0']
	            }
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
				include: PATHS.source
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
				include: PATHS.source
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
        new ExtractTextPlugin("[name].css"),
        new purify({
            basePath: './',
            paths: [
                "*.html"
            ]
        })
    ]
}