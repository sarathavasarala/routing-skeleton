var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var purify = require("purifycss-webpack-plugin");

var PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build'),
	assets: path.join(__dirname, 'assets')
}

module.exports = {
	entry: {
		app: PATHS.source,
		vendor: ['react','react-dom', 'react-router']
	},
	output:{
		path: PATHS.build,
		publicPath: '/',
		filename: '[name].js'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
	                    presets: ['react', 'es2015']
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
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'url?limit=8192?name=[path][name].[ext]&context=./assets',
				include: PATHS.assets
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
        new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
		}),
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin("[name].css"),
        new purify({
            basePath: './',
            paths: [
                "*.html",
                "./source/*.js"
            ],
            purifyOptions: {
            	minify:true,
            	info:true
            }
        }),
        new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.optimize.UglifyJsPlugin({ 
	    	compress: {
	    		warnings:false
	    	}
	    }),
	    new webpack.DefinePlugin({
		    'process.env': {
		        NODE_ENV: JSON.stringify("production"),
		    },
		})
    ]
}