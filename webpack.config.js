var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var OpenBrowserPlugin=require('open-browser-webpack-plugin');
module.exports={
	entry:'./src/scripts/app.js',
	output:{
		path:__dirname+'/build',//绝对路径
		//filename:'app_[hash].js'//生成以后具有版本号的文件，每做修改后会自动生成
		filename:'app.js'
	},
	devServer:{
		contentBase:'./build',
		host:'localhost',
		port:9000,
		historyApiFallback:false,
		proxy: {
		  '/api': {
			target: 'http://localhost:3000',
			pathRewrite: {'^/api': ''}
		  }
		}		
	},
	module: {
			loaders: [
		  // {
		  //   test: /\.css$/,
		  //   loader: 'style-loader!css-loader'
		  // },
		  {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
			  fallback: 'style-loader',
			  use: 'css-loader'
			})
		  },
		  {   test: /\.(png|jpg|jpeg|gif)$/,  
                loader: 'url-loader?limit=8192'  
          }  ,
		  // {
		  //   test: /\.scss$/,
		  //   loader: 'style-loader!css-loader!sass-loader'
		  // }
		  {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
			  fallback: 'style-loader',
			  use: 'css-loader!sass-loader'
			})
		  },
		  {
			  test:/\.js$/,
			  exclude:/node_modules/,
			  loader:'react-hot-loader!babel-loader'
		  }
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.ejs',//模板ejs，只要是文本文件，可以生成对应的html即可
			filename:'index.html',//生成html，路径在output配置里
			title:'豆瓣电影'
		}),
		new ExtractTextPlugin({
		 // filename: 'app_[hash].css',
		  filename: 'app.css',
		  disable: false,
		  allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			},
			output:{
				comments:false
			}
		}),
		new OpenBrowserPlugin({
			url:'http://localhost:9000'
		})
	],
	externals: {
		'react': 'window.React',
		'react-dom': 'window.ReactDOM',
		'react-router':'window.ReactRouter',
		'redux':'window.Redux',
		'react-redux':'window.ReactRedux'
	}
}