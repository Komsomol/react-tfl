const path = require("path");

module.exports = {
	entry: [
		"./src/src/main.js"
	],
	output: {
		path: __dirname + "/src/js",
		filename:"dist.js"
	},
	module:{
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			} 
		]
	}
};