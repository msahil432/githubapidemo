module.exports ={
	entry: './src/App.js',
	output:{
		path: __dirname,
		filename: 'app.js'
	},
	module:{
		loaders:[{
			test: /\.jsx?$/,
			exclude: /node_mudules/,
			loader: 'babel-loader',
			query:{
				presets:['es2015', 'react']
			}
		}]
	}
};