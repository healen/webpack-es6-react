var webpack=require("webpack");
var path=require("path");
module.exports={
	entry:[
	path.resolve(__dirname,"app/entry.js")
	],
	output:{
		path:path.join(__dirname,"build/js"),
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{test:/\.js$/,loaders:["babel"],exclude:/node_modules/},
			{
				test:/\.less$/,
				loader:"style!css!less"
			},{
		      test: /\.(png|jpg|svg|woff|eot|ttf)$/,
		      loader: 'url?limit=25000'
		    }
		]
	}
}
